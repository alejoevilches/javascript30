const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];

  const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
  ];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
let inventorsFrom1500=inventors.filter(inventor=>{
  return inventor.year<=1599 && inventor.year>=1500
})

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
let inventorsNames=inventors.map(inventor=>({
  first: inventor.first,
  last:inventor.last
}))

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
inventorsInOrder=inventors.sort((a,b)=>{
  return a.year - b.year
})

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
let totalAges=inventors.reduce((acc,inventor)=>{
  return acc+(inventor.passed-inventor.year)
},0)

// 5. Sort the inventors by years lived
let inventorsSortedByYearsLived=inventors.sort((a,b)=>{
  return (a.passed-a.year) - (b.passed-b.year);
})

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
en.wikipedia.org/wiki/Category:Boulevards_in_Paris

console.log("Respuesta del ejercicio 1:")
console.log(inventorsFrom1500)

console.log("Respuesta del ejercicio 2:")
console.log(inventorsNames)

console.log("Respuesta del ejercicio 3:")
console.log(inventorsInOrder)

console.log("Respuesta al ejercicio 4:")
console.log(totalAges)

console.log("Respuesta al ejercicio 5:")
console.log(inventorsSortedByYearsLived)

boulevardList.forEach(boulevard=>{
  if (boulevard.outerText.includes("de")){
      solution.push(boulevard.outerText)
  }
})




