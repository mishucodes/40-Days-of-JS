//07. Extending Classes:
class Human
{
    species = 'homo sapiens';
    constructor(name, age)
    {
        this.name = name;
        this.age = age;
    }
    introduce() {console.log(`Hi, I'm ${this.name} & I'm ${this.age} years old`)};
    eat() {console.log('eating...')};
    sleep() {console.log('sleeping...')};
}

class American extends Human
{
    nationality = 'American';
    constructor(name, age, ethnicity)
    {
        super(name, age);
        this.ethnicity = ethnicity;
    }
    introduce() //will override the Human.introduce(). this is polymorphism...
    {
        console.log(`Hi, I'm ${this.name}; I'm ${this.age} years old. I'm a proud ${this.nationality}`);
    }
    eatBurger()
    {
        this.introduce();
        console.log('I love burgers. I just had one.')
    };
};

class Indian extends Human
{
    nationality = 'Indian';
    constructor(name, age, language)
    {
        super(name, age);
        this.language = language;
    }
    introduce() //will override the Human.introduce(). this is polymorphism...
    {
        console.log(`Hi, I'm ${this.name}; I'm ${this.age} years old. You should speak ${this.language}`);
    }
};


let human01 = new Human('adam', 18);
let human02 = new American('donald trump', 79, 'Germanic');
let human03 = new Indian('ashok kumar', 28, 'Marathi');

console.log(human01);
console.log(human02);
console.log(human03);

human01.introduce();
human02.introduce();
human03.introduce();