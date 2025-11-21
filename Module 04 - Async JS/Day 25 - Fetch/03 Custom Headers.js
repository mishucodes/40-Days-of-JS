//03. HTTP METHODS' CUSTOM HEADERS: If headers are like statements declaring the cargo type in a ship near a port, custom headers are special statements declaring certain cargo that is a *special case*.
// -> It's a way to inform the server about the type of data being sent in the request body.

//Example:
	const url = 'https://jsonplaceholder.typicode.com/posts';
	function loginUser(url)
	{
		fetch
		(
			url,
			{
				method: 'POST',
				headers:
					{
						'Content-Type': 'application/json',
						'Authorization': 'Bearer secretToken',
						'customHeader': 'someMadeUpValue'
					},
				body: JSON.stringify({title: 'Ben', body: 'Tennyson', userId: 10})
			}
		)

		.then(response => response.json()).then(data => console.log('Success:', data))
		.catch(error => console.error('Error:', error));
	}
	loginUser(url);