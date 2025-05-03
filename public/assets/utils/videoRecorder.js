const openMediaDevices = async (constraints) => {
    return await navigator.mediaDevices.getUserMedia(constraints);
}

const startVideoStreaming =async()=>{

try {
          const constraints = { audio: { noiseSuppression: true, echoCancellation: true }, video: true };
            const stream = await openMediaDevices(constraints);
            console.log('Got MediaStream:', stream);

            const videoElement = document.querySelector('video#videoStreaming');
            console.log(videoElement, stream);

            videoElement.srcObject = stream;
            videoElement.play();
            startRecoding(stream);
        } catch (error) {
            console.error('Error accessing media devices.', error);
        }
 }
  var mediaRecorder;

 const startRecoding =(stream)=>{

  try{
        let  recordedChunks = [];
        mediaRecorder = new MediaRecorder(stream);

        mediaRecorder.ondataavailable = (event)=>{

         if(event.data.size>0)
         {
            recordedChunks.push(event.data);
         }
        }
        mediaRecorder.onstop=()=>{
        const blob = new Blob(recordedChunks,{
            type:'video/webm'
        });
        onStopCreatingBlob(blob);
        }
        mediaRecorder.start();
        console.log("Recording Started");
   }
    catch(error){
       console.log(error);
    } 

 }

 const stopRecording =()=>{
     mediaRecorder.stop();
      console.log("Recording Stop");
 }

const onStopCreatingBlob =(blob)=>{
        const url = URL.createObjectURL(blob);
        // downloadVideo(url);
        uploadTheFileFolder(blob);

}
const downloadVideo=(url)=>{
        const a = document.createElement('a');
        a.href=url;
        a.download="interviewRecording.webm";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
}

 const uploadTheFileFolder = async (blob)=>{
      try{
         const formData = new FormData();
         formData.append('interviewVideo',blob,'recorded-video.webm');
         let response = await   fetch('/chatbox/uploadRecording',{
            method:"POST",
            headers:{
                'X-CSRF-TOKEN':$('meta[name="csrf-token"]').attr('content')
            },
            body:formData
         });
         console.log(response,"on file upload");
      }
      catch(error)
      {
            console.log(error,"while uploading error");
      } 
     
 }







setTimeout(stopRecording,10000);
 startVideoStreaming();
