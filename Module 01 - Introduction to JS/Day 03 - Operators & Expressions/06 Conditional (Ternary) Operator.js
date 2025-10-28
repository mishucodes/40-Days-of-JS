let voterAge = 20;
console.log(voterAge<18? 'not eligible': 'eligible');
console.log(voterAge? 'voter exists': 'voter does not exist');

console.log(false? 'false is truthy': 'false is falsy');
console.log(0? '0 is truthy': '0 is falsy');
console.log(-0? '-0 is truthy': '-0 is falsy');
console.log(0n? '0n is truthy': '0n is falsy');
console.log(''? 'an-empty-string is truthy': 'an-empty-string is falsy');
console.log(null? 'null is truthy': 'null is falsy');
console.log(undefined? 'undefined is truthy': 'undefined is falsy');
console.log(NaN? 'NaN is truthy': 'NaN is falsy');