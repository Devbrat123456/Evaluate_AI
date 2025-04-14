
    document.getElementById("startBtn").addEventListener("click", () => {
     
       takingInputFromUser();
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

 // var socket = new io.Socket();
    var socket = io();

        // connection with server
        // socket.on('connect', function () {
        //     console.log('Connected to Server');
        //      // takingInputFromUser();
        // });
        // console.log(socket);

// socket.connect(window.location.origin); 
  var mediaRecorder;
     const takingInputFromUser = async()=>
     {
         var audioChunks = [];
         var constraints = { audio: true, video: false };
        navigator.mediaDevices.getUserMedia(constraints).then(function (stream)
        {

                 
                var audio = document.getElementById('audioCapture');
                mediaRecorder = new MediaRecorder(stream);
                mediaRecorder.start();
                mediaRecorder.ondataavailable = function (event) {
                if (event.data.size > 0) {
                 audioChunks.push(event.data);
                }
                };

                mediaRecorder.onstop = async function () {
                    var audioBlob = new Blob(audioChunks, { type: 'audio/webm' });
                    const wavBlob = await convertToWav(audioBlob);
                    var audioUrl = URL.createObjectURL(wavBlob);
                    audio.src = audioUrl;
                    audio.play();
                    speechToText(audioUrl);
               };

             document.getElementById('stopRecording').addEventListener('click', function () {
                mediaRecorder.stop();
                console.log("Recording stopped...");
             });
        })
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



    //   if (!('webkitSpeechRecognition' in window)) {
    //     alert("Your browser doesn't support the Web Speech API. Please use Chrome or Edge.");
    // } else {
    //     // Create a new instance of SpeechRecognition
    //     const recognition = new webkitSpeechRecognition();

    //     // Set properties
    //     recognition.continuous = false; // Capture only one result
    //     recognition.interimResults = false; // Get the final result, not partial results
    //     recognition.lang = 'en-US'; // Set the language to English

    //     // Start button click event
    //     document.getElementById('startBtn').onclick = () => {
    //         recognition.start(); // Start listening
    //     };

    //     // Handle the result when speech is detected
    //     recognition.onresult = (event) => {
    //         const transcript = event.results[0][0].transcript; // Get the speech result
    //         // document.getElementById('result').innerText = `You said: ${transcript}`;
    //         console.log(`You said: ${transcript}`);
    //     };

    //     recognition.onerror = (event) => {
    //         console.error('Speech recognition error:', event.error);
    //     };

    //     recognition.onstart = () => {
    //         console.log('Speech recognition started');
    //     };
    //     recognition.onend = () => {
    //         console.log('Speech recognition ended');
    //     };
    // }
    
    </script>