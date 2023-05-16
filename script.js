import ejercicios from './modules/exercises.js'
const gridSection=document.querySelector(".container");

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