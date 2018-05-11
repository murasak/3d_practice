import 'three';
// import 'three/OrbitControls';
import {fabric} from 'fabric';
import {initCanvas, addCanvasColor, initTextBox} from './canvas';

var canvas, canvasColor, textbox;


var camera, scene, renderer, mesh, material;
init();
setupCanvasDrawing();
animate();

canvas.on({
	'object:modified': setupCanvasDrawing,
	'object:moving' : setupCanvasDrawing,
	'text:changed' : setupCanvasDrawing,
	'after:render': setupCanvasDrawing
});

function init() {

	camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 1, 2000 );
	camera.position.z = 500;
	scene = new THREE.Scene();
	material = new THREE.MeshBasicMaterial();
	mesh = new THREE.Mesh( new THREE.BoxGeometry( 200, 200, 200 ), material );
	scene.add( mesh );
	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );
	window.addEventListener( 'resize', onWindowResize, false );

// init canvas elements
	canvas = initCanvas();
	textbox = initTextBox();
	canvasColor = addCanvasColor();
	textbox.bringToFront();
	// setupCanvasDrawing();
	// animate();

}
// Sets up the drawing canvas and adds it as the material map.
function setupCanvasDrawing() {

	// get canvas and context
	var drawingCanvas = document.getElementById( 'drawing-canvas' );

	// set canvas as material.map (this could be done to any map, bump, displacement etc.)
	material.map = new THREE.Texture( drawingCanvas );
	// need to flag the map as needing updating.
	material.map.needsUpdate = true;

}
function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( window.innerWidth, window.innerHeight );
}
function animate() {
	requestAnimationFrame( animate );
	mesh.rotation.x += 0.01;
	mesh.rotation.y += 0.01;
	renderer.render( scene, camera );
}