//Some Notes on Logical Operators:
    //a) They're applied on boolean values (mostly).
    //b) They might not always return boolean values.
    //c) They short-circuit.
    //d) "Falsy" means: false, 0, -0, 0n, '', null, undefined, NaN.
    //e) "Truthy" means all else.


//01. AND: It returns the first falsy value, or the last value if all are truthy:
    console.log(1 < 2 && 1 < 3); // true
    console.log(true && "hello"); // "hello"
    console.log(0 && "hello"); // 0


//02. OR: It returns the first truthy value, or the last value if all are falsy:
    console.log(1 || 2); // 1   (first is truthy)
    console.log(0 || 2); // 2   (first is falsy)
    console.log('' || 'default'); // 'default'
    console.log(false || 0); // 0   (0 is falsy, but it’s the last one)
    console.log(0 || false); // false


//03. Nullish Coalescing Operator: Similar to OR, but only treats `null` and `undefined` as "falsy"/"nullish":
    console.log(0 ?? 42); // 0 (0 is NOT nullish)
    console.log(false ?? true); // false (false is NOT nullish)
    console.log('' ?? true); // '' ('' is NOT nullish)
    console.log(null ?? 'x'); // 'x' (null IS nullish)
    console.log(undefined ?? 'y'); // 'y' (undefined IS nullish)


//04. NOT: This operator inverts (flips) the truthiness of a value.
    //a) Converts the value to boolean (using JS truthy/falsy rules).
    //b) Returns the opposite boolean value.
        console.log(!true); // false
        console.log(!false); // true
        console.log(!0); // true (0 is falsy)
        console.log(!1); // false (1 is truthy)
        console.log(!"hello"); // false (non-empty string is truthy)
        console.log(!""); // true (empty string is falsy)
        console.log(!null); // true (null is falsy)
        console.log(!undefined); // true (undefined is falsy)