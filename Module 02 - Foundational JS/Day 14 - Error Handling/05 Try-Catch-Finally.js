let badNetwork = true;
function readData()
{
    try
    {
        console.log("Opening connection...");
        if(badNetwork)
            throw new Error("Network failed");
        //else:
        console.log("Here's what you wanted: xyz");
    } catch (error)
    {
        console.log(error.message);
    }
    finally
    {
        console.log("Closing connection...");
    }
}
readData();