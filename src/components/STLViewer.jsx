import React, { useEffect, useState, Suspense } from 'react';
import { Canvas, useLoader, useThree } from '@react-three/fiber';
import { OrbitControls, useProgress, Html } from '@react-three/drei';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { ThreeMFLoader } from 'three/examples/jsm/loaders/3MFLoader';
import { MeshStandardMaterial } from 'three';
import Paper from '@mui/material/Paper';

// Import model metadata from JSON
import modelsData from '../assets/STL/models.json';

function Loader() {
  const { progress } = useProgress();
  return <Html center>Loading {progress.toFixed(0)} %</Html>;
}


function ModelLoader({ url, type, material }) {
  // Choose loader and render logic based on type or file extension
  if (type === 'stl' || url.toLowerCase().endsWith('.stl')) {
    const geometry = useLoader(STLLoader, url);
    return (
      <mesh geometry={geometry} castShadow receiveShadow>
        <meshStandardMaterial
          color={material?.color || '#8e8e8e'}
          metalness={material?.metalness ?? 0.3}
          roughness={material?.roughness ?? 0.6}
        />
      </mesh>
    );
  } else if (type === 'glb' || type === 'gltf' || url.toLowerCase().endsWith('.glb') || url.toLowerCase().endsWith('.gltf')) {
    const gltf = useLoader(GLTFLoader, url);
    return <primitive object={gltf.scene} castShadow receiveShadow />;
  } else if (type === '3mf' || url.toLowerCase().endsWith('.3mf')) {
    const object = useLoader(ThreeMFLoader, url);
    // 3MFLoader returns a Group or Object3D
    // Optionally override material if defined
    if (material) {
      object.traverse((child) => {
        if (child.isMesh) {
          child.material = new MeshStandardMaterial({
            color: material.color || '#8e8e8e',
            metalness: material.metalness ?? 0.3,
            roughness: material.roughness ?? 0.6,
          });
        }
      });
    }
    return <primitive object={object} castShadow receiveShadow />;
  } else {
    return <Html center>Unsupported file type</Html>;
  }
}

export default function STLViewer() {

  // Add support for type field, fallback to extension
  const [selected, setSelected] = useState(modelsData[0].path);
  const [cameraState, setCameraState] = useState({ position: [0, 0, 80], target: [0, 0, 0] });

  const selectedModel = modelsData.find((m) => m.path === selected);
  const selectedType = selectedModel?.type || (selected?.split('.').pop()?.toLowerCase());

  // Update camera state when model changes
  useEffect(() => {
    if (selectedModel && selectedModel.camera) {
      setCameraState({
        position: selectedModel.camera.position,
        target: selectedModel.camera.target
      });
    }
  }, [selectedModel]);

  // Custom component to update the camera
  function CameraUpdater({ position, target }) {
    const { camera, controls } = useThree();
    useEffect(() => {
      camera.position.set(...position);
      camera.lookAt(...target);
      if (controls) {
        controls.target.set(...target);
        controls.update();
      }
    }, [position, target, camera, controls]);
    // For debugging, update camera state on move
    useEffect(() => {
      const handle = () => {
        setCameraState({ position: [camera.position.x, camera.position.y, camera.position.z], target: controls ? [controls.target.x, controls.target.y, controls.target.z] : [0,0,0] });
      };
      if (controls) {
        controls.addEventListener('change', handle);
        return () => controls.removeEventListener('change', handle);
      }
    }, [controls, camera]);
    return null;
  }

  return (
    <div style={{ display: 'flex', gap: 24 }}>
      {/* File List Panel */}
      <div style={{ minWidth: 220 }}>
        <h3>Available STL Files</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {modelsData.map((file) => (
            <li key={file.path}>
              <button
                className={`stl-list-btn${selected === file.path ? ' selected' : ''}`}
                style={{
                  margin: '6px 0',
                  padding: '6px 12px',
                  background: selected === file.path ? '#c084fc' : '#f4f3ec',
                  color: selected === file.path ? '#fff' : '#08060d',
                  border: '2px solid transparent',
                  borderRadius: 6,
                  cursor: 'pointer',
                  width: '100%',
                  fontWeight: selected === file.path ? 700 : 400,
                  textAlign: 'left',
                }}
                onClick={() => setSelected(file.path)}
              >
                <div style={{fontWeight: 600}}>{file.name}</div>
              </button>
            </li>
          ))}
        </ul>
      </div>
      {/* 3D Viewer Panel */}
      <div style={{ flex: 1, height: 500, background: '#222', borderRadius: 12, overflow: 'hidden', position: 'relative' }}>
        <Canvas camera={{ position: cameraState.position, fov: 50 }} shadows>
          <ambientLight intensity={0.6} />
          <directionalLight position={[10, 10, 10]} intensity={1.6} castShadow />
          <Suspense fallback={<Loader />}>
            <ModelLoader url={selected} type={selectedType} material={selectedModel?.material} />
          </Suspense>
          <OrbitControls enablePan enableZoom enableRotate makeDefault />
          <CameraUpdater position={cameraState.position} target={cameraState.target} />
        </Canvas>
        <Paper elevation={4} sx={{ position: 'absolute', left: 16, bottom: 16, padding: '8px 16px', fontSize: 13, background: '#fff', color: '#222', opacity: 0.95 }}>
          <div><strong>Camera Position:</strong> [{cameraState.position.map(n => n.toFixed(2)).join(', ')}]</div>
          <div><strong>Target:</strong> [{cameraState.target.map(n => n.toFixed(2)).join(', ')}]</div>
        </Paper>
      </div>
      {/* Description Panel */}
      <div style={{ minWidth: 260, maxWidth: 320, background: '#f4f3ec', borderRadius: 12, padding: '24px 18px', color: '#222', height: 500, boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        {selectedModel ? (
          <>
            <h3 style={{marginTop: 0, marginBottom: 12, color: '#7c3aed'}}>{selectedModel.name}</h3>
            {selectedModel.image && (
              <img
                src={selectedModel.image}
                alt={selectedModel.name + ' preview'}
                style={{
                  width: '100%',
                  maxHeight: 160,
                  objectFit: 'contain',
                  borderRadius: 8,
                  marginBottom: 12,
                  background: '#fff',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.07)'
                }}
              />
            )}
            <div style={{fontSize: 16, lineHeight: 1.6}}>
              {Array.isArray(selectedModel.description)
                ? selectedModel.description.join(' ')
                : selectedModel.description}
            </div>
          </>
        ) : (
          <div>Select a model to see its description.</div>
        )}
      </div>
    </div>
  );
}
