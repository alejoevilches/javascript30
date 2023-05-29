const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');

msg.text = document.querySelector(`[name="text"]`).value;

function populateVoices(){
    voices=this.getVoices();
    const voiceOptions=voices
    .map(voice=>`<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
    .join("");
    voicesDropdown.innerHTML=voiceOptions;
}

function setVoice(){
    msg.voices=voices.find(voice=>voice.name===this.value);
    console.log(this.voices);
}

speechSynthesis.addEventListener("voiceschanged", populateVoices)
voicesDropdown.addEventListener("change", setVoice);