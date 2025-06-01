

const micButton = document.getElementById('startBtn'); // or stopBtn initially
let isRecognizing = false;
var currentText='';
var currentInterimText='';
micButton.addEventListener('click', function(event) {
    currentText="";
    if (!isRecognizing) {
        // startRecording();
        takingInputFromUser();
        isRecognizing = true;
        console.log("starting the mic");
        micButton.title="Click to Stop Mic";
        $('#generateQts').attr('title',"Please Answer the Question Wait for Next Question");


        micButton.id = 'stopbtn';
        document.getElementById('mic').classList.add('recording');
    } else {
        micButton.id = 'startBtn';
        micButton.title=" Click to Speak in Mic";
        isRecognizing = false;
        stopRecordingAudio();
         $('#SubmitAnswerButton').removeClass('displayNone');
        console.log("stopping the mic");
        document.getElementById('mic').classList.remove('recording');
    }
updateTitle();

});

  function updateTitle(){

      var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
      tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
      });
}

socket.on('sttinterim',(text)=>{
     $('#userAnswerInput').val(text);
})


socket.on('sttfinal',(text)=>{
        currentText+=" "+text;
     $('#userAnswerInput').val(currentText);
})

// const speechToText = async (pathforAudioFile) => {

//     const response = await fetch(pathforAudioFile);
//     const audioBlob = await response.blob();
//     const audioFile = new File([audioBlob], "audio.wav", {
//         type: "audio/wav"
//     });

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
var mediaRecorder;
let recorder=null;
const takingInputFromUser = async () => {

    try {
        if (recorder && recorder.getState() === 'recording') {
            console.log("Already recording.");
            return;
        }

        const stream = await navigator.mediaDevices.getUserMedia({
            audio: true
        });

        recorder = RecordRTC(stream, {
            type: 'audio',
            mimeType: 'audio/wav',
            recorderType: StereoAudioRecorder,
            desiredSampRate: 16000,
            numberOfAudioChannels: 1,
            timeSlice: 250,
            ondataavailable: function(blob) {
                blob.arrayBuffer().then(buffer => {
                    socket.emit('gettingAudio', buffer);
                });
            }
        });

        recorder.startRecording();
        console.log("Recording started...");
    } catch (error) {
        console.error("Error starting recording:", error);
    }
}

async function stopRecordingAudio() {
    if (recorder) {
          socket.emit('endStream');
           console.log("emmiting end stem");
           setTimeout(()=>{
               $('#SubmitAnswerButton').trigger('click')
           },10);

        recorder.stopRecording(() => {
             
                
                const audioBlob = recorder.getBlob();
                 let question_id =  $('#question_id').val();
                 let session_id =  $('#session_id').val();
                console.warn("file last audio ,");

                audioBlob.arrayBuffer().then(buffer => {
                    socket.emit('saveAudioFile', {
                        buffer: buffer,
                        fileName: `audio_${session_id}_${question_id}.wav`
                    });
                })
        
            // Stop mic access
                const stream = recorder.stream;
                stream.getTracks().forEach(track => track.stop());

        });
        recorder = null;
    }
}