const userOne =
{
    name: 'john',
    age: 21,
    userCreatedAt: new Date()
};
userOne = {};  //illegal...
userOne.age++; //legal...


const userTwo =
{
    name: 'john',
    age: 21,
    userCreatedAt: new Date()
};
Object.freeze(userTwo);
userTwo.age++;  //illegal...


const userThree =
{
    name: 'john',
    age: 21,
};
Object.defineProperty(userThree, "userCreatedAt",
{
    value: new Date(),
    writable: false,     //cannot assign a new value...
    configurable: false, //cannot delete (indirectly redefine)...
    enumerable: true     //still shows up in Object.keys / for...in
});