
const micButton = document.getElementById('startBtn'); // or stopBtn initially
let isRecognizing = false;
micButton.addEventListener('click', function(event) {
    if (!isRecognizing) {
        // startRecording();
        takingInputFromUser();
        isRecognizing = true;
        console.log("starting the mic");
        micButton.id = 'stopbtn';
        document.getElementById('mic').classList.add('recording');
    } else {
        micButton.id = 'startBtn';
        isRecognizing = false;
        stopRecordingAudio();
        console.log("stopping the mic");
        document.getElementById('mic').classList.remove('recording');
    }
});

   const speechToText= async (pathforAudioFile)=>
   {

        const response = await fetch(pathforAudioFile);
        const audioBlob = await response.blob(); 
        const audioFile = new File([audioBlob], "audio.wav", { type: "audio/wav" }); 

        const formData = new FormData();
        formData.append("audio", audioFile);
        formData.append("mukul", "good");

        try
        {
            $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
            });
             $.ajax({
                   url : '/ChatBox/speechToText',
                   type : 'POST',
                   data : formData,
                   processData: false,  
                   contentType: false, 
                   success : function(data) {
                        const audio = new Audio(data.audioPath);
                        audio.play();
                      
                   }
            });
      
        } catch (error) {
            messagePop(error.message, 'error');
        }
    }
  var mediaRecorder;
  let recorder;
     const takingInputFromUser = async()=>
     {
        
            try {
            // Check if the MediaRecorder already exists and is recording
            // if (mediaRecorder && mediaRecorder.state === "recording") {
            //      console.log("MediaRecorder is already active. Continuing to send audio.");
            //      return; // Do not start a new recording if it's already active
            // }

            // // Get audio stream
            // const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

            // // Create a MediaRecorder instance for the stream
            // mediaRecorder = new MediaRecorder(stream);

            // // Handle the audio data as it becomes available
            // mediaRecorder.ondataavailable = function(event) {
            //     if (event.data.size > 0) {
            //             event.data.arrayBuffer().then(buffer => {
            //             console.log("Emitting audio data...");

            //             // Emit the audio data to the WebSocket server
            //             socket.emit('gettingAudio', buffer);
            //             }); 
            //     }
            // };

            // // Start recording and send audio data every 250ms
            // mediaRecorder.start(250);
            console.log("Recording started...");



                navigator.mediaDevices.getUserMedia({ audio: true }).then(function(stream) {
                      // console.log("streaming the audio");
                  recorder = RecordRTC(stream, {
                    type: 'audio',
                    mimeType: 'audio/wav',
                    recorderType: StereoAudioRecorder,
                    desiredSampRate: 16000, // match Whisper / Azure
                    numberOfAudioChannels: 1,
                    timeSlice: 500, // send every 1 sec
                    ondataavailable: function(blob) {
                      blob.arrayBuffer().then(buffer => {
                        // console.log("sendng audo to backend")
                        socket.emit('gettingAudio', buffer); // send raw WAV buffer
                      });
                    }
                  });

                  recorder.startRecording();    
                });

            } catch (error) {
            console.error("Error starting recording:", error);
            }
    }

     async function convertToWav(audioBlob) {
        const arrayBuffer = await audioBlob.arrayBuffer();
        const evenLength = arrayBuffer.byteLength - (arrayBuffer.byteLength % 2);
        const trimmedBuffer = arrayBuffer.slice(0, evenLength);
        const audioData = new Int16Array(trimmedBuffer); // Convert to Int16

        const sampleRate = 16000; // 16kHz sample rate
        const wavBuffer = encodeWav(audioData, sampleRate);
        return new Blob([wavBuffer], { type: 'audio/wav' });
    }
      

      function encodeWav(samples, sampleRate) {
            const buffer = new ArrayBuffer(44 + samples.length * 2);
            const view = new DataView(buffer);

            // WAV Header
            writeString(view, 0, 'RIFF');  
            view.setUint32(4, 36 + samples.length * 2, true);
            writeString(view, 8, 'WAVE');
            writeString(view, 12, 'fmt ');
            view.setUint32(16, 16, true);
            view.setUint16(20, 1, true);  // PCM format
            view.setUint16(22, 1, true);  // Mono
            view.setUint32(24, sampleRate, true);
            view.setUint32(28, sampleRate * 2, true);
            view.setUint16(32, 2, true);
            view.setUint16(34, 16, true); // 16-bit PCM
            writeString(view, 36, 'data');
            view.setUint32(40, samples.length * 2, true);

            let offset = 44;
            for (let i = 0; i < samples.length; i++, offset += 2) {
                view.setInt16(offset, samples[i], true);
            }
            return buffer;
        }

        function writeString(view, offset, string) {
            for (let i = 0; i < string.length; i++) {
                view.setUint8(offset + i, string.charCodeAt(i));
            }
        }



let stream;
async function startRecording() {
  stream = await navigator.mediaDevices.getUserMedia({ audio: true });

  recorder = RecordRTC(stream, {
    type: 'audio',
    mimeType: 'audio/wav', // or 'audio/webm'
    recorderType: StereoAudioRecorder, // enables WAV
    numberOfAudioChannels: 1,
    desiredSampRate: 16000 // good for STT
  });

  recorder.startRecording();
  console.log('Recording started...');
}


async function stopRecordingAudio() {

     // mediaRecorder.stop();
  await recorder.stopRecording(() => {
    const audioBlob = recorder.getBlob();
    console.log('Recording stopped, sending to STT...');
  //   speechToText(audioBlob);
   });
}

function sendToSTT(audioBlob) {
  const formData = new FormData();
  formData.append("file", audioBlob, "audio.wav");
        try
        {
            $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
            });
             $.ajax({
                   url : '/ChatBox/speechToText',
                   type : 'POST',
                   data : formData,
                   processData: false,  
                   contentType: false, 
                   success : function(data) {
                        const audio = new Audio(data.audioPath);
                        audio.play();
                      
                   }
            });
      
        } catch (error) {
            messagePop(error.message, 'error');
        }

}

