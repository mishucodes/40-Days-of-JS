//Take a look at this:

welcomeUser();
function welcomeUser(name = 'guest')
{
    console.log('hello', name);
    console.log(getSalutation());
}
function getSalutation()
{
    return 'welcome to our world';
}

//EXPLANATION: Unlike variables, functions (created with the 'function' keyword) get not just declared, but also defined during the creation phase of the GEC. Hence, invoking them during the execution phase of the same does not get us any error(s).
//This is called 'hoisting' btw. It literally means "to raise something" (think "hoisting a flag"). In programming, it's a metaphor, obviously. It is to make you imagine that all the function definitions/declarations have been somehow magically pulled upto the top in order to avoid getting any 'reference errors'. This is something we do in languages like C.