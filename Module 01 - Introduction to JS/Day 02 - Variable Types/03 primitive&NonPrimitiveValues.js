//There are two categories of values (data) in JS:
//01. Primitive: Number, BigInt, String, Boolean, Null, Undefined, Symbol.
//02. Non-Primitive: Object, Array, Function, Date, RegExp, Error, Map, Set, WeakMap, WeakSet, Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array, BigInt64Array, BigUint64Array, ArrayBuffer, DataView, Promise, Proxy, Reflect, JSON, Math.
// - Just making sure lists in these notes are exhaustive, wherever possible.


//Now the Important thing.
//a) When we assign a primitive variable to another:
let x = 1;
let y = x; //'x' is "passed by value" here, i.e., a copy of the value of 'x' is assigned to 'y'. whatever happens to 'x' after this assignment will not affect 'y'.

//b) But when we assign a non-primitive:
let user = {name: 'john doe', age: 21};
let userCopy = user;
console.log(userCopy);
user.age = 22;
console.log(userCopy); //we never changed the age of 'userCopy'. when we assign a non-primitive to a variable, its value is not copied & pasted there. rather, it's "passed by reference", i.e., it's address in memory is copied & passed to the new variable. now both variables point to (& can manipulate) the same value in memory.



//Additional Notes on Primitive & Non-Primitive Values:
    //a) There are 2 kinds of memories in JS: 'stack' & 'heap'.
    //b) Primitives are stored in the stack.
    //c) Non-Primitives are stored in the heap.
    //d) Every value has a unique address (to which the variable points).
    //e) 