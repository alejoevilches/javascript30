const triggers=document.querySelectorAll(".cool > li");
const background = document.querySelector(".dropdownBackground")
const nav = document.querySelector(".top")

function handleEnter(){

}

function handleLeave(){

}

triggers.forEach(trigger=>{
    trigger.addEventListener("mouseenter", handleEnter)
    trigger.addEventListener("mouseleave", handleLeave)
})