//We'll try to convert maps to other data structures such as objects, arrays, etc.
let myObject =
{
    name: 'john',
    age: 20,
    911: 'not into drugs',
    true: 'likes bento cakes'
};
let myMap = new Map(
    [
        ['name', 'bob'],
        [911, 'no criminal records'],
        [true, 'likes to dance']
    ]);


    //01. Object -> Map
        console.log(Object.entries(myObject)); //notice that it's an iterable type. exactly what Map() needs...
        let convertedToMap = new Map(Object.entries(myObject));
        console.log(convertedToMap);
    //02. Map -> Object
        let convertedToObject = Object.fromEntries(myMap);
        console.log(convertedToObject);
    //03. Map -> Array
        //03a)
            let convertedToArray01 = Array.from(myMap);
            console.log(convertedToArray01);
            console.log(typeof convertedToArray01[1][0]); //notice that the types of the original values are preserved...
        //03b)
            let convertedToArray02 = [...myMap];
            console.log(convertedToArray02);