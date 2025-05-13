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
        micButton.id = 'stopbtn';
        document.getElementById('mic').classList.add('recording');
    } else {
        micButton.id = 'startBtn';
        isRecognizing = false;
        stopRecordingAudio();
         $('#SubmitAnswerButton').removeClass('displayNone');
        console.log("stopping the mic");
        document.getElementById('mic').classList.remove('recording');
    }
});


socket.on('sttinterim',(text)=>{
     $('#userAnswerInput').val(text);
     console.log("thi is text i am getting ",text);
})


socket.on('sttfinal',(text)=>{
        currentText+=" "+text;
     $('#userAnswerInput').val(currentText);
     console.log("thi is text i am getting ",text);
})
const speechToText = async (pathforAudioFile) => {

    const response = await fetch(pathforAudioFile);
    const audioBlob = await response.blob();
    const audioFile = new File([audioBlob], "audio.wav", {
        type: "audio/wav"
    });

    const formData = new FormData();
    formData.append("audio", audioFile);
    formData.append("mukul", "good");

    try {
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
        $.ajax({
            url: '/ChatBox/speechToText',
            type: 'POST',
            data: formData,
            processData: false,
            contentType: false,
            success: function(data) {
                const audio = new Audio(data.audioPath);
                audio.play();

            }
        });

    } catch (error) {
        messagePop(error.message, 'error');
    }
}
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
            timeSlice: 1,
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
          socket.emit('endStream')
        recorder.stopRecording(() => {
              if(recorder)
              {
                
                const audioBlob = recorder.getBlob();
                console.log('Recording stopped, blob ready.');

            // Stop mic access
                const stream = recorder.stream;
                stream.getTracks().forEach(track => track.stop());
              }

        });
        recorder = null;
    }
}