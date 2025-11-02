let abc = [1,2,3], abcdef = [1,2,3,4,5,6];

    //a) getting length:
        console.log(abc.length); //3
        console.log(abcdef.length); //6
    //b) changing length:
        abc.length = 2;
            console.log(abc); //[1,2]...
        abc.length = 5;
            console.log(abc); //[1,2, <3 empty items>]...
        //ba) An array's maximum length could be: (2^32)-1 = 4294967295. For Example:
            // abc.length = 4294967296;
        //bb) An array's length can't be a negative number:
            // abc.length = -1;
    //c) emptying an array:
        abc.length = 0;
            console.log(abc); //[]