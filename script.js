const videoEl = document.getElementById('video');
const btnRequest = document.getElementById('request-btn')
const btnShare = document.getElementById('share-btn');

btnRequest.addEventListener('click', ()=>{
    selectMediaStream();
});

btnShare.addEventListener('click', async ()=>{
    btnShare.disabled=true;
    await videoEl.requestPictureInPicture();
    btnShare.disabled=false;
});

async function selectMediaStream(){
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoEl.srcObject = mediaStream;
        videoEl.onloadedmetadata=()=>{
            videoEl.play();
        }
    } catch (error) {
        console.log(error);
    }
}