//01. Defining a Class:
class User
{
    constructor(name, age, email)
    {
        //these 'this' inside the constructor function refer to the "new User" being created (except the one inside method2):
        let fullName = name + ' ' + 'doe'; //just to demonstrate why 'this' is not redundant here...
        this.name = fullName;
        this.age = age;
        this.email = email;
        //object methods:
        this.method1 = function() {console.log("name as defined in the same object I exist:", name)};
        this.method2 = function() {console.log("name as defined in the object I'm called upon:", this.name)};
    }
    //class methods:
    isEligibleForVoting() {return this.age > 17? true: false};
    isEligibleForElections() {return this.age > 24? true: false};
    isEligibleForCabinet() {return this.age > 34? true: false};
}
//New User:
let userOne = new User('john', 21, 'johndoe@email.com');
//Some Facts:
    console.log('User is a:', typeof User); //function
    console.log('userOne is an:', typeof userOne); //object
//Peeking in:
    console.log('object:', userOne); //object: User {...}
    console.log('name:', userOne.name); //john doe
//Using Objects:
    console.log('Eligible for Voting:', userOne.isEligibleForVoting()); //true
    console.log('Eligible for Cabinet:', userOne.isEligibleForCabinet()); //false
    userOne.method1(); //john (using closures)
    userOne.method2(); //john doe (using dynamic binding of 'this')
    let userTwo = new User("harry", 18, "harry@company.com");
    userTwo.method1(); //harry (using closures)
    userTwo.method2(); //harry doe (using dynamic binding of 'this')

//NOTE: We could also have done: "let User = class {...};" for creating a class...