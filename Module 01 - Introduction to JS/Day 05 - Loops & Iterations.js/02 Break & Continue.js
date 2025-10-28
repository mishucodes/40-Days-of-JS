//01. break: exits the current loop. For Example:
    //a) printing 1-4:
        for(let i = 1; /*nothing here*/ ;i++)
        {
            if(i == 5)
                break;
            console.log(i);
        }
console.log()
    //b) printing 1-5:
        for(let i = 1; /*nothing here*/ ;i++)
        {
            console.log(i);
            if(i == 5)
                break;
        }

console.log();

//02. continue: skips the execution of further code in the block & moves to next iteration. For Example:
    for(let i = 0; i < 5; console.log('incrementing i..'), i++, console.log('i incremented..'))
    {
        if(i == 2)
            continue;
        console.log(i);
    }