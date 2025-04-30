const openMediaDevices = async (constraints) => {
    return await navigator.mediaDevices.getUserMedia(constraints);
}

const startVideoStreaming =async()=>{

try {
          const constraints = { audio: { noiseSuppression: true, echoCancellation: true }, video: true };

            
            const stream = await openMediaDevices(constraints); // <-- ADD 'await' here
            console.log('Got MediaStream:', stream);

            const videoElement = document.querySelector('video#videoStreaming');
            console.log(videoElement, stream);

            videoElement.srcObject = stream;
            videoElement.play();
        } catch (error) {
            console.error('Error accessing media devices.', error);
        }
 }
 // startVideoStreaming();
