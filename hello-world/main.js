import * as Three from 'three'
import './style.css'

/**
 * Practice on Own!
 * Basics Things : Scene, Camera and Renderer
 *
 * Mesh : Geometry & Material
 * Camera : FOV, Aspect, Far, Near
 * Renderer : Size the renderer size!
 * */

const scene = new Three.Scene()

const sizes = {
	width: window.innerWidth,
	height: window.innerHeight
}
const camera = new Three.PerspectiveCamera(
	75, //Focal Length
	sizes.width / sizes.height, // Aspect
	0.1, //Near
	100 //Far
)

// Initiate the Canvas
const canvas = document.getElementById('threejs')
console.log(canvas)

// Initiate the Rendere
const renderer = new Three.WebGLRenderer({
	canvas
})

renderer.setSize(sizes.width, sizes.height)

/* 
A 3d Object (here,Mesh) has two things -- Geometry, Material
Define them and add them in Mesh Simple!
*/

// Geometry
const geometry = new Three.BoxGeometry(1, 1, 1)
const material = new Three.MeshBasicMaterial({
	color: 0x00ff00
})
const cube = new Three.Mesh(geometry, material)

// Add cube Mesh to the scene!
scene.add(cube)

// Change Camera Position
camera.position.z = 5

function animate() {
	/*
	 * This will create a loop that causes the renderer to draw the scene every time the screen is refreshed (on a typical screen this means 60 times per second). */
	requestAnimationFrame(animate)
	renderer.render(scene, camera)

	// rotation
	// cube.rotation.x += Math.tan(0.1)
	cube.rotation.y += 0.01
	cube.rotation.x += 0.01
	// cube.rotation.y += Math.tan(0.1)
}

animate()
