//What is a Map:
//-> It's a collection of key-value pairs. But:
    //a) the key can be of any type.
    //b) map remembers the order in which elements were added to it.

//01. Basic Syntax:
    let myMap = new Map
    (
        [
            ['name', 'john'],
            ['phone', 123],
            ['isMarried', false]
        ]
    );
    //NOTE: Don't be under the assumption that a 'map' is an array of arrays. it's just an input type that the Map constructor fn accepts. it may, in fact, take any 'iterable' as its argument...
    //FAQ:
        let myMapCopy = new Map
        ([
            ['name', 'john', 'stossel'],
            ['phone', 123, 'xyz'],
            ['isMarried', false, 'but actually true']
        ]); //...the Map fn will ignore the rest of the extra 'garbage' values...
    //Testing:
        console.log('normalMap:', myMap);
        console.log('mapCopy:', myMapCopy);
        console.log(Object.getPrototypeOf(myMap));


//02. Adding new elements to a map:
    myMap.set('key', 'value');
    console.log('updatedMap:', myMap);
    //NOTE: if you repeat a key, the new old key will be replaced by it...
        myMap.set('key', 'newValue');
        console.log('updatedMap:', myMap);


//03. Getting the values of existing keys from a map:
    console.log('key:', myMap.get('key'));


//04. Some tinkering with Map Keys:
    let funMap = new Map();
    funMap.set(42, 'the meaning of life');
    funMap.set(40 + 2, 'still, the meaning of life'); //will override ibid. wanted to show that ints are actually ints in maps.
    funMap.set(false, 'i like chinese food');
    funMap.set(true, 'henry george is one of the best economists ever lived');
    funMap.set(true, 'euclid was an artist disguised as a mathematician'); //should override ibid.
    funMap.set({randomKey: 'randomValue'}, 'the key to this value is an object');
    funMap.set([true, false, 1, 'str', {key: 'value'}], 'the key to this value is an array');
    //Printing this funMap:
        console.log('funMap:', funMap); //keys are of various types (primitive & non-primitive)...
    //Another interesting example:
        let x = new Map();
        x.set({key: "value"}, 0);
        x.set({key: "value"}, 1);
        console.log(x); //no override here [because non-primitive keys]
        console.log(x.get({key: "value"})); //undefined [since different reference]