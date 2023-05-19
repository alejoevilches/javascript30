    // start with strings, numbers and booleans
    let club="River";
    let club2=club;
    club="Manchester City"
    console.log(club, club2);

    let libertadores=4
    let finalesLibertadores=libertadores
    console.log(libertadores, finalesLibertadores);
    finalesLibertadores=7;
    console.log(libertadores, finalesLibertadores)

    // Let's say we have an array
    const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
    const team=players;
    console.log(players, team)
    team[3]="De la Cruz"
    console.log(players)

    // and we want to make a copy of it.

    // You might think we can just do something like this:

    // however what happens when we update that array?

    // now here is the problem!

    // oh no - we have edited the original array too!

    // Why? It's because that is an array reference, not an array copy. They both point to the same array!

    // So, how do we fix this? We take a copy instead

    // one way

    // or create a new array and concat the old one in

    // or use the new ES6 Spread

    
    const teams2=[...team]
    teams2[3]="Borja"
    console.log(team, players, teams2)


    // now when we update it, the original one isn't changed

    // The same thing goes for objects, let's say we have a person object

    // with Objects
    const person = {
      name: 'Wes Bos',
      age: 80
    };

    // and think we make a copy:
    const person1={...person}
    console.log(person1)

    // how do we take a copy instead?

    // We will hopefully soon see the object ...spread

    // Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it
    const alejo={
        name: "Alejo",
        lastName:"Vilches",
        age:27,
        learning:"JavaScript"
    }

    console.clear();
    console.log(alejo)
    const dev={...alejo}
    dev.location="Buenos Aires";
    console.log(alejo,dev)

    let json=JSON.stringify(dev);
    let parsed=JSON.parse(json);
    console.log(json, parsed)
