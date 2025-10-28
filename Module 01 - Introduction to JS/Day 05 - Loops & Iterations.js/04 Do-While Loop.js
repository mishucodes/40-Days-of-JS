//NOTE: We use this kind of loop when we know that we have to iterate over some code at-least once. For Example:

    let username;
    do
    {
        username = askUsername();
    }
    while(typeof username != 'string')

    //helper function:
    function askUsername()
    {
        return 'john';
    }