let abc = [1,2,3], def = [4,5,6], ghi = [7,8,9];
let xyz = ['x','y','z'];
let nestedArr = [[1,2,3]];
//Array Methods for creating, removing, updating, & accessing the arrays:

    //a) .concat():
        let abcdefghi = abc.concat(def,ghi,10,nestedArr);
            console.log(abcdefghi); //[1,2,3,4,5,6,7,8,9,10,[1,2,3]]
    //b) .join():
        console.log(abc.join()); //1,2,3 (string)...
        console.log(abc.join('#')); //1#2#3 (string)...
        console.log([].join()); //"" (empty string)...
        console.log(abc.join(def)); //14,5,624,5,63 (look at the EXPLANATION below)...
        console.log(abc.join(def,ghi)); //14,5,624,5,63 (second argument is ignored)...
        //EXPLANATION: .join() takes an optional argument of type string (fallback = ','). Then it:
            //ba) converts all elements to string values,
            //bb) concatenates all these values, &
            //bc) uses the optional argument as a 'buffer'/'separator' b/w the concatenated values...
            //For Example:
                //-> [1,2,3].join([4,5,6]);
                //-> values inside [1,2,3] would be converted to type string...
                //-> values inside [4,5,6] would be converted to type string...
                //-> values inside [1,2,3] would be concatenated with ibid in between (look below):
                //-> "1" + "4,5,6" + "2" + "4,5,6" + "3";
    //c) .fill():
        let myArr = new Array(3);
        myArr.fill('*');
            console.log(myArr); //[*,*,*]
        myArr.length = 5;
        myArr.fill('#', 3,5); //3 is inclusive, 5 is exclusive
            console.log(myArr); //[*,*,*,#,#]
        myArr.length = 6;
        myArr.fill('#', 5,5);
            console.log(myArr); //[*,*,*,#,#,<1 empty item>]
    //d) .includes():
        console.log(abc.includes(1)); //true
        console.log(abc.includes(4)); //false
        console.log(abc.includes(2+2)); //false
        console.log(abc.includes('1')); //false (strict equality)
        console.log(xyz.includes('X')); //false (case sensitive)
    //e) .indexOf():
        console.log(abc.indexOf(1)); //0
        console.log(abc.indexOf(4)); //-1
        console.log(myArr.indexOf('*')); //0 (gets the first occurrence)
        console.log(abc.indexOf('1')); //-1 (strict equality)
        console.log(xyz.indexOf('X')); //-1 (case sensitive)
    //f) .lastIndexOf(): ibid, but starts the search from the end:
        console.log(abc.lastIndexOf(1)); //0
        console.log(abc.lastIndexOf(4)); //-1
        console.log(myArr.lastIndexOf('*')); //2 (gets the last occurrence)
        console.log(abc.lastIndexOf('1')); //-1 (strict equality)
        console.log(xyz.lastIndexOf('X')); //-1 (case sensitive)
    //g) .reverse():
        let cba = abc.reverse();
            console.log(abc); //[3,2,1] (updates the original array)
            console.log(cba); //[3,2,1] (returns the new array)
                    // abc.reverse(); //restoring for later use...
    //h) .sort(): converts the element types to string, & sorts them in the ascending order by default (lexicographic (UTF-16)):
        let ABC = abc.sort();
            console.log(abc); // [1,2,3] (updates the original array)
            console.log(ABC); // [1,2,3] (returns the new array)
        console.log(ABC.sort((el1, el2) => 
            {
                if(el1 === el2)
                    return 0; //no change
                else if(el1 > el2)
                    return -1; //el1 goes before el2
                else
                    return 1; //el2 goes before el1
            })); //mutates ABC in descending order...
        console.log([1,2,3,10].sort()); //[1,10,2,3] (because strings, not numbers)
        console.log([1,2,3,10].sort((el1, el2) => {el1 === el2? 0: el1 > el2? 1: -1;})); //[1,2,3,10]
            //EXPLANATION: Our own logic does not do any type-conversion.
    //i) .splice(startAtElement, deleteCount, addItem01, addItem02, addItem03, etc.):
        console.log(ABC); //[3,2,1]
        let CDE = ABC.splice(1,2,4,5);
            console.log(CDE); //[2,1] (returns an array full of deleted elements)
            console.log(ABC); //[3,4,5] (mutates the original array)
    //j) .at():
        abc = [1,2,3];
        console.log(abc.at(0)); //1
        console.log(abc.at(-1)); //3
    //k) .copyWithin(targetToPasteAt, startCopyingFromIndexInclusive, endCopyingAtIndexExclusive):
        let myArr2 = [1,2,3,4,5, 1,2,5];
        let myArr3 = myArr2.copyWithin(7, 2,3); //replace the last 5 with 3
            console.log(myArr2); //[1,2,3,4,5, 1,2,3]
            console.log(myArr3); //[1,2,3,4,5, 1,2,3]
            //NOTE: Sadly, we can't change the length of the array. Meaning we can't cut [3,4,5] and paste it in place of 5. We can only place one element here, because starting from last '5' there's only space for one element there.
    //l) .flat():
        let nestedArr2 = [[[1.11, 1.12, 1.13],[1.21, 1.22, 1.23],[1.31, 1.32, 1.33]], [[2.11, 2.12, 2.13],[2.21, 2.22, 2.23]]];
        let flatArr = nestedArr2.flat();
            console.log(nestedArr2); //unchanged
            console.log(flatArr); //flattened upto one dimension
        let flatArr2 = nestedArr2.flat(2);
            console.log(flatArr2); //flattened upto 2 dimensions
        //NOTE: We can also do -> nestedArr2.flat(Infinity);