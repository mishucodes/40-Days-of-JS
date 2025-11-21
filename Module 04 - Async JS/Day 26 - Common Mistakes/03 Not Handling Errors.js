//Don't leave errors unhandled. They might cause premature program termination.

function oddEven(number)
{
    return new Promise((resolve, reject) =>
    {
        if(number % 2 === 0)
            resolve('even');
        else
            reject('odd');
    })
}

//Wrong Approach (unhandled error):
oddEven(10).then((result) => console.log(result));

//Correct Approach:
oddEven(7).then((result) => console.log(result)).catch((err) => console.log('Error:', err));


//more lines of code...
console.log('JS might not execute certain code due to the program got prematurely terminated thanks to an unhandled error...');