const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];

  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
// Array.prototype.every() // is everyone 19 or older?

let ejercicio1=()=>{
    return people.some(person=>{
        return 2023-person.year > 19
    })
}

console.log("Resultado del ejercicio 1")
console.log(ejercicio1())

let ejercicio2=()=>{
    return people.every(person=>{
        return 2023-person.year > 19
    })
}

console.log("Resultado del ejercicio 2");
console.log(ejercicio2())

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423

let ejercicio3=()=>{
    return comments.find(comment=>{
        return comment.id==823423
    })
}

console.log("Resultado del ejercicio 3")
console.log(ejercicio3())

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423

let ejercicio4=()=>{
    comments.splice(comments.findIndex(comment=>{
        return comment.id==823423
    }),
    1)
    return comments
}

console.log("Resultado del ejercicio 4")
console.log(ejercicio4())