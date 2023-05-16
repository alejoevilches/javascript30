const pressArray=[];
const secretWord="river"

window.addEventListener("keyup", (e)=>{
    pressArray.push(e.key)
    pressArray.splice(-secretWord.length-1, pressArray.length-secretWord.length);
    console.log(pressArray)
    checkSecretWord();
})

function checkSecretWord(){
    if (pressArray.join("")==secretWord){
        cornify_add();
    }
}

