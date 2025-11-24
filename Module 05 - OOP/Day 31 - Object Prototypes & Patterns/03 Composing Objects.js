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

let owner01 = new Owner('john', 'johndoe@email.com');
let car01 = new Car('honda', 'city', 2010, owner01);
console.log(car01);
owner01.name = 'david';
console.log(car01); //new name is 'david' since we pass objects by reference, not by value...