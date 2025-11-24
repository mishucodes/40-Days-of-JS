function Car(brand, model, year, owner)
{
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.owner = owner;
}

function Owner(name, email)
{
    this.name = name;
    this.email = email;
}
let car01 = new Car('honda', 'city', 2010, new Owner('john', 'johndoe@email.com'));

//We haven't defined '.toString()' anywhere, but the 'Object' Prototype does define it. Not that it does anything useful:
    console.log(car01.toString()); //[object Object]
    console.log('string' + {}); //.toString() is supposed to be there to 'handle' situations like these...

//Let's add some user-defined properties & methods to Car class:
    Car.prototype.numberOfWheels = 4;
    Car.prototype.startEngine = function() {console.log('starting engine...')};
    console.log(car01.numberOfWheels); //4
    car01.startEngine(); //starting engine...

class Employee
{
    constructor(name, age)
    {
        this.name = name;
        this.age = age;
    }
    getSpecies = function() {return 'homo sapiens'};
}
Employee.prototype.whatSpecies = function() {return 'homo sapiens'};


//UNDERSTAND:
    //a) Every function (including constructor functions) have a common prototype called "Function".
    //b) But whenever we create a new object using a constructor function, that new object's immediate prototype is an empty object that is configurable. It can be reached at: "constructorName.prototype".
    //c) What we did in the examples above is simply (b).