
const socket = io("https://backend-34fs.onrender.com/");

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, innerWidth/innerHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({canvas:document.querySelector("#webgl")});
renderer.setSize(innerWidth, innerHeight);

const cube = new THREE.Mesh(
  new THREE.BoxGeometry(),
  new THREE.MeshBasicMaterial({color:0x00ffff, wireframe:true})
);
scene.add(cube);

function animate(){
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  socket.emit("move", {
    x: camera.position.x,
    y: camera.position.y,
    z: camera.position.z
  });

  renderer.render(scene,camera);
}
animate();
