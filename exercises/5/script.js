const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
let cities=[];
const searchBar=document.getElementById("input");
const suggestionsBar=document.getElementById("suggestion")

//obtain data and push it to cities
fetch(endpoint)
.then(response=>response.json())
.then(data=>cities.push(...data));

function encontrarCiudades(palabra){
    return cities.filter(ciudad=>{
        let regex=new RegExp(palabra, "gi");
        return ciudad.city.match(regex) || ciudad.state.match(regex); 
    })
}

function mostrarCoincidencias(){
    const arrayCoincidencias=encontrarCiudades(this.value);
    const html=arrayCoincidencias.map(place => {
        return `
            <li>
                <span class="name">${place.city}, ${place.state}</span>
                <span class="population">${place.population}</span>
            </li>
        `
    }).join("");
    suggestionsBar.innerHTML=html;
}
 
searchBar.addEventListener("input",mostrarCoincidencias);