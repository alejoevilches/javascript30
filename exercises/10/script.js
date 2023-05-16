//Constantes
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

//Funcionalidades
function togglePlay(){
    const toggle=video.paused ? "play" : "pause";
    video[toggle]();
}

function updateButton(){
    const icon = this.paused ? "►" : "▌▐"
    toggle.textContent=icon;
}

function skip(){
    video.currentTime+=parseFloat(this.dataset.skip)
}

function handleRangeChange(){
    this.name=value
}

function handleProgress(){
    const percent=(video.currentTime / video.duration)*100;
    progressBar.style.flexBasis=`${percent}%`
}

function handleProgressBar(e){
    const updatedTime=(e.offsetX/progress.offsetWidth) * video.duration
    console.log(updatedTime)
    video.currentTime=updatedTime;
}

//Event listeners
toggle.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton)
video.addEventListener("pause", updateButton)
video.addEventListener("click", togglePlay);
video.addEventListener("timeupdate", handleProgress);
skipButtons.forEach(button => {
    button.addEventListener("click", skip)
});
ranges.forEach(range => {
    range.addEventListener("input", handleRangeChange)
});
progress.addEventListener("click",handleProgressBar)
progress.addEventListener("input", (e)=>{
    mousedown ? handleProgressBar(e) : mousedown=false;
})
let mousedown=false;
progress.addEventListener("mousedown", ()=>{
    mousedown=true;
})
progress.addEventListener("mousedown", ()=>{
    mousedown=false;
})
