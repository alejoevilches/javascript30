const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;
let inBetween;

checkboxes.forEach(checkbox => {
    checkbox.addEventListener("click",handleCheck)
});

function handleCheck(e) {
    let inBetween = false;
    if (e.shiftKey && this.checked) {
     // loop over every single checkbox
     checkboxes.forEach(checkbox => {
      if (checkbox === this || checkbox === lastChecked) {
      inBetween = !inBetween;
      }
      if (inBetween) {
      checkbox.checked = true;
      }
     });
    }
   lastChecked = this;
   }



