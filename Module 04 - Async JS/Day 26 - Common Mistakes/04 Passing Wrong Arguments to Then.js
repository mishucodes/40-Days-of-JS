let getHello = Promise.resolve('hello');
//We pass a non-function value to a .then():
    getHello.then('will be ignored').then((value) => console.log(value));
    //-> .then() must return a promise. the previous promise 'falls through' in this case.