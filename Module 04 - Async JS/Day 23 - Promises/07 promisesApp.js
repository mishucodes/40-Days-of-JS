//This is a program that'll show the power of promises; & how it's better than a Callback-based Async Code:
    function viewLastItem()
    {
        //get products:
        query(`https://fakestoreapi.com/products`)
        .then((response) => response[response.length - 1])  //we get the last product...
        .then((response2) => console.log(response2.id)) //just to show we got the product...
        .catch((error) => {console.log('something went wrong!')}); //error handling for anything in the code...
    }


    //Help
    function query(api, options)
    {
        return fetch(api, options)
        .then((response) => response.json())
        .catch((error) => {throw error});
        //fetch() returns a promise object...
    }
    viewLastItem();