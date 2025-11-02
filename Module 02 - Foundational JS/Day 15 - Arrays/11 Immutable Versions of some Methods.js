let abc = [1,2,3], cba = [3,2,1];

//a) toReversed():
    console.log(abc.toReversed()); //[3,2,1]
    console.log(abc); //[1,2,3]
//b) .toSorted():
    console.log(abc.toSorted((a,b) => a === b? 0: a < b? 1: -1)); //[3,2,1]
    console.log(abc); //[1,2,3]
//c) .toSpliced(startAtElement, deleteCount, addItem01, addItem02, addItem03, etc.):
    console.log(cba.toSpliced(1,2,4,5,6,7,8)); //[3,4,5,6,7,8]
    console.log(cba); //[3,2,1]
//d) .with(index, value):
    console.log(abc.with(2,2.1)); //[1,2,2.1]
    console.log(abc.with(-1,2.1)); //[1,2,2.1]
    console.log(abc); //[1,2,3]