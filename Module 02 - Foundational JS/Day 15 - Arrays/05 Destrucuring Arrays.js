let myArr = [1,2,3,4,5,'six',undefined];
let nestedArr = [[1,2,3], [4,5,6], [7,8,9], [10,11,12]];

//01. Destructuring Arrays:
    let [one,two,three, ,five, six = 6, seven = 7, eight = 8] = myArr;
        console.log(one);
        console.log(two);
        console.log(three);
        console.log(five);
        console.log(six);
        console.log(seven);
        console.log(eight);
//NOTE: Notice that we have done quite a lot up there. We have:
    //a) skipped a value (four)...
    //b) added a default value to a binding (six, seven, & eight), which means that if the value is undefined/missing, there's a a fallback value for the binding...

//02. Destructuring Nested Arrays:
    let [[first,,third], ,[,eighth,ninth], tenElevenTwelve] = nestedArr;
        console.log(first);
        console.log(third);
        console.log(eighth);
        console.log(ninth);
        console.log(tenElevenTwelve);