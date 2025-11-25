//Set: It's a collection of unique elements. In JS, these elements can be of any type (like in arrays).

//01. Creating Sets:
    //01a) proper way:
        let mySet01 = new Set(['hello', 'world', 123, 123]); //array
        console.log(mySet01);
    //01b) some tinkering:
        let mySet02 = new Set('hello'); //string
        console.log(mySet02);


//02. Some useful properties & methods:
    //02a) Properties:
        console.log(mySet02.size);
    //02b) Methods:
        //02ba) .add(): strictly takes only one argument. rest are ignored:
            mySet01.add(['an', 'array']);
            mySet01.add(...['lets', 'add', 'a', 'destructured', 'array', 'of', 'strings']); //QED ibid...
            mySet01.add('string');
            console.log(mySet01);
        //02bb) .has():
            console.log(mySet01.has('string')); //true
        //02bc) .delete(): strictly takes only one argument. rest are ignored:
            mySet01.delete(123, 'string');
            console.log(mySet01);
        //02bd) .clear():
            mySet01.clear();
            console.log(mySet01);