// document.getElementById("startBtn").addEventListener("click", () => {

//     takingInputFromUser();
// });
// let rec = null;
// let audioStream = null;

// const speechToText = async (pathforAudioFile) => {
// console.log(pathforAudioFile);
//     // const response = await fetch(pathforAudioFile);
//     // const audioBlob = await response.blob();
//     // const audioFile = new File([audioBlob], "audio.wav", { type: "audio/wav" });
//     const audioFile =pathforAudioFile;

//     const formData = new FormData();
//     formData.append("audio", audioFile);
//     formData.append("mukul", "good");

//     try {
//         $.ajaxSetup({
//             headers: {
//                 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
//             }
//         });
//         $.ajax({
//             url: '/ChatBox/speechToText',
//             type: 'POST',
//             data: formData,
//             processData: false,
//             contentType: false,
//             success: function(data) {
//                 const audio = new Audio(data.audioPath);
                
//                 audio.play();

//             }
//         });

//     } catch (error) {
//         messagePop(error.message, 'error');
//     }
// }

// var socket = new io.Socket();
// var socket = io();

// // connection with server
// socket.on('connect', function () {
//     // console.log('Connected to Server');
//      // takingInputFromUser();
// });
// console.log(socket);

// socket.connect(window.location.origin); 
// let isRecording = false;

// let recorder;
// var mediaRecorder;
// const takingInputFromUser = async () => {
//     var audioChunks = [];
//     var constraints = { audio: true, video: false };
//    navigator.mediaDevices.getUserMedia({ audio: true })
//     .then((stream) => {
//         recorder = new RecordRTC(stream, {
//         type: 'audio',
//         mimeType: 'audio/webm;codecs=pcm', // endpoint requires 16bit PCM audio
//         recorderType: StereoAudioRecorder,
//         timeSlice: 250, // set 250 ms intervals of data
//         desiredSampRate: 16000,
//         numberOfAudioChannels: 1, // real-time requires only one channel
//         bufferSize: 4096,
//         audioBitsPerSecond: 128000,
//         ondataavailable: (blob) => {
//             // speechToText(blob);
//             // const reader = new FileReader();
//             // reader.onload = () => {
//             //     const base64data = reader.result;

//             //     // audio data must be sent as a base64 encoded string
//             //     if (socket) {
//             //         socket.send(JSON.stringify({ audio_data: base64data.split('base64,')[1] }));
//             //     }
//             // };
//             // reader.readAsDataURL(blob);
//         },
//     });

//     recorder.startRecording();
//     }) .catch((err) => console.error(err));;
// }

// async function convertToWav(audioBlob) {
//     const arrayBuffer = await audioBlob.arrayBuffer();
//     const evenLength = arrayBuffer.byteLength - (arrayBuffer.byteLength % 2);
//     const trimmedBuffer = arrayBuffer.slice(0, evenLength);
//     const audioData = new Int16Array(trimmedBuffer); // Convert to Int16

//     const sampleRate = 16000; // 16kHz sample rate
//     const wavBuffer = encodeWav(audioData, sampleRate);
//     return new Blob([wavBuffer], { type: 'audio/wav' });
// }

// function encodeWav(samples, sampleRate) {
//     const buffer = new ArrayBuffer(44 + samples.length * 2);
//     const view = new DataView(buffer);

//     // WAV Header
//     writeString(view, 0, 'RIFF');
//     view.setUint32(4, 36 + samples.length * 2, true);
//     writeString(view, 8, 'WAVE');
//     writeString(view, 12, 'fmt ');
//     view.setUint32(16, 16, true);
//     view.setUint16(20, 1, true); // PCM format
//     view.setUint16(22, 1, true); // Mono
//     view.setUint32(24, sampleRate, true);
//     view.setUint32(28, sampleRate * 2, true);
//     view.setUint16(32, 2, true);
//     view.setUint16(34, 16, true); // 16-bit PCM
//     writeString(view, 36, 'data');
//     view.setUint32(40, samples.length * 2, true);

//     let offset = 44;
//     for (let i = 0; i < samples.length; i++, offset += 2) {
//         view.setInt16(offset, samples[i], true);
//     }
//     return buffer;
// }

// function writeString(view, offset, string) {
//     for (let i = 0; i < string.length; i++) {
//         view.setUint8(offset + i, string.charCodeAt(i));
//     }
// }


