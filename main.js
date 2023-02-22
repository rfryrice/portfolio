import './style.css';
import * as THREE from 'three';
import * as CANNON from 'cannon-es'
import CannonDebugger from 'cannon-es-debugger';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { STLLoader } from 'three/addons/loaders/STLLoader.js';
import Stats from 'three/addons/libs/stats.module.js';


let stats;

let dna;

const count = 20;

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
  antialias: true
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

// Sets the color of the background
//renderer.setClearColor(0xFEFEFE);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000);
const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

camera.position.set(0, 20, 45);
camera.lookAt(0, 10, -40);

const hemiLight = new THREE.HemisphereLight();
hemiLight.intensity = 0.35;
scene.add(hemiLight);

const dirLight = new THREE.DirectionalLight();
dirLight.intensity = 0.5;
dirLight.position.set(0, 5, 40);
dirLight.castShadow = true;
dirLight.shadow.camera.zoom = 2;
scene.add(dirLight);

const meshMaterial = new THREE.MeshLambertMaterial();
const matrix = new THREE.Matrix4();
const color = new THREE.Color();

const loader = new STLLoader;

// Sets orbit control to move the camera around
const orbit = new OrbitControls(camera, renderer.domElement);
orbit.update();

// // Light Helper
// const lightHelper = new THREE.DirectionalLightHelper(dirLight);
// scene.add(lightHelper);

// // Grid helper
// const gridHelper = new THREE.GridHelper(12, 12);
// scene.add(gridHelper);

// // Sets the x, y, and z axes with each having a length of 4
// const axesHelper = new THREE.AxesHelper(4);
// scene.add(axesHelper);

function randomInt(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

//

const dnaPhysMat = new CANNON.Material();
const groundGeo = new THREE.PlaneGeometry(30, 30);
const groundMat = new THREE.MeshBasicMaterial({
  color: 0xffffff,
  side: THREE.DoubleSide,
  wireframe: true
});
const groundMesh = new THREE.Mesh(groundGeo, groundMat);
const groundPhysMat = new CANNON.Material();
const groundDnaContactMat = new CANNON.ContactMaterial(
  groundPhysMat,
  dnaPhysMat,
  { restitution: 0.9 }
);

// scene.add(groundMesh);

const world = new CANNON.World({
  gravity: new CANNON.Vec3(0, -2, 0)
});

const cannonDebugger = new CannonDebugger(scene, world, {
  //hello
});

const groundBody = new CANNON.Body({
  shape: new CANNON.Plane(),
  type: CANNON.Body.STATIC,
  material: groundPhysMat
});

groundBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0)

// Trigger body
const boxShape = new CANNON.Box(new CANNON.Vec3(25, 1, 50))
const triggerBody = new CANNON.Body({ isTrigger: true })
triggerBody.addShape(boxShape)
triggerBody.position.set(0, 0, 0)

// World Add
world.addBody(triggerBody)
world.addBody(groundBody);
world.addContactMaterial(groundDnaContactMat);


let dnabox;
let meshes = [];
let multiboxBodies = Array();

// DNA MESH
loader.load('/STL/DNA.STL', function (obj) {
  //console.log(obj)

  const defaultTransform = new THREE.Matrix4()
    .makeRotationX(Math.PI)
    .multiply(new THREE.Matrix4().makeScale(0.025, 0.025, 0.025))
    .setPosition(-0.5, 1, 0.5); // This last transform centers inside boxBody

  obj.applyMatrix4(defaultTransform);

  for (let i = 0; i < count; i++) {
    meshMaterial.color = color.setHex(0x333333 * randomInt(1, 3));
    // console.log(meshMaterial.color)
    matrix.makeScale(1, randomInt(1, 2), 1);

    dna = new THREE.Mesh(obj, meshMaterial);
    dna.applyMatrix4(matrix);

    dnabox = new CANNON.Body({
      mass: 1,
      shape: new CANNON.Box(new CANNON.Vec3(0.4, 1, 0.4)),
      position: new CANNON.Vec3((i * 2) - 15, randomInt(5, 30), randomInt(-50, 30)),
      linearDamping: 0.8,
      material: dnaPhysMat
    });
    meshes.push(dna);
    multiboxBodies.push(dnabox);

    scene.add(dna)
    world.addBody(dnabox);
  }

  animate();
});

