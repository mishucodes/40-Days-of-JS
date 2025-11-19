//This is a program that'll show the power of async-await; & how it's better than a .then()-based code:
async function viewLastItem()
{
    try
    {
        let response = await query(`https://fakestoreapi.com/products`); //getting products...
        let lastItem = response[response.length - 1]; //doing something with the response we got above...
        console.log(lastItem.id);
    }
    catch(error)
    {
        console.log('something went wrong!');  //error handling for anything wrong in the entire code...
    }
}
viewLastItem();

//helper function:
    function query(api, options)
    {
        return fetch(api, options)
        .then((response) => response.json())
        .catch((error) => {throw error});
    } 