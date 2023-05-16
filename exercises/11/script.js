const pressArray=[];
const secretWord="river"

window.addEventListener("keyup", (e)=>{
    pressArray.push(e.key)
    pressArray.splice(-secretWord.length-1, pressArray.length-secretWord.length);
    checkSecretWord();
})

function checkSecretWord(){
    if (pressArray.join("")==secretWord){
        alert("Lo hicimos")
    }
}

