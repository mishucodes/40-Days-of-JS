//This is how things should be properly done:

let users =
{
    'john@company.com': {name: 'john', role: 'hr'},
    'david@company.com': {name: 'david', role: 'pr'}
};

function getData(email)
{
    if(users[email])
        console.log('yes');
    else
        return new Promise((resolve, reject) =>
            {
                console.log('creating user');
                //some async code to create the user...
            });
}
getData('john@company.com');