const triggers=document.querySelectorAll("a");
const highlight=document.createElement("span");
highlight.classList.add("highlight");
document.body.append(highlight)

function highlightLink(){
    const coords=this.getBoundingClientRect();
    const coordsObj={
        width:coords.width,
        height:coords.height,
        top:coords.top+window.scrollY,
        left:coords.left+window.scrollX
    };
    highlight.style.width = `${coordsObj.width}px`;
    highlight.style.height = `${coordsObj.height}px`;
    highlight.style.transform = `translate(${coordsObj.left}px, ${coordsObj.top}px)`;
}

triggers.forEach(trigger=>{
    trigger.addEventListener("mouseover", highlightLink)
})