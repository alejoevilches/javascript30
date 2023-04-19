//NodeList con controles
const controls=document.querySelectorAll(".controls input")

//Agrego events listener a cada control
controls.forEach(control=>{
    control.addEventListener("change",()=>{
        console.log(control.value)
    })
})