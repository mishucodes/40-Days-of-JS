class Car
{
    //private values:
    #currentSpeed = 0;
    #unitSystem = 'metric';
    #maxSpeed = 200; //in metric...
    //constructor:
    constructor(brand, model, version)
    {
        this.brand = brand;
        this.model = model;
        this.version = version;
    }
    //public methods:
    start()
    {
        if(this.#checkFuel() && this.#runSafetyTests())
            this.#startEngine();
    }
    stop()
    {
        this.#turnOffEngine();
        this.#turnOffFuelSupply();
        this.#turnOffGPS();
    }
    accelerate() //See the logic of this function. We would not want to expose this to the user. He might jailbreak!
    {
        if(this.#unitSystem === 'metric')
            if(this.#currentSpeed < this.getMaxSpeed())
                this.#currentSpeed += 100;
        else if(this.#unitSystem === 'imperial')
            if(this.#currentSpeed < (this.getMaxSpeed() * 0.621371))
                this.#currentSpeed += 100;
        console.log('current speed:', this.#currentSpeed);
    }
    //private methods:
    #checkFuel() {return true};
    #runSafetyTests() {return true};
    #startEngine() {console.log('starting engine...')};
    #turnOffEngine() {console.log('turning off engine...')};
    #turnOffFuelSupply() {console.log('turning off fuel supply...')};
    #turnOffGPS() {console.log('turning off GPS...')};
    //public method, but not useful to user:
    getMaxSpeed() {return this.#maxSpeed};
}


class SportsCar extends Car
{
    #maxSpeed = 400;
    getMaxSpeed() {return this.#maxSpeed};
}



//Making a new car:
let car01 = new Car('Toyota', 'Camry', 2025);
car01.accelerate();
car01.accelerate();
car01.accelerate();

let car02 = new SportsCar('Mitsubishi', 'Fast', 1990);
car02.accelerate();
car02.accelerate();
car02.accelerate();
car02.accelerate();
car02.accelerate();