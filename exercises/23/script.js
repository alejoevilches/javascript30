const divs = document.querySelectorAll("div");
const button=document.querySelector("button");

function logText(e){
    console.log(this.classList.value);
    e.stopPropagation();
}

divs.forEach(div=>{
    div.addEventListener("click", logText, {
        capture:true,
        once:true //Hace que una vez q se aprieta se desactive el evento
    });
})

button.addEventListener("click", ()=>{
    console.log("CLICK!!")
}, {
    once:true
})