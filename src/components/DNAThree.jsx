import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import * as THREE from "three";

const WORD = "PORTFOLIO";
const LETTERS = WORD.split("");

function HelixStructure({
  speed = 0.40,
  turns = 0.75,
  letterSpacing = 1.0,
  backboneRadius = 0.05,
  letterSize = 1.4,
  rungHeight = 0.55,
}) {
  const groupRef = useRef();

  const totalLen = (LETTERS.length - 1) * letterSpacing;
  const totalTwist = Math.PI * 2 * turns;
  const extend = letterSpacing;

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.x += delta * speed;
    }
  });

  const { backbone1, backbone2 } = useMemo(() => {
    const pts1 = [];
    const pts2 = [];
    const n = 300;
    const fullLen = totalLen + extend * 2;
    const start = -totalLen / 2 - extend;

    for (let i = 0; i <= n; i++) {
      const x = start + (i / n) * fullLen;
      const u = (x + totalLen / 2) / totalLen;
      const angle = u * totalTwist;

      pts1.push(
        new THREE.Vector3(
          x,
          rungHeight * Math.cos(angle),
          rungHeight * Math.sin(angle)
        )
      );
      pts2.push(
        new THREE.Vector3(
          x,
          -rungHeight * Math.cos(angle),
          -rungHeight * Math.sin(angle)
        )
      );
    }

    return {
      backbone1: new THREE.CatmullRomCurve3(pts1),
      backbone2: new THREE.CatmullRomCurve3(pts2),
    };
  }, [totalLen, totalTwist, extend, rungHeight]);

  return (
    <group ref={groupRef}>
      {/* Letter rungs */}
      {LETTERS.map((ch, i) => {
        const x = i * letterSpacing - totalLen / 2;
        const angle =
          LETTERS.length > 1
            ? (i / (LETTERS.length - 1)) * totalTwist
            : 0;

        return (
          <group key={i} position={[x, 0, 0]} rotation={[angle, 0, 0]}>
            <Text
              fontSize={letterSize}
              anchorX="center"
              anchorY="middle"
              color="#ffffff"
              fontWeight={700}
            >
              {ch}
            </Text>
          </group>
        );
      })}

      {/* Backbone strand 1 (top edge) */}
      <mesh>
        <tubeGeometry args={[backbone1, 300, backboneRadius, 8, false]} />
        <meshStandardMaterial
          color="#57D6FF"
          emissive="#57D6FF"
          emissiveIntensity={0.5}
        />
      </mesh>

      {/* Backbone strand 2 (bottom edge) */}
      <mesh>
        <tubeGeometry args={[backbone2, 300, backboneRadius, 8, false]} />
        <meshStandardMaterial
          color="#FF6BD6"
          emissive="#FF6BD6"
          emissiveIntensity={0.5}
        />
      </mesh>
    </group>
  );
}

export default function DNAThree({ width = 900, height = 500 }) {
  return (
    <Canvas
      style={{ width, height }}
      camera={{ position: [0, 2, 10], fov: 50 }}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={0.8} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -5, 5]} intensity={0.3} />
      <HelixStructure />
    </Canvas>
  );
}
