import * as THREE from "three";

// 1. Scene Setup
const scene = new THREE.Scene();

// 2. Camera Adjustment
// Moved the camera back (z) and up (y), then pointed it at the center (0,0,0)
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 2, 5); 
camera.lookAt(0, 0, 0);

// 3. Mesh Creation
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshStandardMaterial({ color: 0x61a4ad });
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial); // Created the Mesh object
scene.add(cube);

// 4. Lighting
// Fixed the hex code and added an AmbientLight so the shadows aren't pitch black
const light = new THREE.DirectionalLight(0xffffff, 10);
light.position.set(0, 4, 4);
scene.add(light);

const ambientLight = new THREE.AmbientLight(0x404040); // Soft white light
scene.add(ambientLight);

// 5. Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 6. Animation Loop
function animate() {
    // Optional: Add some rotation so you can see the 3D depth
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    
    renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);

// 7. Handle Window Resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});