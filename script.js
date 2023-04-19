const gridSection=document.querySelector(".container");
const ejercicios=[
    {
        title:"JavaScript Drum Kit",
        image:"/src/screenshots/0.png",
        description:"Una app para poder tocar la bateria con el teclado."
    },
    {
        title:"JavaScript + CSS Clock",
        description:"Un reloj elegante diseñado usando JavaScript",
        image:"/src/screenshots/1.png"
    },
    {
        title:"Update CSS Variables with JavaScript",
        description:"Una app para modificar variables CSS utilizando Javascript"
    }
]

console.log(ejercicios[0].title)

function crearCards(){
for (let i=0;i<=29;i++){
    let cardId="card" + i;
    let cardTemplate =`
    <a href="/exercises/${i}/index.html"><div class="card" id=${cardId}>
        <img class="card_img" src="${ejercicios[i].image}"></img>
        <h2 class="card_title">${ejercicios[i].title}</h2>
        <p class="card_description">${ejercicios[i].description}</p>
    </div></a>
    `;
    gridSection.innerHTML+=cardTemplate;
    }
}

crearCards()