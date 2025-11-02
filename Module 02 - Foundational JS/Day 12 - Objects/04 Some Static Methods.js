//01. Object.create():
    let x = Object.create(Object); //the argument passed will be the prototype of the created object. It can't be null...
    console.log(x);
    console.log(Object.getPrototypeOf(x));

//02. Object.keys():
    let employee =
    {
        name: 'john',
        age: 21,
        isMarried: false,
        salary: null
    }
        console.log(Object.keys(employee));

//03. Object.assign():
    let target = {a: 1, b: 2, c: 3};
    let source = {c: 4, d: 5, e: 6};
    let concat = Object.assign(target, source);
        console.log(concat);
    //NOTE: This method creates a "shallow copy" of the object, i.e., if a key points to a primitive, it'll be copied by value, but if it contains a non-primitive, it'll be copied by reference. For Example:
        let nestedObject = {a: {x: 1, y: 2, z: 3}, b: 0, c: [1,2,3]};
        let shallowCopy = Object.assign({}, nestedObject);
        shallowCopy.a.x++;
            console.log(nestedObject.a.x); //2 (because both keys reference the same inner object)!
            console.log(shallowCopy.a.x);  //2
        shallowCopy.b++;
            console.log(nestedObject.b); //0 (because both keys have their separate copies of primitives)
            console.log(shallowCopy.b);  //1


//04. structuredClone():
    let deepCopy = structuredClone(nestedObject);
    deepCopy.a.x++;
        console.log(nestedObject.a.x); //2
        console.log(deepCopy.a.x); //3


//05. Object.entries:
    console.log(Object.entries(employee));
    console.log(Object.entries(nestedObject));


//06. Object.fromEntries():
    let myMap = [['a', 1], ['b', 'string'], ['c', [1,2,3]]];
    console.log(Object.fromEntries(myMap));


//07. Object.freeze(): The object becomes totally immutable, i.e., can't add, remove, or change the value of any property:
    let readOnly = {name: 'john', UID: 123};
    Object.freeze(readOnly);
    readOnly.name = 'bob';
    readOnly.age = 21; //ignored
    delete readOnly.name; //ignored
        console.log(readOnly);
        console.log(Object.isFrozen(readOnly)); //true

//07a. Object.defineProperty: In case we wanna 'freeze' only a single key in an object:
    let user = {name: 'bob', UID: 123};
    Object.defineProperty(user, 'UID', {writable: false, configurable: false});
    user.UID = 999; //ignored (writable)
    delete user.UID; //ignored (configurable)
        console.log(user);
    //This line will cause an error:
        // Object.defineProperty(user, 'UID', {writable: true, configurable: true});


//08. Object.seal(): We can't add/delete properties, but we can mutate the existing ones:
    let sealedDataStructure = {name: 'alex', age: 18, UID: 'qwerty'};
    Object.seal(sealedDataStructure);
    sealedDataStructure.age++;
    sealedDataStructure.subjects = ['C', 'JS', 'C++']; //ignored
    delete sealedDataStructure.UID; //ignored
        console.log(sealedDataStructure);


//09. Object.hasOwn():
    console.log(Object.hasOwn(employee, 'name')); //true
    console.log(Object.hasOwn(employee, 'toString')); //false