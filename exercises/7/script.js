const canvas=document.getElementById("draw");
const ctx=canvas.getContext("2d");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
ctx.strokeStyle="#BADA55";
ctx.lineJoin="round";
ctx.lineCap="round";

let isDrawing = false;
let lastX= 0;
let lastY= 0;


canvas.addEventListener("mousemove", (e)=>{
    console.log(e)
});