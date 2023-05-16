const pressArray=[];
const secretWord="river"

window.addEventListener("keyup", (e)=>{
    pressArray.push(e.key)
    pressArray.join("") == secretWord ? alert("Usaste la palabra secreta") : "0"
})

