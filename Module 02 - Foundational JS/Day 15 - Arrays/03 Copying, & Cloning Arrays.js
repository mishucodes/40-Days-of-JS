let abc = [1,2,3], def = [4,5,6], ghi = [7,8,9];
let nestedArr = [[1,2,3]];

    //a) .slice():
        let abc2 = abc.slice();
            console.log(abc2); //1,2,3
            console.log(abc === abc2); //false
    //b) spread operator:
        let abc3 = [...abc];
            console.log(abc3); //[1,2,3]
            console.log(abc === abc3); //false
    //c) .concat():
        let abcdefghi = abc.concat(def,ghi,10,nestedArr);
            console.log(abcdefghi); //[1,2,3,4,5,6,7,8,9,10,[1,2,3]]