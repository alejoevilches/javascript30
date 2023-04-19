//Constantes de los inputs
const spacingInput=document.getElementById("spacing");
const blurInput=document.getElementById("blur");
const baseInput=document.getElementById("base");

console.log(spacingInput.value)

blurInput.addEventListener("change",()=>{
    console.log(blurInput.value)
})

spacingInput.addEventListener("change",()=>{
    console.log(spacingInput.value)
})