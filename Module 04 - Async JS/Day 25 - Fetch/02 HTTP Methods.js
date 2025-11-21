//02. HTTP METHODS: Getting the data from a server but with certain conditionals/filters.
let cartoonURL = 'https://rickandmortyapi.com/api/character/';
let postsURL = 'https://jsonplaceholder.typicode.com/posts';
let uniqueURL = 'https://jsonplaceholder.typicode.com/posts/1';


	//a) GET: To get some data from a resource.
		//aa) Getting the whole thing:
			async function getData(url, request)
			{
				try
				{
					let response = await fetch(url, request);
					let data = await response.json();
					console.log(data);
				}
				catch(error)
				{
					console.error(error.message);
				}
			}
			getData(cartoonURL); //GET is the default method anyway...
			// getData(cartoonURL, {method: 'GET'});
		//ab) Using some filters (Query Parameters):
			//aba) ?key:value
				async function getFilteredData(url, request)
				{
					let newURL = url + "?" + "species=Alien";
					try
					{
						let response = await fetch(newURL, request);
						let data = await response.json();
						console.log(data)
					}
					catch(error)
					{
						console.error(error.message);
					}
				}
				// getFilteredData(cartoonURL);
			//abb) Using multiple parameters (URLSearchParams):
				async function getEmbeddedData(url, queryParams)
				{
					let queryString = new URLSearchParams(queryParams).toString();
					let newURL = url + '?' + queryString;
					try
					{
						let response = await fetch(newURL);
						let data = await response.json();
						console.log(data)
					}
					catch(error)
					{
						console.error(error.message);
					}
				}
				// getEmbeddedData(postsURL, {_embed: 'comments', userId: 1});

	//b) POST: To create a resource somewhere.
		async function postData(url, data) //data is the payload to be sent to the server...
		{
			try
			{
				let x = fetch
					(
						url,
						{method: 'POST', headers: {'Content-type': 'application/json'}, body: JSON.stringify(data)}
					);
				let y = await x;
				console.log(y);
			}
			catch(error)
			{
				console.log(error.message);
			}
		}
		// postData(postsURL, {userId: 10, id: 10, title: 'hello world', body: 'hello world, this is Ben Tennyson.'});

	//c) PUT: To update a resource somewhere (the entire resource):
		async function reformData(uniqueURL, data) //data is the new payload for the post.
		{
			try
			{
				let x = fetch
					(
						uniqueURL,
						{method: 'PUT', headers: {'Content-type': 'application/json'}, body: JSON.stringify(data)}
					);
				let y = await x;
				console.log(y);
			}
			catch(error)
			{
				console.error(error.message);
			}
		}
		// reformData(uniqueURL, {userId: 2, id: 123, title: 'Heatblast', body: 'hello world! Now I am Heatblast!!!.'});

	//d) PATCH: To update a resource somewhere (partially):
		async function updateData(uniqueURL, data) //data is the payload of the part(s) for the new post.
		{
			try
			{
				let x = fetch
					(
						uniqueURL,
						{method: 'PATCH', headers: {'Content-type': 'application/json'}, body: JSON.stringify(data)}
					);
				let y = await x;
				console.log(y);
			}
			catch(error)
			{
				console.error(error.message);
			}
		}
		// updateData(uniqueURL, {title: 'XLR8', body: 'now I am XLR8'}); //only updating the title of the post.

	//e) DELETE: to delete a resource.
		async function deleteData(uniqueURL)
		{
			try
			{
				let x = fetch(uniqueURL, {method: 'DELETE'}); //no payload. nothing to send in header/body...
				let y = await x;
				console.log(y);
			}
			catch(error)
			{
				console.error(error.message);
			}
		}
		// deleteData(uniqueURL);