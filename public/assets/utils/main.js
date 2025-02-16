import { GLTFLoader } from '../js/GLTFLoader.js';
import * as THREE from '../js/three-module.js';
import { FBXLoader } from 'https://cdn.jsdelivr.net/npm/three@0.117.1/examples/jsm/loaders/FBXLoader.js';
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.117.1/examples/jsm/controls/OrbitControls.js';








const scene = new THREE.Scene();
const clock = new THREE.Clock();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth/2, window.innerHeight);
camera.aspect = (window.innerWidth / 2) / window.innerHeight;
camera.updateProjectionMatrix();
renderer.outputEncoding = THREE.sRGBEncoding;
renderer.setAnimationLoop(animate);
const container = document.getElementById('threeContainer');
container.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
let cube = new THREE.Mesh(geometry, material);
const light = new THREE.AmbientLight(0xffffff, 1);
scene.add(light);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // Directional light for shadows and highlights
directionalLight.position.set(5, 10, 7.5);
scene.add(directionalLight);
// scene.add(cube);
let model;
let animationsArr;

let skinnedMeshes = [],
    morphTargetDictionaries = [];
// https://models.readyplayer.me/678f4f68fa23c88314f37e42.glb
const loader = new GLTFLoader();
loader.load(
    '/model/NewLadyAvatar.glb',
    function(gltf) {
        model = gltf.scene;

        animationsArr=gltf.animations;
        // console.log(model,gltf);
        const skeletonHelper = new THREE.SkeletonHelper(model);
        model.position.set(0, -5, 0);
        model.scale.set(4, 4, 4);
        scene.add(model);

        // scene.add(skeletonHelper);
        const cameraHelper = new THREE.CameraHelper(camera);

        model.traverse((child) => {
            
            if (child.isSkinnedMesh && (child.name === 'Wolf3D_Head' || child.name === 'Wolf3D_Teeth' || child.name==="EyeLeft" || child.name==='EyeRight')) {
                skinnedMeshes.push(child); // Add to skinnedMeshes
                morphTargetDictionaries[child.name] = child.morphTargetDictionary;
            }
            
        });

        camera.position.set(0, 1, 2);
        // const controls = new OrbitControls(camera, renderer.domElement)
        // controls.autoRotate = false;
        // controls.enableDamping = true; // Smooth movement
        // controls.dampingFactor = 0.05;
        // controls.screenSpacePanning = false;
        // controls.autoRotate = false; // Disable auto-rotation
        // controls.minDistance = 1; // Minimum zoom distance
        // controls.maxDistance = 100; // Maximum zoom distance
        // controls.maxPolarAngle = Math.PI / 2;
        // controls.update();
        // camera.position.set(model.position.x, model.position.y + 1, model.position.z + 2);

        
       
        // setInterval(() => animateBlinkSmooth("eyeBlinkLeft", "eyeBlinkRight"), 2500);
       
        addDimple('mouthDimpleLeft');
        addDimple('mouthDimpleRight');
        // loadAnimation();
        

    },
    undefined,
    function(error) {
        console.error('An error occurred:', error);
    }
);

const phonemeToMorphTarget = {
    "A": "viseme_PP",
    "B": "viseme_kk",
    "C": "viseme_I",
    "D": "viseme_AA",
    "E": "viseme_O",
    "F": "viseme_U",
    "G": "viseme_FF",
    "H": "viseme_TH",
    "I": "viseme_I",
    "J": "viseme_aa",
    "K": "viseme_kk",
    "L": "viseme_FF",
    "M": "viseme_PP",
    "N": "viseme_N",
    "O": "viseme_O",
    "P": "viseme_PP",
    "Q": "viseme_KK",
    "R": "viseme_AA",
    "S": "viseme_SS",
    "T": "viseme_T",
    "U": "viseme_U",
    "V": "viseme_FF",
    "W": "viseme_W",
    "X": "viseme_KK",
    "Y": "viseme_I",
    "Z": "viseme_ZZ",

};

function animateLipSync(phoneme, intensity) {
    skinnedMeshes.forEach((mesh) => {
        const morphTargetDictionary = morphTargetDictionaries[mesh.name];

        if (morphTargetDictionary && morphTargetDictionary[phonemeToMorphTarget[phoneme]]) {

            const index = morphTargetDictionary[phonemeToMorphTarget[phoneme]];
            mesh.morphTargetInfluences[index] = intensity;
        }
    });
}


