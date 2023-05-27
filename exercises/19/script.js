const arrow=document.querySelector(".arrow");
const speed=document.querySelector(".speed");

navigator.geolocation.watchPosition((data)=>{
    console.log(data);
});
