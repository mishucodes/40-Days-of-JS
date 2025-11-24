class Car
{
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
car01.start();
car01.stop();