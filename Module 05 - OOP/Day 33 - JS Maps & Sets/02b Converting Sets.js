let mySet = new Set([10,20,30,40,50]);
let myArray = [100,200,300,400,500,500];
let myObject = {name: 'john', age: 21};

    //01. Set -> Array:
        let convertedToArray = [...mySet];
        console.log(convertedToArray);

    //02. Array -> Set:
        let convertedToSet01 = new Set(myArray);
        console.log(convertedToSet01);

    //03. Some Tinkering:
        let convertedToSet02 = new Set([myObject]);
        console.log(convertedToSet02); //works
        myObject.age++;
        console.log(convertedToSet02); //works