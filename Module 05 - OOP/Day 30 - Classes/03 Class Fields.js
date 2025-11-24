//03. Class Fields:
    class Car
    {
        vehicleType =  'four-wheeler';
        licenseRequired = true;
        insuranceRequired = true;
        noObjectionCertificateRequired = false;
        dateCreated = new Date();
        //syntactic sugar for constructor function. good for defaults!
        constructor(brand, model, color, registered)
        {
            this.brand = brand;
            this.model = model;
            this.color = color;
            this.registered= registered;
        }
    }
    let car01 = new Car('nissan', 2000, 'red', false);
    console.log('About Car01:', car01);