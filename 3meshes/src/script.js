import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

// initialize the scene
const scene = new THREE.Scene()

// add objects to the scene
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1)
const cubeMaterial1 = new THREE.MeshBasicMaterial({
	color: 0x50c878,
	wireframe: true
})

const cube = new THREE.Mesh(cubeGeometry, cubeMaterial1)
const cube2 = new THREE.Mesh(cubeGeometry, cubeMaterial1)
const cube3 = new THREE.Mesh(cubeGeometry, cubeMaterial1)
const cube4 = new THREE.Mesh(cubeGeometry, cubeMaterial1)

cube.position.x = -2
cube3.position.x = 2
cube4.position.x = 4

// ? GROUP
const group = new THREE.Group()
group.add(cube, cube2, cube3, cube4)

// group.rotateOnWorldAxis(45)
// group.rotateY(45)
// cube.rotateY(45)
// group.rotateX(45)
// group.rotation.z = THREE.MathUtils.degToRad(45)
const cubes = [cube, cube2, cube3, cube4]
let angle = 10
for (let i = 0; i < cubes.length; i++) {
	let j = i + 1
	cubes[i].rotation.z = THREE.MathUtils.degToRad(angle * j)
	cubes[i].position.y = THREE.MathUtils.degToRad(angle * 10)
}

scene.add(group)

// scene.add(cube)
// console.log(cube)
// cube.position.x = 0.5 //Red
// cube.position.y = 0.5 //Green
// cube.position.z = 0.5 // Blue
// const x = 3
// const tempPosVector = new THREE.Vector3(x, x, x)
// cube.position.copy(tempPosVector)

const axesHelper = new THREE.AxesHelper(10)
const cube1AxesHelper = cube.axe
scene.add(axesHelper)

// initialize the camera
const camera = new THREE.PerspectiveCamera(
	35,
	window.innerWidth / window.innerHeight,
	0.1,
	200
)
camera.position.z = 10

console.log(cube.position.distanceTo(camera.position))

// initialize the renderer
const canvas = document.querySelector('canvas.threejs')
const renderer = new THREE.WebGLRenderer({
	canvas: canvas,
	antialias: true
})
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

// instantiate the controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true
// controls.autoRotate = true;

window.addEventListener('resize', () => {
	camera.aspect = window.innerWidth / window.innerHeight
	camera.updateProjectionMatrix()
	renderer.setSize(window.innerWidth, window.innerHeight)
})

// render the scene
const renderloop = () => {
	controls.update()
	renderer.render(scene, camera)
	window.requestAnimationFrame(renderloop)
}

renderloop()
