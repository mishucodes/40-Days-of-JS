//Take a look at this example:
    let url = 'https://api.github.com/users/mishucodes';
    async function fetchData(url)
    {
        try
        {
            let x = await fetch(url);
            if(!x.ok)
                throw new Error("response status:", x.status);
            let contentType = x.headers.get("content-type");
            if(!contentType || !contentType.includes("application/json"))
                throw new Error("can't proceed further due to contentType error");
            let y = await x.json();
            console.log(y.bio);
        }
        catch(error)
        {
            console.log(error.message);
        }
    }
    fetchData(url);