//01. Data Encapsulation: Protecting the integrity of data from bad actors. For Example:
    //a) Bank Account:
        function createBankAccount(initialBalance = 0)
        {
            //(i) getting balance:
                function getMyBalance()
                {
                    return initialBalance;
                }
            //(ii) adding balance:
                function addMoney(amount)
                {
                    initialBalance+=amount;
                    return initialBalance;
                }
            //(ii) drawing balance:
                function drawMoney(amount)
                {
                    if(initialBalance < amount)
                        return null;
                    //else:
                    initialBalance -= amount;
                    return initialBalance;
                }
            //returning functions:
            return {getMyBalance, addMoney, drawMoney};
        }
        //Testing: There's no other way to add/draw money other than the given functions/methods:
        //aa) john
            let johnAccount = createBankAccount();
                console.log(johnAccount.getMyBalance()); //0
                console.log(johnAccount.addMoney(10));   //10
                console.log(johnAccount.addMoney(10));   //20
                console.log(johnAccount.drawMoney(15));  //5
                console.log(johnAccount.drawMoney(15));  //null
        //ab) bob
            let bobAccount = createBankAccount(100);
                console.log(bobAccount.getMyBalance());  //100
                console.log(bobAccount.drawMoney(1000)); //null
                console.log(bobAccount.addMoney(10));    //110
                console.log(bobAccount.drawMoney(10));   //100


    //b) DOM Manipulation:
        function manageButton()
        {
            let clickCount = 0;
            document.getElementById('myButton').addEventListener('click', function()
                {
                    clickCount++;
                    console.log('button clicked', clickCount, 'times');
                });
        }
        //NOTE: Whether we realise or not, we're using closures here.