

const micButton = document.getElementById('startBtn'); // or stopBtn initially
let isRecognizing = false;

var currentText = '';
var currentInterimText = '';
micButton.addEventListener('click', function (event) {
    currentText = "";
    if (!isRecognizing) {
        // startRecording();
        takingInputFromUser();
        isRecognizing = true;
        console.log("starting the mic");
        micButton.title = "Click to Stop Mic";
        $('#generateQts').attr('title', "Please Answer the Question Wait for Next Question");
        micButton.id = 'stopbtn';
        document.getElementById('mic').classList.add('recording');
    } else {
        micButton.id = 'startBtn';
        micButton.title = " Click to Speak in Mic";
        isRecognizing = false;
        stopRecordingAudio();
        // $('#SubmitAnswerButton').removeClass('displayNone');

        console.log("stopping the mic");
        document.getElementById('mic').classList.remove('recording');
    }
    updateTitle();

});

function updateTitle() {

    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
}

socket.on('sttinterim', (text) => {
     if (!isAnswerSubmitted) {
     $('#userAnswerInput').val(text);
     }
})


socket.on('sttfinal', (text) => {

    if (!isAnswerSubmitted) {
        currentText += " " + text;
        $('#userAnswerInput').val(currentText);
    }

})

var mediaRecorder;
let recorder = null;
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
            ondataavailable: function (blob) {
                blob.arrayBuffer().then(buffer => {
                    socket.emit('gettingAudio', buffer);
                });
            }
        });
        recorder.stream = stream;

        recorder.startRecording();
        console.log("Recording started...");
    } catch (error) {
        console.error("Error starting recording:", error);
    }
}

async function stopRecordingAudio() {
    if (recorder) {
        recorder.stopRecording(async () => {
            console.log("Recorder stopped");

            // Optional: send final audio blob to backend
            const audioBlob = recorder.getBlob();
            let question_id = $('#question_id').val();
            let session_id = $('#session_id').val();

            const buffer = await audioBlob.arrayBuffer();

            // socket.emit('saveAudioFile', {
            //     buffer: buffer,
            //     fileName: `audio_${session_id}_${question_id}.wav`
            // });

            // Stop mic access
            const stream = recorder.stream;
            stream.getTracks().forEach(track => track.stop());

            // Now emit endStream (after everything is done)
            socket.emit('endStream');
            console.log("emitted endStream");

            // Trigger the button only now
            $('#SubmitAnswerButton').trigger('click');
            // console.log("answer submitted");

            recorder = null;
        });
    }
}