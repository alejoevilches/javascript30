//NodeList con controles
const controls=document.querySelectorAll(".controls input")


//Agrego events listener a cada control
controls.forEach(control=>{
    control.addEventListener("input",()=>{
        control.id=="blur" ? document.body.style.setProperty('--blur', `${control.value}px`) : 
        control.id=="spacing" ? document.body.style.setProperty('--spacing', `${control.value}px`) :
        document.body.style.setProperty('--base', control.value)
    })
    })


