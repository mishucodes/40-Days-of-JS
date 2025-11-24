// Just syntactic sugar for constructor functions:
    class User
    {
        constructor(name, age)
        {
            this.name = name;
            this.age = age;
            this.method01 = function() {console.log('hello')};
        }
        method02 = function() {console.log('hello again')}; //legal, but wasteful...
        method03() {console.log('hello world')}; //idiomatic!
    }