function animateBlinkSmooth(leftEye, rightEye, duration = 0.2) {
    skinnedMeshes.forEach((mesh) => {
        const morphTargetDictionary = morphTargetDictionaries[mesh.name];

        if (morphTargetDictionary) {
            let leftIndex = morphTargetDictionary[leftEye];
            let rightIndex = morphTargetDictionary[rightEye];

            if (leftIndex !== undefined && rightIndex !== undefined) {

                gsap.to(mesh.morphTargetInfluences, { [leftIndex]: 1, [rightIndex]: 1, duration: duration });
                gsap.to(mesh.morphTargetInfluences, { [leftIndex]: 0, [rightIndex]: 0, duration: duration, delay: duration });
            }
        }
    });
}

function lookLeftReft(leftEye, duration = 0.2) {
    skinnedMeshes.forEach((mesh) => {
        const morphTargetDictionary = morphTargetDictionaries[mesh.name];

        if (morphTargetDictionary) {
            let leftIndex = morphTargetDictionary[leftEye];

            if (leftIndex !== undefined) {

                gsap.to(mesh.morphTargetInfluences, { [leftIndex]: 1, duration: duration });
                gsap.to(mesh.morphTargetInfluences, { [leftIndex]: 0, duration: duration, delay: duration });
            }
        }
    });
}

function addDimple(viseme) {
    skinnedMeshes.forEach((mesh) => {
        const morphTargetDictionary = morphTargetDictionaries[mesh.name];

        if (morphTargetDictionary) {
            let index = morphTargetDictionary[viseme];

            if (index !== undefined) {


                mesh.morphTargetInfluences[index] = 1;
            }
        }
    });
}
// Call the function every 3 seconds



function animateLipSyncSequence(sequence) {
    if (sequence) {
        sequence.forEach((timing) => {
            setTimeout(() => {
                animateLipSync(timing.value, 1.0);
                setTimeout(() => {
                    animateLipSync(timing.value, 0.0);
                }, (timing.end - timing.start) * 1000);
            }, timing.start * 1000);
        });
    }
}

function getAudioFile() {
    $.ajax({
        url: "/ChatBox/textToSpeech",
        type: "GET",
        data: {
            'dataOnline': "The Node.js child_process module allows you to create and control child processes, enabling you to execute system commands, run scripts, and perform other operations outside the main Node.js process."
        },
        dataType: 'JSON',
        success: function(response) {
            if (response.audioFilePath) {
                getJsonFileOfAudio(response.audioFilePath);
            }
            if (response.error) {
                messagePop(response.error, 'error');
            }
        },
        error: function(err) {
            messagePop(err.responseJSON.message, 'error');
        }
    })
}

async function getJsonFileOfAudio(audioFilePath) {
    $.ajax({
        url: "/ChatBox/getJsonFile",
        type: "GET",
        dataType: 'JSON',
        success: function(response) {
            if (response.audioJsonFile) {
                const audio = new Audio(audioFilePath);
                audio.play();
                audio.onplay = function() {
                    animateLipSyncSequence(response.audioJsonFile);
                };
                audio.onended = function() {
                    animateLipSync('K', 0.0);
                };
            }
            if (response.error) {
                messagePop(response.error, 'error');
            }
        },
        error: function(err) {
            messagePop(err.responseJSON.message, 'error');
        }
    })
}
// getAudioFile();

let mixer;
const Fbxloader = new FBXLoader();
const animLoader = new GLTFLoader();
let action;
let hasStarted = false;
const loadAnimation = () => {

    animLoader.load('/model/ideal3.glb', (object) => {

            mixer = new THREE.AnimationMixer(model);
     
        if (object.animations.length > 0) {
            mixer.stopAllAction();
            action = mixer.clipAction(object.animations[0]);
            if (!action) {
                console.error("Animation action could not be created!");
            } else {
                console.log("Animation action created:", action);
                action.play();
            }
            action.setLoop(THREE.LoopRepeat, Infinity);
            action.timeScale = 1.0;
            action.setEffectiveWeight(1.0);
            action.play();
            // animate();
            // animateBlink(model)

        } else {
            console.warn("No animations found in the FBX file.");
        }
    });
}

function updateCamera() {
    if (model) { // Ensure model is loaded before using it
        camera.position.set(model.position.x, model.position.y + 1, model.position.z + 2);
        camera.lookAt(model.position);
        console.log("indisd");
    }
}
let lastElapsedTime = 0

function animate() {
    const delta = Math.max(clock.getDelta(), 0.016); // Ensures at least ~60 FPS delta

    const elapsedTime = clock.getElapsedTime()
  const deltaTime = elapsedTime - lastElapsedTime
  lastElapsedTime = elapsedTime
    if (mixer) mixer.update(deltaTime);

    // updateCamera();
    if(model)
    // animateBlink(model)
    renderer.render(scene, camera);

}

