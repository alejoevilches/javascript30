//Constantes de los inputs
const spacingInput=document.getElementById("spacing");
const blurInput=document.getElementById("blur");
const baseInput=document.getElementById("base");
const img=document.getElementById("img");

function updateVariables(){
    blurInput.addEventListener("change",()=>{
        img.style.filter=`blur(${blurInput.value}px)`
    })

    spacingInput.addEventListener("change",()=>{
        console.log(spacingInput.value);
        img.style.margin=`${spacingInput.value}px`
        console.log(img.style.margin);
    })
}

updateVariables();
