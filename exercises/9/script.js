const checkboxes=document.querySelectorAll(".item");

let lastChecked;
let inBetween;

checkboxes.forEach(checkbox => {
    checkbox.addEventListener("click",handleCheck)
});

function handleCheck(e){
    inBetween=false;
    if (e.shiftKey && this.checked){
        checkboxes.forEach(checkbox=>{
            console.log(checkbox)
        })
    }
}

