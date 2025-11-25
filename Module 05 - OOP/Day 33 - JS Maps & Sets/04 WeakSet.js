//Exactly the same as WeakMap, i.e.,
    //01. only objects/arrays/fns as elements. No Primitives.
    //02. garbage collected
    //03. fewer methods than normal set, i.e., add(), has(), delete()...
    //NOTE: WeakSets are used to make memory-sane applications. Imagine am set of usersCurrentlyOnline. You keep only those users in a weakSet that are actually active right now.


let usersCurrentlyOnline = new WeakSet();

let user01 = {name: 'john'};
let user02 = {name: 'bob'};
let user03 = {name: 'harry'};

usersCurrentlyOnline.add(user01);
usersCurrentlyOnline.add(user02);
usersCurrentlyOnline.add(user03);

console.log(usersCurrentlyOnline.has(user01));
user01 = {name: 'stacy'};
console.log(usersCurrentlyOnline.has(user01)); //since john is offline...