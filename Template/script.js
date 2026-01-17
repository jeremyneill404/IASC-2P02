import * as THREE from "three"

/*********/
/* SCENE */
/*********/

//Canvas

const canvas = document.querySelector(".webgl")

//Scene

const scene = new THREE.Scene()
scene.background = new THREE.Color('#f2a971')

//Camera

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    100
)
scene.add(camera)
camera.position.set(0, 0, 5)

//Renderer

const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true
})

renderer.setSize(window.innerWidth,window.innerHeight)

/**********/
/* MESHES */
/**********/

// testSphere
const sphereGeometry = new THREE.SphereGeometry(1)
const sphereMaterial = new THREE.MeshNormalMaterial()
const testSphere = new THREE.Mesh(sphereGeometry, sphereMaterial)

scene.add(testSphere)
testSphere.position.set(0, 0, 0)

/******************/
/* ANIMATION LOOP */
/******************/

/*
//Writing Function
const myFirstFunction = () => 
{
    console.log("HIII FUNCTION!")
}

//Calling Function
myFirstFunction()
*/

const clock = new THREE.Clock()

const animation = () =>
{
    // Return elapsedtime
    const elapsedTime = clock.getElapsedTime()

    //Renderer
    renderer.render(scene, camera)

    //Request next frame
    window.requestAnimationFrame(animation)
}

animation()