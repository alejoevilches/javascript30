//Constantes de los inputs
const spacingInput=document.getElementById("spacing");
const blurInput=document.getElementById("blur");
const baseInput=document.getElementById("base");
const img=document.querySelector(".img_container");

function updateVariables(){
    blurInput.addEventListener("change",()=>{
        img.style.filter=`blur(${blurInput.value}px)`
    })

    spacingInput.addEventListener("change",()=>{
        img.style.padding=`${spacingInput.value}px`
    })

    baseInput.addEventListener("change",()=>{
        img.style.backgroundColor=baseInput.value;
    })
}

updateVariables();
