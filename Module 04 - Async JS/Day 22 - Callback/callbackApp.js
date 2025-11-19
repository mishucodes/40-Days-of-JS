//This is a program that'll show the power & the problems with a Callback-based Async Code:
placeOrder('chocolate', 'kit-kat');


function placeOrder(type, name)
{
    //get products:
    query(`https://fakestoreapi.com/products`, (result, error) =>
        {
            //imagine that this one calls some other API on the basis of the result of the outer fn call...
            query(`https://fakestoreapi.com/products`, (result, error) =>
            {
                //same here...
                query(`https://fakestoreapi.com/products`, (result, error) =>
                {
                    //ad infinitum...
                    //This is what is known as "CALLBACK HELL".
                    //It's basically a case where in order to achieve a certain task (order a certain pizza), we we have to call a lot of different functions in a particular order (checking pizzas, checking price, checking payments, & many more things). Not to mention that every step is contingent upon the result of the previous one.
                })
            })
        });
}


function query(api, callback, options)
{
    fetch(api, options)
    .then((response) => response.json())
    .then((json) => callback(json));
}