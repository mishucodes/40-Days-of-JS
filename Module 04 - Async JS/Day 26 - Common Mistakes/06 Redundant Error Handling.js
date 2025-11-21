//01. THE WRONG WAY:
    let getValue = new Promise((resolve, reject) =>
        {
            //NOTE: This whole try-catch block is redundant, bcz if an error is thrown inside the executor function of a Promise, the promise will be automatically settled as rejected with that error...
            try
            {
                if(true)
                    resolve('resolved value');
            }
            catch(error)
            {
                reject(error);
            }
        });


//02. THE CORRECT WAY:
    let getValueOptimised = new Promise((resolve, reject) => {/*if(true)*/ resolve('resolved value');});