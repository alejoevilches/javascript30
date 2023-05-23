const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
const list=document.getElementById("bands")

function sortArray(arr){
    let regex=/\b(?:The|An|A)\s/gi;
    orderedArr=arr.map((el)=>{
        el=el.replace(regex,"")
        return el
    })
    .sort();
    return orderedArr
}

sortArray(bands)

function showArr(arr){
    arr.forEach(el => {
        return list.innerHTML+=`<li>${el}</li>`
    });
}

showArr(orderedArr)


