//We might need to deal with multiple promises in a for loop.
//However, this approach must be taken with care, otherwise it might cause some unintended consequences.

//For Example:
let idArray = [1, 2, 3, 4, 5];
let apiAddress = 'https://jsonplaceholder.typicode.com/users/';



//01. Looping with traditional promise interface:
    function loopFetches(idArray)
    {
        for(let i = 0; i < idArray.length; i++)
        {
            console.log('Fetching UserID:', idArray[i]);
            let response = fetch(apiAddress + idArray[i]);
            response.then((response) => {response.json().then((data) => {console.log('userID', data.id, ':', data.name)})});
            //here the users will be printed in a 'random' order...
        }
    }
    // loopFetches(idArray);


//02. Looping using Async-Await:
    async function asyncFetches(idArray)
    {
        for(let i = 0; i < idArray.length; i++)
        {
            console.log('Fetching UserID:', idArray[i]);
            let response = await fetch(apiAddress + idArray[i]);
            data = await response.json();
            console.log('userID', data.id, ':', data.name);
            //this approach works as intended...
        }
    }
    // asyncFetches(idArray);


//03. Using something better than Loops:
    async function promiseMethodsBasedFetches(idArray)
    {
        let promisesArray = [];
        idArray.forEach((id) => promisesArray.push(fetch(apiAddress+id)));

        let responses = await Promise.allSettled(promisesArray); //let's settle all the promises once...
        let data = await Promise.allSettled(responses.map((response) => response.value.json())); //get data for all users...
        data.forEach((user) => console.log('userID', user.value.id + ':', user.value.name)); //this is what we care about!
        //This approach is very good. Asynchronous - but still predictable. Especially the part we actually care about...
    }
    promiseMethodsBasedFetches(idArray);