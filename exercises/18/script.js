window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition=new SpeechRecognition();
recognition.interinResults=true;
let p=document.createElement("p");
const words=document.querySelector(".words");

recognition.addEventListener("results",(e)=>{
    console.log(e);
})

recognition.start();