//03. PROMISE CHAINING:
    //SOME RULES:
    //a) Every promise has a ".then()" & a ".catch()" method; but only the rejected ones run a ".catch()" method.
    //b) You can do only 03 things from a ".then()" method:
            //ba) return a promise object.
            //bb) throw an error object.
            //bc) return any other value (still wrapped inside a promise).
    //c) You can do only 2 things from a ".catch()" method:
            //ca) return a promise object.
            //cb) return any other value (still wrapped inside a promise).
    //d) Just like ".then()" & ".catch()", ".finally()" also returns a promise. Specifically:
            //da) by default it passes through the previous promise’s settled value or error unchanged.
            //db) if the .finally() callback itself returns a promise, the chain waits for that promise to settle.
    //e) You can chain multiple .then() & .catch() methods. Only the first handler that matches the state runs.
    //f) Usually, the .catch() & .finally() are put at the end of the chain, but you can also place them anywhere in the same.
    //g) The .finally() method does not receive any arguments.
    //h) The .finally() method does not affect the value passed to the next .then() & .catch() methods.

    //For Example:
        let p = new Promise((resolve, reject) => 
            {
                let user = {name: 'John', surname: 'Doe', age: 25};
                resolve(user);
            });

        //a) returning a promise object:
            p.then((user) => 
                {
                    console.log('User:', user.name);
                    return new Promise((resolve, reject) => resolve(user.surname));
                })
                .then((surname) => console.log('Surname:', surname)) //returns a promise with an undefined value
                .then((arg) => console.log('then() chain ended with:', arg));
        //b) throwing an error object:
            p.then((user) => 
                {
                    console.log('User Age:', user.age);
                    throw new Error('Something went wrong!');
                })
                .catch((err) => console.log('Error:', err.message)) //returns a promise with an undefined value
                .then((arg) => console.log('catch() chain ended with:', arg));
        //c) returning a normal variable:
            p.then((user) => 
                {
                    console.log('User:', user.name);
                    return user.age;
                })
                .then((age) => console.log('Age:', age)) //returns a promise with an undefined value
                .then((arg) => console.log('then() chain ended with:', arg));

        //d) complex example:
            let promise404 = new Promise((resolve, reject) => reject(new Error('404 Not Found')));
            promise404.then((arg) =>
                {
                    if(typeof arg === "Error") //if I get an error, I throw it away...
                        throw err;
                    else
                        return arg; //else I return the value...
                })
                .then((arg) => 
                    {
                        console.log('d:', arg); //if all goes well, I print the value & do something else...
                        return 'some new data';
                    })
                    .then((newData) => console.log('d:', newData)) //do something else with the new data...
                    .catch((err) => console.log('d:', err.message)); //I can print the error 404 anytime...

        //e) using .finally():
            p.then((user) => 
                {
                    console.log('User:', user.name);
                    return user.age;
                })
                .then((age) => age)
                .finally(() => console.log('e: Though I not \'receive\' anything, I sure pass it forward...'))
                .then((age) => console.log('See for yourself:', age));