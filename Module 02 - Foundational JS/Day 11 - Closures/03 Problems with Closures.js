//01. Memory Leak: Some memory never being garbage-collected. For Example:
    function createBigArray(char = '*')
    {
        let bigArray = new Array(100).fill(char);
        function printData()
        {
            console.log(bigArray);
        }
        function changeData(char = '*')
        {
            bigArray.fill(char);
        }
        return {printData, changeData};
    }
    let myData = createBigArray();
        myData.printData();
        myData.changeData(0);
        myData.printData();
    //NOTE: Since the closure function will always be pointing to the bigArray, there's no way it is being garbage-collected ever. No matter how seldom (if ever) we use it. There's only one way (hack) to do it:
        myData = 10;
        //EXPLANATION: Now that 'myData' points at something else, it means closure can be garbage collected, ipso-facto garbage-collecting the 'bigArray' as well.