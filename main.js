import * as Three from 'three'
import './style.css'

/**
 * Practice on Own!
 * Basics Things : Scene, Camera and Rendere
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

const renderer = new Three.WebGLRenderer()
renderer.setSize(sizes.width, sizes.height, false)

document.body.appendChild(renderer.domElement)

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