// It is possible to run code on the exit/enter
// of the trigger.
// triggerBody.addEventListener('collide', (event) => {
//   if (event.body) {
//     console.log('The dna entered the trigger!', event)

//   }
// })
// world.addEventListener('endContact', (event) => {
//   if (
//     (event.bodyA === multiboxBodies[0] && event.bodyB === triggerBody) ||
//     (event.bodyB === multiboxBodies[0] && event.bodyA === triggerBody)
//   ) {
//     console.log('The dna exited the trigger!', event)
//   }
// })

const timeStep = 1 / 60;

stats = new Stats();
document.body.appendChild(stats.dom);

// console.log(meshes)
// console.log(multiboxBodies)

function animate() {
  groundMesh.position.copy(groundBody.position);
  groundMesh.quaternion.copy(groundBody.quaternion);

  for (let i = 0; i < count; i++) {
    multiboxBodies[i].angularVelocity.set(0, randomInt(0, 3), 0)
    //console.log(multiboxBodies[10].position)

    if (multiboxBodies[i].position['y'] <= 3) {
      // matrix.makeScale( 1, Math.random(), 1 )
      // meshes[i].applyMatrix4(matrix);
      multiboxBodies[i].position['y'] = randomInt(3, 50);
      meshes[i].position.copy(multiboxBodies[i].position);
      meshes[i].quaternion.copy(multiboxBodies[i].quaternion);
    } else {
      meshes[i].position.copy(multiboxBodies[i].position);
      meshes[i].quaternion.copy(multiboxBodies[i].quaternion);
    }
  }

  world.fixedStep();
  // cannonDebugger.update();
  requestAnimationFrame(animate);

  render();

  stats.update();
}

function render() {

  renderer.render(scene, camera);

}

window.addEventListener('resize', function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// --End of Background Animation--

const stl_viewer = new StlViewer(document.getElementById("stl_cont"),
  {
    allow_drag_and_drop: false,
    auto_resize: true,
    models: new Array(
      { id: 0, filename: "../STL/DuckGear.stl", rotationx: 1 },
      { id: 1, filename: "../STL/EEGboard_housing_v3.STL", rotationx: 1, opacity: 0 },
      { id: 2, filename: "../STL/SampleLeafEmboss.STL", rotationx: 1, opacity: 0 },
      { id: 3, filename: "../STL/FilmHolder_Bottom.STL", x: -70, rotationx: 1, opacity: 0 },
      { id: 4, filename: "../STL/FilmHolder_Top.STL", x: 70, rotationx: 1, opacity: 0 }
    ),

  });

let modelData;
const fileURL = '../model_descriptions.json';

fetch(fileURL)
  .then(response => response.json())
  .then(data => {
    modelData = data;
  })
  .catch(error => {
    console.error('Error loading JSON file:', error);
  });

const selectElement = document.querySelector('#models');

selectElement.addEventListener('change', (event) => {
  const result = document.querySelector('#project-text');
  const getID = event.target.value;
  result.textContent = modelData[getID]['p'];
  if (getID == 'film') {
    for (let i = 0; i < 3; i++) {
      stl_viewer.set_opacity(i, 0)
    }
    stl_viewer.set_opacity(3, 1);
    stl_viewer.set_opacity(4, 1);
  } else {
    for (let i = 0; i < 5; i++) {
      stl_viewer.set_opacity(i, 0)
    }
    stl_viewer.set_opacity(modelData[getID]['id'], 1)

  }


});
