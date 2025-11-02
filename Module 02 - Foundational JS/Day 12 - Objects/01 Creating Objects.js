//01. Object: It's a type of data-structure. It's known by different names. Such as:
    //a) A collection of key-value pairs.
    //b) A keyed collection.


//02. Creating Objects:
    //a) Object-Literal Syntax:
        let user01 = {name: 'john', age: 21, 'is married': false};
            console.log(user01.name); //john
            console.log(user01['is married']); //false
    //b) Object constructor function:
        let user02 = new Object();
            console.log(user02); //{} (empty object)...
    //c) Creating Objects with dynamic keys/values:
        let a = 'cityName', b = 'weather', c = 'population';
        let x = 'london', y = 'rainy', z = 870000;
        let city01 =
        {
            [a]: x,
            [b]: y,
            [c]: z
        }
            console.log(city01);
    //d) Special Functions:
        function createCar(brand, name, model)
        {
            let car = {brand, name, model};
            return car;
        }
        let myCar = createCar('toyota', 'supra', 2010);
            console.log(myCar);
    //e) Constructor Functions:
        function Car(brand, name, model)
        {
            this.brand = brand;
            this.name = name;
            this.model = model;
        }
        let myVintageCar = new Car('ford', 'mustang', 1980);
            console.log(myVintageCar);
            console.log(myVintageCar instanceof Car); //true


//03. Some Things to do with Object Properties:
    //a) adding new properties:
        user01['is employed'] = true;
            console.log(user01['is employed']); //true
    //b) modifying properties:
        user01.age = --user01.age;
            console.log(user01.age); //20
    //c) deleting properties:
        delete user01['is employed'];
            console.log(user01); //{name: 'john', age: 20, 'is married': false}...