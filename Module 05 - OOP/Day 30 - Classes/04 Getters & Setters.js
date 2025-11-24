//04. Getters & Setters: Excellent for data validation & privacy.
    class Animal
    {
        constructor(name)
        {
            this.name = name;
        }
        //getter:
        get name() {return this._name;};
        //setter:
        set name(newName)
        {
            if(!newName)
            {
                console.warn('A name must be present in order to create an animal');
                return;
            }
            this._name = newName;
        };
    }
    
    let animal00a = new Animal();
    let animal00b = new Animal('');
    let animal01 = new Animal('tiger');
    console.log(animal01); //Animal {_name: tiger}
    //Observe this:
        console.log(animal01.name); //tiger
        animal01.name = "zebra";
        console.log(animal01.name); //zebra