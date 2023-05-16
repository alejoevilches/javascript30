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
        description:"Una app para modificar variables CSS utilizando Javascript",
        image:"/src/screenshots/2.png"
    },
    {
        title:"Array Cardio 1",
        description:"Ejercicios sobre metodos de array",
        image:"/src/screenshots/3.png"
    },
    {
        title:"Flex Panels Image Gallery",
        description:"Un panel de imagenes con efectos de animación.",
        image:"/src/screenshots/4.png"
    },
    {
        title:"Ajax Type Ahead",
        description:"Una app que muestra ciudades desde un endpoint.",
        image:"/src/screenshots/5.png"
    },
    {
        title:"Array Cardio 2",
        description:"Mas ejercicios sobre metodos de arrays.",
        image:"/src/screenshots/6.png"
    },
    {
        title:"HTML5 Canvas",
        description: "Un lienzo para dibujar usando solo HTML y JS",
        image:"/src/screenshots/7.png"
    },
    {
        title:"Dev Tool Tricks",
        description: "Formas de utilizar las herramientas de desarrollador",
        image:"/src/screenshots/8.png"
    },
    {
        title:"Checking Multiple Checkboxes",
        description: "Una todo-list para probar metodos de inputs",
        image:"/src/screenshots/9.png"
    },
    {
        title:"Custom HTML5 Video Player",
        description: "Una reproductor de video totalmente customizado",
        image:"/src/screenshots/10.png"
    },
    {
        title:"Key Sequence Detection",
        description: "Una reproductor de video totalmente customizado",
        image:"/src/screenshots/11.png"
    },
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