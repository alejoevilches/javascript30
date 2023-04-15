//Creo array con todas las keys
const keys=document.querySelectorAll("[data-key]")

function makeSounds(){
document.addEventListener("keypress", (e)=>{
    keys.forEach(key => {
        if (key.dataset.key==e.key.toUpperCase()){
            return console.log(key)
        } 
    })
})
}

makeSounds();