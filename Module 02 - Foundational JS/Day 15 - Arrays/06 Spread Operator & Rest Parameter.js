//01. Spread Operator:
    let abc = [1,2,3];
    let def = [4,5,6];
    let ghi = [7,8,9];

    let concat = new Array(abc, def, ghi);
        console.log(concat); //[[ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ]] (WRONG)...
    let concatAgain = new Array(...abc, ...def, ...ghi);
        console.log(concatAgain); //[1,2,3,4,5,6,7,8,9] (CORRECT)...

//EXPLANATION: Essentially, the moment we put "..." before any array value, the array breaks-up into individual values.
    //NOTE: Don't expect a nested array to be broken into individual values. It only works on one level. For Example:
        console.log(...concat); //[ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ]...



//02. Rest Parameters:
    //a) Using in functions:
        function printFamily(husband, wife, ...children)
        {
            console.log(husband);
            console.log(wife);
            for(child of children)
                console.log(child);
        }
        printFamily('adam', 'eve', 'cain', 'abel', 'seth');

    //b) Using in Destructuring:
        let [father, mother, ...children] = ['adam', 'eve', 'cain', 'abel', 'seth'];
            console.log(father);
            console.log(mother);
            console.log(children);