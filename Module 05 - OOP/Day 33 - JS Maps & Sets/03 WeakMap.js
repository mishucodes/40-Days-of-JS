//There are 3 major difference b/w Map & WeakMap:
    //01. The keys of a weakMap can only be objects/arrays/functions. Nothing else.
    //02. The keys are held 'weakly' by a WeakMap, i.e., if there are no binding(s) pointing at the key's object - other than the key itself - the Garbage Collector may claim the same.
        //In simpler words, the key of a weakMap pointing to an object is irrelevant for/invisible to the Garbage Collector.
    //03. WeakMap has only 4 useful methods: set(), get(), has(), delete().

//Normal Map:
    let user = {name: 'john', age: 21};
    let myMap = new Map();
    myMap.set(user, true);
    user = null;
    console.log(myMap);

//Weak Map:
    user = {name: 'john', age: 21};
    let myWeakMap = new WeakMap();
    myWeakMap.set(user, true);
    console.log(myWeakMap); //<items unknown> bcz JS hides the contents for some reason...
    console.log(myWeakMap.get(user)); //works!
    user = null;
    console.log(myWeakMap.get(user)); //garbage collected! (hopefully)...

//NOTE: WeakMaps are used to make memory-sane applications. Imagine a dynamic DOM. You keep only those DOM elements in a weakMap that are active right now.