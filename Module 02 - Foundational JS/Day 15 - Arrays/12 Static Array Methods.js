//01. Array-Like: Some values are "array-like", but not arrays. We usually get these from web-APIs (HTML Collections). It has indexed-values & a .length property, but that's about it. It's not iterable, it doesn't even have any useful methods.
//For Example:
    let arrLike = {0: 'I am', 1: 'an', 2: 'Array-Like', length: 3};
    function fn() {return arguments;}
        console.log(fn(1,2,3)); //[Arguments] {'0': 1, '1': 2, '2': 3}...

    //a) Array.isArray():
        console.log(Array.isArray(arrLike)); //false
        console.log(Array.isArray(fn(1,2,3))); //false
    //b) Array.from():
        let myArr = Array.from(arrLike);
            console.log(Array.isArray(myArr)); //true
    //c) Array.fromAsync():
        let myArrPromise = Array.fromAsync(fn(1,2,3));
            console.log(myArrPromise);
            myArrPromise.then((val) => console.log(val)); //[1,2,3]
    //d) Array.of():
        console.log(Array.of(1,2,3)); //[1,2,3]