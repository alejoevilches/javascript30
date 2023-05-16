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
    console.log("skipping")
}

//Event listeners
toggle.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton)
video.addEventListener("pause", updateButton)
video.addEventListener("click", togglePlay);
skipButtons.forEach(button => {
    button.addEventListener("click", skip)
});

