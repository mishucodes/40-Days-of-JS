// 01. Three important terms in Fetch API:
	//a) URL: the path to the resource.
	//b) Request/Options: what you want to do with the resource (read/write).
	//c) Response: what you get back from the resource (status of the operation).
//02. Syntax: fetch() takes one mandatory argument (URL); & an optional argument (request/options):
	//-> let x = fetch(URL, request); //returns a promise...
	//-> let y = x.then(response => {}); //handling that promise...


//Some Examples:
let url = 'https://api.github.com/users/mishucodes';
	//a) .then()-based example:
		function fetchData01(url)
		{
			fetch(url).then(response => response.json())
			.then((response) => console.log(response.name))
			.catch((error) => console.log(error.message));
		}
		fetchData01(url);

	//b) await-based example:
		async function fetchData02(url)
		{
			try
			{
				let x = await fetch(url);
				let y = await x.json();
				console.log(y.bio);
			}
			catch(error)
			{
				console.log(error.message);
			}
		}
		fetchData02(url);