let isRecognizing = false;

  if (!('webkitSpeechRecognition' in window)) {
    alert("Your browser doesn't support the Web Speech API. Please use Chrome or Edge.");
} else {
    // Create a new instance of SpeechRecognition
    const recognition = new webkitSpeechRecognition();

    recognition.continuous = false; // Capture only one result
    recognition.interimResults = false; // Get the final result, not partial results
    recognition.lang = 'en-US'; // Set the language to English
    
    document.getElementById('startBtn').onclick = () => {
            console.log(isRecognizing,"recognition");

         if(!isRecognizing){
            recognition.start(); // Start listening
            isRecognizing = true;
            console.log("starting the mic");
            document.getElementById('mic').classList.add('recording');

         }
    };

    // Handle the result when speech is detected

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript; // Get the speech result
        // document.getElementById('result').innerText = `You said: ${transcript}`;
        console.log(`You said: ${transcript}`);
        $('#user_answer').val(transcript);
        let date= new Date();

        $('.chat-messages').append(` <div class="message sent">
            <div class="message-content">
                <input type="hidden" name="answer[]" value="${transcript}">
                <p class="receive-text">${transcript}</p>
                 <div class="words" contenteditable>
                         <p id="p"></p>
                         <p id="message"></p>
                 </div>
                <span class="timestamp">${date.getHours()}:${date.getMinutes().toString().padStart(2,'0')}</span>
                <div class="status-indicator">
                    <i class="fas fa-check-double"></i>
                </div>
                <div class="edit-box" > 
                    <i class="fas fa-edit" onclick="getDatatoEdit(this)"></i>
                </div>
            </div>
        </div>`);
       
    };

    recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
    };
    recognition.onstart = () => {
        console.log('Speech recognition started');
    };
    recognition.onend = () => {
       processAfterEndingRecognitsation();
    };
}
const processAfterEndingRecognitsation=()=>{
      
        let skill=$('#skill_id_of_user').val();
        let level_id=$('#level_id').val();
        let user_id=$('#user_id').val();
        let email=$('#user_email').val();
        let question_id=$('#question_id').val();
        let answer=$('#user_answer').val();
        console.log(answer,question_id,email);
         if(question_id && answer && email)
         {
            submitResponse(email,question_id,answer);
         }else{
            console.log("no submitted");
         }
        
         $('#generateQts').html(' <i class="fa fa-spinner fa-spin"></i>Loading');
         $('#startBtn').addClass('displayNone');
         document.getElementById('mic').classList.remove('recording');

}

const submitResponse=async(emailid,question_id,answer)=>{
      isRecognizing=false;
      
    let url=`https://evalaiapiv2-gygqaffwdvc7e0h2.northeurope-01.azurewebsites.net/submit_response/`;
    let parameters={
        method:"POST",
        headers: {
        'Content-Type': 'application/json',
        },
        body:JSON.stringify({
        "emailid": emailid,
        "question_id": question_id,
        "candidate_answer": answer
        })
    };

     try{
        let response = await fetch(url,parameters);
        data = await response.json();
            if(data.next_question)
            {
                $('#startBtn').removeClass('displayNone');
                calledNoOfQuestion++;
                let input =data.next_question.question;
                if (input) {

                       $('#question_id').val(data.next_question.question_id);
                        getAudioFile(input);
                } else {
                  console.log("No match found.");
                }
                erroHandlingCalledQuestion=1;
            }else if(data.message){
                    if(erroHandlingCalledQuestion<4)
                    {
                         $('#generateQts').html(data.message);
                        submitResponse(emailid,question_id,answer);
                        erroHandlingCalledQuestion++;
                    }   
            } 
     }catch(err)
     {
         console.warn(err);
          if(erroHandlingCalledQuestion<4)
          {
            submitResponse(emailid,question_id,answer);
            erroHandlingCalledQuestion++;
          }
     }
}

let calledNoOfQuestion=1;
const toSubmitAnswer=()=>{
     if(calledNoOfQuestion==5)
     {
            $('.modal-left').html(`<p> Want to Submit ? </p> 
        <div class="modal-buttons">
            <button class="input-button " form_id="lawyerLogin" onclick="submitForm()">End</button>
            <button class="input-button "  onclick="closeModal()">Close</button>
        </div>
        `);
     }
}
let erroHandlingCalledQuestion=1;

const getQuestion= async(topic,difficulty,emailid,user_id)=>{
    let url=`https://evalaiapiv2-gygqaffwdvc7e0h2.northeurope-01.azurewebsites.net/get_question/?role=${topic}&difficulty=${difficulty}`;
    let parameters={
        method:"GET",
        headers: {
        'Content-Type': 'application/json',
        },
    };
     try{
        let response = await fetch(url,parameters);
         if (!response.ok) {
            // Check for 500 specifically
            if (response.status === 500) {
                console.warn("Server error 500: Internal Server Error");

                    if(erroHandlingCalledQuestion<4) 
                    {
                        getQuestion(topic,difficulty,emailid,user_id);
                        erroHandlingCalledQuestion++;
                    }
            } else {
                console.warn(`Error: Received status code ${response.status}`);
            }
            if (erroHandlingCalledQuestion < 4) {
                erroHandlingCalledQuestion++;
                return getQuestion(topic, difficulty, emailid, user_id);
            } else {
                $('#generateQts').html("Something went wrong. Please try again later.");
                return;
            }
        }
        data = await response.json();

            if(data.question)
            {
                $('#startBtn').removeClass('displayNone');
                calledNoOfQuestion++;
                let input =data.question;
                $('#question_id').val(data.question_id);
                if (input) {
                        getAudioFile(input);
                        console.log(input,"also fetching audio file");
                } else {
                  console.log("No match found.");
                }
                erroHandlingCalledQuestion=1;
            }else if(data.message){
                    if(erroHandlingCalledQuestion<4)
                    {
                         $('#generateQts').html(data.message);
                        getQuestion(topic,difficulty,emailid,user_id);
                        erroHandlingCalledQuestion++;
                    }   
            } 
     }catch(err)
     {
         console.warn(err);
          if(erroHandlingCalledQuestion<4)
          {
            getQuestion(topic,difficulty,emailid,user_id);
            erroHandlingCalledQuestion++;
          }
     }
}

function  getDatatoEdit(event){
    let receiveText =$(event).closest('.sent').find('.receive-text');
    receiveText.attr('contenteditable', true).focus();
    receiveText.css({
        border: '1px solid #ccc',
        padding: '2px',
        outline: 'none'
    });
    receiveText.on('blur', function () {
        receiveText.attr('contenteditable', false);
        receiveText.removeAttr('style'); 
    });
    receiveText.on('keydown', function (e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            receiveText.blur(); 
        }
    });
}

