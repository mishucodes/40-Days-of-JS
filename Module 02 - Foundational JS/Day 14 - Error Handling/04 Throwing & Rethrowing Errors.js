function validateForm(form)
{
    try
    {

        if(!form.username)
            throw new Error('no username found'); //throwing an error...
        if(!form.email.includes('@'))
            throw new Error('invalid email address'); //throwing an error...
    }
    catch(error)
    {
        console.log(error.message);
        //here we can try to validate the form by doing something on the function level. But if we can't we can:
        throw error; //this is called 'rethrowing' an error...
    }
}

let myForm = {username: 'johndoe', email: 'johndoe#email.com'};
try
{
    validateForm(myForm);
}
catch(error)
{
    if(error.message.includes('username'))
        //we can try getting a new username from the user here...
        console.log('enter a username:');
    if(error.message.includes('email'))
        //we can try getting a new email address from the user here...
        console.log('enter a valid email address:');
}