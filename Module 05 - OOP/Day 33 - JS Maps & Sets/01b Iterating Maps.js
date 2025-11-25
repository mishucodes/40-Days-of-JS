let myMap = new Map
([
    ['john', 21],
    ['bob', 19],
    ['alice', 10],
    ['harry', 29]
]);

//01) Getting all the keys:
    console.log(myMap.keys()); //not a normal object/array. it's an "iterator object".
    let people = myMap.keys();
    people.forEach((element, index, map) => console.log(index, ':', element, map));
        //NOTE: we might get 'undefined' for 'map' in certain environments...

//02) Getting all the values:
    console.log(myMap.values()); //not a normal object/array. it's an "iterator object".
    let ages = myMap.values();
    ages.forEach((element, index, map) => console.log(index, ':', element, map));
        //NOTE: we might get 'undefined' for 'map' in certain environments...

//03) Getting all the entries (key-value pairs):
    console.log(myMap.entries()); //not a normal object/array. it's an "iterator object".
    let entries = myMap.entries();
    entries.forEach((element, index, map) => console.log(index, ':', element, map));
        //NOTE: we might get 'undefined' for 'map' in certain environments...

//04. Iterating over a map directly:
    //04a) using forEach():
        myMap.forEach((value, key, map) => console.log(key, ':', value));
    //04b) using for-of:
        //04ba) destructured element:
            for(let [key, value] of myMap)
                console.log(key, ':', value);
        //04bb) non-destructured element:
            for(let element of myMap)
                console.log(element);