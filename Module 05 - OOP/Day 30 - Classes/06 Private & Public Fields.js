//06. Public & Private Fields (Abstraction & Encapsulation in OOP):
    //a) Public Fields: Properties & Methods accessible to the user.
    //b) Private Fields: Properties & Methods not accessible to the user.

//For Example:
    class WashingMachine
    {
        //public fields:
        brand = 'Generic';
        model = 'Basic';
        //private fields:
        #powerStatus = false;
        constructor(brand, model)
        {
            this.brand = brand;
            this.model = model;
        }

        //public methods:
        start()
        {
            //updating a private field:
            this.#powerStatus = true;
            //calling private methods:
            this.#checkWater();
            this.#fillWater();
            this.#wash();
            this.#spin();
            this.#dry();
            //calling a public method:
            this.stop();
        }
        stop()
        {
            //calling private methods:
            this.#turnOffWater();
            this.#turnOffHeater();
            this.#turnOffSpin();
            //updating a private field:
            this.#powerStatus = false;
        }

        //private methods:
        #checkWater() {console.log('checking water...');}
        #fillWater() {console.log('filling water...');}
        #wash() {console.log('washing...');}
        #spin() {console.log('spinning...');}
        #dry() {console.log('drying...');}
        #turnOffWater() {console.log('turning off water...');}
        #turnOffHeater() {console.log('turning off heater...');}
        #turnOffSpin() {console.log('turning off spin...');}
    }

    let machine01 = new WashingMachine('LG', 2020);
    console.log(machine01); //WashingMachine {...}
    machine01.start();