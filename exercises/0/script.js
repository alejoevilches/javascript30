//Creo array con todas las keys
const keys=document.querySelectorAll("[data-key]")

function makeSounds(){
document.addEventListener("keydown", (e)=>{
    keys.forEach(key => {
        if (key.dataset.key==e.key.toUpperCase()){
            key.className+=" playing"
        } 
    })
})
}

document.addEventListener("keyup", (e)=>{
    keys.forEach(key => {
        if (key.dataset.key==e.key.toUpperCase()){
            key.classList.remove("playing");
            let sound=document.createElement("audio");
            sound.setAttribute("src", './src/sounds/${e.key.toUpperCase()}.wav');
            sound.play();
        } 
    })
})

makeSounds();