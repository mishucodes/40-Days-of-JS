//We can create & invoke functions inside functions. For Example:

    //a) Syntax:
        function outerFunction()
        {
            console.log('outer function invoked');
            function innerFunction()
            {
                console.log('inner function invoked');
            }
            innerFunction();
        }
        outerFunction();

    //b) Real life example:
        function calculateBill(orderAmount, taxRate, tip = 0)
        {
            function billIncludingTax(orderAmount, taxRate)
            {
                return orderAmount += (orderAmount * (taxRate/100));
            }
            let totalBill = billIncludingTax(orderAmount, taxRate);

            console.log(`Order Total: $${orderAmount}`);
            console.log(`Tax Rate: ${taxRate}%`);
            console.log(`Tip to the Server: $${tip}`);
            console.log(`Order Total (inclusive of taxes & tips): ${totalBill + tip}`);
        }
        calculateBill(500, 5, 10);