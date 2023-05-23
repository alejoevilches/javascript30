const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function sortArray(arr){
    let regex=/\b(?:The|An|A)\s/gi;
    orderedArr=arr.map((el)=>{
        el=el.replace(regex,"")
        return el
    })
    .sort();
    return orderedArr
}

console.log(sortArray(bands))