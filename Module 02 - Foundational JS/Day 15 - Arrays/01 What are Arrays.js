//01. Array: An ordered collection of values. They're a non-primitive data-type in JS. Let's create some:
    //a) Using Array Literals:
        let myArr = [1, 'string', '', true, [1,2,3], [], {name: 'john'}, {}, NaN, null, undefined];
            console.log(myArr); //ibid
    //b) Using Array Constructor Function:
        //ba) passing multiple arguments:
            let myArr2 = new Array(1,2,3);
                console.log(myArr2); //[1,2,3]
        //bb) passing a single argument:
            let myArr3 = new Array(3);
                console.log(myArr3) //[<3 empty items>]
    //c) Using a static method from Array constructor:
        let myArr5 = Array.of(1,2,3);
            console.log(myArr5); //[1,2,3]

//02. Since they're non-primitive, they're saved & passed by reference (not value). For Example:
    let myArr4 = [1,2,3];
        console.log(myArr2 == myArr4);  //false
        console.log(myArr2 === myArr4); //false