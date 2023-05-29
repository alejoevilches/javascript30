const triggers=document.querySelectorAll("a");
const highlight=document.createElement("span");
highlight.classList.add("highlight");
document.body.append(highlight)

function highlightLink(){
    console.log("highlight");
}

triggers.forEach(trigger=>{
    trigger.addEventListener("mouseover",(e)=>{
        console.log("highlight")
    })
});