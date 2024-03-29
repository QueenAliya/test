
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight);
const renderer = new THREE.WebGLRenderer();


scene.background = new THREE.Color(0x000fff);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
camera.position.z = 5;

const points = [
    new THREE.Vector2(0, 2),
    new THREE.Vector2(1, 1),
    new THREE.Vector2(2, 0)
]
const material = new THREE.LineBasicMaterial({color:0xddddd, envmap: []});
const geometryLine = new THREE.BufferGeometry().setFromPoints(points);
const line = new THREE.Line(geometryLine, material);
scene.add(line);

const material1 = new THREE.MeshBasicMaterial({color: 0xdddddd});
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cube = new THREE.Mesh(cubeGeometry, material1);
scene.add(cube);


function animate(){
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    cube.rotation.x+=0.01;
    cube.rotation.y+=0.01;
    cube.rotation.z+=0.05;
}
animate();
