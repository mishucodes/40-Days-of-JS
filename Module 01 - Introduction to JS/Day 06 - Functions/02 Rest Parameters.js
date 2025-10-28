//01. Rest Parameters: A way to pass an unspecified numbers of arguments to a function. For Example:
    function welcomeTeam(manager, hr, ...staff)
    {
        console.log('this is our team:');
        console.log('manager:', manager);
        console.log('hr:', hr);
        for(let i = 0; i < staff.length; i++)
            console.log('staff:', staff[i]);
    }
    let manager = 'john', hr = 'harry';
    let employee01 = 'bob', employee02 = 'david', employee03 = 'jack';
    let retainer01 = 'tom', retainer02 = 'ben', retainer03 = 'max';
    welcomeTeam(manager, hr, employee01, employee02, employee03, retainer01, retainer02, retainer03);

//EXPLANATION: What happened is that all the rest of the arguments got bundled in an array named 'staff'.