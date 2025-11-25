//Let's see some useful properties & methods in map objects:
    let myMap = new Map
    (
        [
            ['name', 'john doe'],
            ['phone', 123],
            ['isMarried', false],
            ['email', 'johndoe@email.com']
        ]
    );
//01. Properties:
            console.log('PROPERTIES:')
    console.log(myMap.size); //no. of elements

//02. Methods:
            console.log('\n' + 'METHODS:')
    console.log(myMap.has('name')); //whether the map has a key
    myMap.delete('isMarried'); console.log(myMap); //deleting an element
    myMap.clear(); console.log(myMap);  //deletes all elements...
    myMap.set('key', 'value'); //add/update an element
    myMap.get('key'); //read an element