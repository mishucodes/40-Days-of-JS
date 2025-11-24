class Car
{
    //private values:
    #currentSpeed = 0;
    #unitSystem = 'metric';
    #maxSpeed = 180; //in metric...
    //constructor:
    constructor(brand, model, version)
    {
        this.brand = brand;
        this.model = model;
        this.version = version;
    }
    //public methods:
    start()
    {   //calling private methods:
        if(this.#checkFuel() && this.#runSafetyTests())
            this.#startEngine();
    }
    stop()
    {   //calling private methods:
        this.#turnOffEngine();
        this.#turnOffFuelSupply();
        this.#turnOffGPS();
    }
    accelerate() //See the logic of this function. We would not want to expose this to the user. He might jailbreak!
    {
        if(this.#unitSystem === 'metric')
            if(this.#currentSpeed < this.#maxSpeed)
                this.#currentSpeed++;
        else if(this.#unitSystem === 'imperial')
            if(this.#currentSpeed < (this.#maxSpeed * 0.621371))
                this.#currentSpeed++;
        console.log('current speed:', this.#currentSpeed);
    }
    //private methods:
    #checkFuel() {return true};
    #runSafetyTests() {return true};
    #startEngine() {console.log('starting engine...')};
    #turnOffEngine() {console.log('turning off engine...')};
    #turnOffFuelSupply() {console.log('turning off fuel supply...')};
    #turnOffGPS() {console.log('turning off GPS...')};
}
//Making a new car:
let car01 = new Car('Toyota', 'Camry', 2025);
car01.accelerate();