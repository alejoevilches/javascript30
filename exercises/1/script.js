//capturar agujas
const hoursNeedle=document.getElementById("hours_needle");
const minutesNeedle=document.getElementById("minutes_needle");
const secondsNeedle=document.getElementById("seconds_needle");

//variables
let now=new Date()
let segundos=now.getSeconds()
let minutos=now.getMinutes();
let horas=now.getHours();

function setClock(){
  secondsNeedle.style.transform=`rotate(${90+segundos*6}deg)`;
  minutesNeedle.style.transform=`rotate(${90+minutos*6}deg)`;
  hoursNeedle.style.transform=`rotate(${90+horas*30}deg)`
}

function contadorSegundos() {
    const intervalo = setInterval(() => {
      segundos++;
      secondsNeedle.style.transform=`rotate(${90+segundos*6}deg)`
      console.log(segundos)
      if (segundos === 60) {
        contadorMinutos();
        segundos=0;
      }
    }, 1000);
}

function contadorMinutos(){
  minutos++
  minutesNeedle.style.transform=`rotate(${90+minutos*6}deg)`
  console.log(minutos)
  if (minutos==60){
    minutos=0;
    contadorHoras()
  }
};

function contadorHoras(){
  horas++
  hoursNeedle.style.transform=`rotate(${90+minutos*30}deg)`
  if (horas==12){
    horas=0
  }
}

function clock(){
  setClock();
  contadorSegundos();
}

clock();
