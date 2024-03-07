import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js'

// initialize the scene
const scene = new THREE.Scene()

// add objects to the scene
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1)
const cubeMaterial = new THREE.MeshBasicMaterial({ color: 'red' })

const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial)
scene.add(cubeMesh)

// initialize the perspective camera
const camera = new THREE.PerspectiveCamera(
	75,
	window.innerWidth / window.innerHeight,
	0.1,
	300
)

// const camera = new THREE.OrthographicCamera(
// 	// LRTB
// 	-1 * aspectRatio,
// 	1 * aspectRatio,
// 	-1,
// 	1,
// 	0.1,
// 	300
// )

camera.position.z = 2
// camera.position.y = 2

// Orbit Controls

// initialize the renderer
const canvas = document.querySelector('canvas.threejs')
const renderer = new THREE.WebGLRenderer({
	canvas: canvas,
	antialias: true
})
const controls = new OrbitControls(camera, canvas)
// const controls = new PointerLockControls(camera, document.body)

controls.update()

controls.enableDamping = true
// controls.autoRotate = true

renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(Math.min(devicePixelRatio, 2))

window.addEventListener('resize', () => {
	camera.aspect = window.innerWidth / window.innerHeight
	camera.updateProjectionMatrix()
	renderer.setSize(window.innerWidth, window.innerHeight)
})

const animate = () => {
	requestAnimationFrame(animate)

	controls.update()
	renderer.render(scene, camera)
}

animate()
