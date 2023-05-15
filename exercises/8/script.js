const dogs = [{ name: 'Snickers', age: 2 }, { name: 'Hugo', age: 8 }];
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

//Agrupando elementos de un array
dogs.forEach(dog=>{
  console.group(`${dog.name}`)
  console.log(`${dog.name} is a dog`)
  console.log(`${dog.name} is ${dog.age*7}`)
  console.groupEnd(`${dog.name}`)
})

//Counting
console.count("Alejo")
console.count("Alejo")
console.count("Alejo")

//Timing
console.time("fetching data");
fetch("https://api.github.com/users/alejoevilches")
  .then(data=>data.json())
  .then(data=>{
    console.timeEnd("fetching data")
    console.log(data);
  })

//Tablas
console.table(dogs);