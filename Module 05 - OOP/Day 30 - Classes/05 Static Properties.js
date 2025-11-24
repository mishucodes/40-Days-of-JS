//05. Static Properties: Properties that belong to the class & not its instances (saves memory):
    class User
    {
        constructor(name, email)
        {
            this.name = name;
            this.email = email;
        }
        changeName(newName) {this.name = newName}; //the method is expected to be called on an object...
        
        static isEmailValid(email) //the method is expected to be called on the class itself...
        {
            if(email.includes('@') && email.includes('.'))
                return true;
            else
                return false;
        };
        static newGuest() //static factory method...
        {
            return new User('guest', 'guest@email.com')
        }
    }
    
    console.log(User.isEmailValid('fugazi@scam.in')); //true
    let user01 = new User('john', 'johndoe@email.com');
    console.log(user01); //User{...}
    let guest01 = User.newGuest();
    console.log(guest01); //User{...}