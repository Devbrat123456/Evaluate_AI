import { GLTFLoader } from '../js/GLTFLoader.js';
import * as THREE from '../js/three-module.js';
import { FBXLoader } from 'https://cdn.jsdelivr.net/npm/three@0.117.1/examples/jsm/loaders/FBXLoader.js';
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.117.1/examples/jsm/controls/OrbitControls.js';









const scene = new THREE.Scene();
const clock = new THREE.Clock();
const height=window.innerHeight/2;
const width=window.innerWidth /3;
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();

renderer.setSize(width, height);
camera.aspect = (width) / height;
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

        animationsArr = gltf.animations;
        // console.log(model,gltf);
        const skeletonHelper = new THREE.SkeletonHelper(model);
        model.position.set(0, -5, 0);
        model.scale.set(4, 4, 4);
        scene.add(model);

        // scene.add(skeletonHelper);
        const cameraHelper = new THREE.CameraHelper(camera);

        model.traverse((child) => {

            if (child.isSkinnedMesh && (child.name === 'Wolf3D_Head' || child.name === 'Wolf3D_Teeth' || child.name === "EyeLeft" || child.name === 'EyeRight')) {
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



        setInterval(() => animateBlinkSmooth("eyeBlinkLeft", "eyeBlinkRight"), 2500);
        addDimple('mouthDimpleLeft');
        addDimple('mouthDimpleRight');
        // loadAnimation();


    },
    undefined,
    function(error) {
        console.error('An error occurred:', error);
    }
);

// const phonemeToMorphTarget = {
//     "A": "viseme_PP",
//     "B": "viseme_kk",
//     "C": "viseme_I",
//     "D": "viseme_AA",
//     "E": "viseme_O",
//     "F": "viseme_U",
//     "G": "viseme_FF",
//     "H": "viseme_TH",
//     "I": "viseme_I",
//     "J": "viseme_aa",
//     "K": "viseme_kk",
//     "L": "viseme_FF",
//     "M": "viseme_PP",
//     "N": "viseme_N",
//     "O": "viseme_O",
//     "P": "viseme_PP",
//     "Q": "viseme_KK",
//     "R": "viseme_AA",
//     "S": "viseme_SS",
//     "T": "viseme_T",
//     "U": "viseme_U",
//     "V": "viseme_FF",
//     "W": "viseme_W",
//     "X": "viseme_KK",
//     "Y": "viseme_I",
//     "Z": "viseme_ZZ",

// };

const phonemeToMorphTarget = {
    0: "viseme_sil",
    1: "viseme_PP",  // "a" as in "father"
    2: "viseme_FF",
    3: "viseme_TH",  // "o" as in "dog"
    4: "viseme_DD",  // "e" as in "bed"
    5: "viseme_kk",  // "er" as in "butter"
    6: "viseme_CH",  // "i" as in "bit"
    7: "viseme_SS",  // "u" as in "book"
    8: "viseme_nn",  // "o" as in "open"
    9: "viseme_RR",  // "ee" as in "see"
    10: "viseme_aa", // "oo" as in "you"
    11: "viseme_E",  // "p", "b", "m" sounds
    12: "viseme_I",  // "f", "v"
    13: "viseme_O", // "th" as in "thing"
    14: "viseme_U",  // "t", "d"
    15: "viseme_S",  // "s", "z"
    16: "viseme_SH", // "sh", "ch", "j"
    17: "viseme_N",  // "n"
    18: "viseme_L",  // "l"
    19: "viseme_R",  // "r"
    20: "viseme_W",  // "w"
    21: "viseme_Y"   // "y"
};


const visemeToBlendShape = {
    0: { jawOpen: 0.0 },             // Silence
    1: { mouthApeShape: 1.0 },       // "a" (Father)
    2: { mouthFunnel: 1.0 },         // "f", "v"
    3: { mouthFunnel: 0.8 },         // "th" (Thing)
    4: { mouthSmile: 1.0 },          // "e" (Bed)
    5: { mouthShrugUpper: 1.0 },     // "er" (Butter)
    6: { mouthFunnel: 1.0 },         // "i" (Bit)
    7: { mouthPucker: 1.0 },         // "u" (Book)
    8: { mouthOShape: 1.0 },         // "o" (Open)
    9: { mouthOShape: 0.6 },         // "ee" (See)
    10: { mouthOShape: 0.8 },        // "oo" (You)
    11: { jawOpen: 0.2 },            // "p", "b", "m"
    12: { mouthFunnel: 1.0 },        // "f", "v"
    13: { mouthFunnel: 0.8 },        // "th" (Thing)
    14: { jawOpen: 0.3 },            // "t", "d"
    15: { mouthFunnel: 0.5 },        // "s", "z"
    16: { mouthFunnel: 0.7 },        // "sh", "ch", "j"
    17: { mouthSmile: 0.8 },         // "n"
    18: { mouthShrugUpper: 0.8 },    // "l"
    19: { mouthShrugUpper: 0.6 },    // "r"
    20: { mouthPucker: 0.8 },        // "w"
    21: { mouthFunnel: 0.9 }         // "y"
};


function animateLipSync(phoneme, intensity) {
    skinnedMeshes.forEach((mesh) => {
        const morphTargetDictionary = morphTargetDictionaries[mesh.name];
        if (morphTargetDictionary && morphTargetDictionary[phonemeToMorphTarget[phoneme]]) {
            const index = morphTargetDictionary[phonemeToMorphTarget[phoneme]];

                gsap.to(mesh.morphTargetInfluences, {
                    [index]: intensity, // Target the specific index
                    duration: 0.2, // Adjust duration as needed
                    ease: "power2.out" // Smooth animation
                }); 
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

                gsap.to(mesh.morphTargetInfluences, {
                    [leftIndex]: 1, [rightIndex]: 1, duration: duration });
                gsap.to(mesh.morphTargetInfluences, {
                    [leftIndex]: 0, [rightIndex]: 0, duration: duration, delay: duration });
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

                gsap.to(mesh.morphTargetInfluences, {
                    [leftIndex]: 1, duration: duration });
                gsap.to(mesh.morphTargetInfluences, {
                    [leftIndex]: 0, duration: duration, delay: duration });
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
        let previousTiming = null;
        
        sequence.forEach((timing, i) => {
            setTimeout(() => {
                let duration = (timing.end - timing.start);
                let transitionDuration = previousTiming ? (timing.start - previousTiming.end) / 2 : duration / 2;

                // Animate transition from the previous viseme to the new one
                if (previousTiming) {
                    animateLipSync(previousTiming.value, 0.0, transitionDuration);
                }
                
                animateLipSync(timing.value, 1.0, duration);
                previousTiming = timing;
            }, timing.start);
        });
    }
}


//  FIRST CONVERT TEXT TO AUDIO 
function getAudioFile(speakingText) {
    console.log("emmiting text file ");// so that the audio file and json file get generated , o
    socket.emit('text_file',speakingText); 

}
let getJsonFileCount=1;
socket.on('json_file',(jsonFile)=>{
        $('#SubmitAnswerButton').addClass('displayNone');
       if(getJsonFileCount==1)
       {
        
        $('#generateQts').html("<span id='generateQtsSpan'>Start </span>");
       }
    else
    {
        $('#generateQts').html("<span id='generateQtsSpan'>Next </span>");
        $('#generateQts').attr('title',"Click here for Next Question");

    }
        playAudio(jsonFile.audioPath,jsonFile.jsonFile);
        getJsonFileCount++;
 }) 
socket.on('audioPath',(audioPath)=>{
     //  first i have got updated audio now i will get audio json file 
         socket.emit('get_json_file',audioPath);
 }) 

 
window.getAudioFile = getAudioFile;

let  i=1;

const playAudio =(audioFilePath,audioJsonFile)=>{
        const audio = document.getElementById("audioPlay");
        audio.src = audioFilePath.audipath;


         $('#generateQtsSpan').off('click').on('click', () => {
              audio.play()
                .then(() => {
                     console.log("calling "+i+"time");
                     
                     $('#startBtn').removeClass('displayNone');
                      $('#generateQts').html('<i class="fa fa-spinner fa-spin"></i>');
                     
                     i++;
                    appendingTexttoChatMessages(audioFilePath.speakingText);
                    animateLipSyncSequence(audioJsonFile); 
                })
                .catch(error => {
                    console.error("Playback failed:", error);
                });;
        })
}



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
    }
}
let lastElapsedTime = 0

function animate() {
    const delta = Math.max(clock.getDelta(), 0.016); // Ensures at least ~60 FPS delta
    const elapsedTime = clock.getElapsedTime()
    const deltaTime = elapsedTime - lastElapsedTime
    lastElapsedTime = elapsedTime
    if (mixer) mixer.update(deltaTime);
    if (model)
        // animateBlink(model)
        renderer.render(scene, camera);
}

let questionNo=1;
const appendingTexttoChatMessages = (speakingText) => {
    let date = new Date();
    let words = speakingText.split(' ');
  
                    $('.chat-messages').append(`
                     <div class="message received" id="received${questionNo}">
                          <div class="message-content">
                                    <input type="hidden" name="question[]" value="${speakingText}">
                                    <p id="text${questionNo}"> </p>
                                    <span class="timestamp">${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}</span>
                        </div>
                    </div>
                    `);
    appendtText(words,questionNo); // as function have block scope so , it will hold updated value of questionNo, for each call  not the last one , 
     questionNo++;
};

const appendtText=(words,questionNo)=>{
    console.log("question is"+questionNo)
    let text ='';
    words.forEach((val, index) => {  
        setTimeout(() => {
            text+=val+' ';
            $('#text'+questionNo).text(text);
        }, index * 400); 
    });
}


