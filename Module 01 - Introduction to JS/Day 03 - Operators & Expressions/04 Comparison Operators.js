//a) loose equality: automatic type conversion is enabled:
    console.log(2 == '2'); //true
//b) strict equality: automatic type conversion is disabled:
    console.log(2 === '2'); //false
    console.log(undefined === null); //false
    console.log(NaN === NaN); //false

//NOTE: Non-Primitive values are compared by reference, not value.
    let obj01 = {name: 'john'};
    let obj02 = {name: 'john'};
    console.log(obj01 == obj02); //false
    console.log(obj01 === obj02); //false

//c) loose inequality: automatic type conversion is enabled:
    console.log(2 != '2'); //false
//d) strict inequality: automatic type conversion is disabled:
    console.log(2 !== '2'); //true
    console.log(undefined !== null); //true
    console.log(NaN !== NaN); //true



//NOTE: You can;t turn off automatic type conversion in these operators:
//e) less then & greater than:
    console.log(1 < '2'); //true
    console.log(1 > '2'); //false
//f) less then & greater than / equal to:
    console.log(1 <= '1'); //true
    console.log(1 >= '1'); //true