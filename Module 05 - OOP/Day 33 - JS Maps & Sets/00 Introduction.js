//Some problems with Object data-type:
    //a) the key can only be a string/symbol.
    //b) the object does not keep track of the order to key-value pairs, i.e., if I define an object like this:
        let obj = {a: 1, b: 2}; //there is no guarantee that this order of key-value pairs will be preserved...
    //c) JS objects lack certain useful methods/properties. getting the size of one, for instance, is very difficult.

//Some problems with Arrays:
    //a) does not help us manage duplicate elements (think of a 'set' from set theory in maths).