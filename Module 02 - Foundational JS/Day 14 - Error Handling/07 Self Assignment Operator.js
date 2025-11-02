//This is an interesting operator. Let's see it in action:
    let x;
    let y = 10;

    x ?= 100;
    y ?= 200;

    console.log(x);
    console.log(y);

//CAVEAT: It's just a proposal as of now. ECMA might legalise this soon.