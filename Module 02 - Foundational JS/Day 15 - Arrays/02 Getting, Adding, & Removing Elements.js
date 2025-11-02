let myArr = [1,2,3];

//01. Getting Elements:
    //a) Using an index:
        console.log(myArr[0]); //1
    //b) Using a loop:
        for(let el of myArr)
            console.log(el); //1,2,3

//02. Adding Elements:
    //a) .push()
        console.log(myArr.push(4)); //4 (i.e., myArr.length)...
            console.log(myArr); //1,2,3,4
    //b) .unshift()
        console.log(myArr.unshift(0)); //5 (ibid)...
            console.log(myArr); //0,1,2,3,4

//03. Removing Elements:
    //a) .pop()
        console.log(myArr.pop()); //4 (i.e., the last element)...
            console.log(myArr); //1,2,3
    //b) .shift()
        console.log(myArr.shift()); //0 (i.e., the first element)...
            console.log(myArr); //1,2,3