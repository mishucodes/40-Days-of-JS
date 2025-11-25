let mySet = new Set([10,20,30,40,50]);

//00) Iterating the set itself:
    //00a) for-of:
        for(let el of mySet)
        {
            console.log(el);
        }
    //00b) .forEach():
        mySet.forEach(el => console.log(el));
        
//01) .values():
    let mySetIterator01 = mySet.values();
    console.log(mySetIterator01);
    //01a) .forEach():
        mySetIterator01.forEach((value, index) => console.log(index, ':', value));
    //01b) for-of:
        for(let element of mySetIterator01)
            console.log(element);

//02) .entries():
    let mySetIterator02 = mySet.entries();
    console.log(mySetIterator02); //weird...
    //02a) .forEach():
        mySetIterator02.forEach((value, index) => console.log(index, ':', value));
    //02b) for-of:
        for(let element of mySetIterator02)
            console.log(element);


//IMPORTANT NOTES:
    //a) Iterators in JS are "consumables", i.e.,
    //b) They produce values one by one as you iterate.
    //c) Once consumed, they cannot be rewound or reused.
    //d) This is why if .forEach() drains the iterator first, the for-of loop has nothing left to iterate (and vice versa).
    //e) To iterate again, you must create a fresh iterator (e.g., call mySet.values() again).