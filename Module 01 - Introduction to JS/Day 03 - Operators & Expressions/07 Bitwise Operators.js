//In Bitwise operations, the operands are treated as 32-bit binary values.

//AND:
    console.log(0 & 1); //0
    console.log(1 & 2); //0
    console.log(2 & 3); //2
//OR:
    console.log(0 | 1); //1
    console.log(1 | 2); //3
    console.log(2 | 3); //3
//XOR:
    console.log(0 ^ 1); //1
    console.log(1 ^ 2); //3
    console.log(2 ^ 3); //1
//NOT:
    console.log(~1); //a very big number (if the value was an unsigned int) / -02
//Left-Shift:
    console.log(1 << 1); //2
    console.log(1 << 2); //4
    console.log(1 << 3); //8
//Right-Shift
    console.log(1 >> 1); //0
    console.log(1 >> 2); //0
    console.log(10 >> 1); //5
    console.log(10 >> 2); //2


//NOTE: Only numbers are numbers in JS. Chars (I mean they don't even exist) are not numbers. You can't do this:
    console.log('a' << 1); //0
    console.log('z' >> 1); //0
    //But you can do this:
    console.log(true << 1); //2
    console.log(true >> 1); //0
    console.log(false << 1); //0 (should've been 1, but idk why is it 0). JS is weird!!