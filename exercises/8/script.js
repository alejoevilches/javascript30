const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];
let club="River Plate"

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

//Regular
console.log("Este es un console.log regular")

//Interpolation
console.log("Hello! My name is %s", "Alejo")
console.log(`I am a ${club} fan`)

//Styled
console.log(`%c I am a styled text`, "color:violet; background-color:black")

//Warn
console.warn("Esto es una advertencia")

//Error
console.error("Esto es un error");

//Info
console.info("Esto es informacion")

//Assert
console.assert(1==2, "esto es erroneo!")

//Clearing
//console.clear();

//Ver elementos del DOM
let p=document.querySelector("p");
console.dir(p)
console.log(p)