class Engine
{
    start() {console.log('starting engine...');};
    stop() {console.log('stopping engine...');};
    recalibrate() {console.log('recalibrating engine...');};
}
class InternationalID
{
    ID = new Date();
}

class Car
{
    //private values:
    #currentSpeed = 0;
    #unitSystem = 'metric';
    #maxSpeed = 200; //in metric...
    #engine = new Engine(); //composition in action!
    //constructor:
    constructor(brand, model, version)
    {
        this.brand = brand;
        this.model = model;
        this.version = version;
        this.id = new InternationalID().ID; //composition in action!
    }
    //public methods:
    start()
    {   //calling private methods:
        if(this.#checkFuel() && this.#runSafetyTests())
            this.#engine.start();
    }
    stop()
    {   //calling private methods:
        this.#turnOffEngine();
        this.#turnOffFuelSupply();
        this.#turnOffGPS();
    }
    accelerate() //polymorphic method...
    {
        if(this.#unitSystem === 'metric')
            if(this.#currentSpeed < this.getMaxSpeed())
                this.#currentSpeed += 100;
        else if(this.#unitSystem === 'imperial')
            if(this.#currentSpeed < (this.getMaxSpeed() * 0.621371))
                this.#currentSpeed += 100;
        console.log('current speed:', this.#currentSpeed);
    }
    refuel() {console.log('refuelling with fossils...');};

    //private methods:
    #checkFuel() {return true};
    #runSafetyTests() {return true};
    #turnOffEngine() {console.log('turning off engine...')};
    #turnOffFuelSupply() {console.log('turning off fuel supply...')};
    #turnOffGPS() {console.log('turning off GPS...')};
    //public method, but not useful to user:
    getMaxSpeed() {return this.#maxSpeed};
}

class ElectricCar extends Car
{
    #maxSpeed = 300;
    getMaxSpeed() {return this.#maxSpeed};
    refuel() {console.log('still refuelling with fossils, but indirectly...');}; //polymorphism...
}



//Making a new car:
let car01 = new Car('Toyota', 'Camry', 2025);
let car02 = new ElectricCar('Tesla', 'S', 2020);
car01.start();
car02.start();
console.log(car01.id);