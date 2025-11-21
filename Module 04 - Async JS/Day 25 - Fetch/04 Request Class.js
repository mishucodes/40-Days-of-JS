//04. Anatomising the Fetch API on a lower level:
let url = 'https://jsonplaceholder.typicode.com/posts';

//a) Creating Request Objects:
    let request1 = new Request(url, {method: 'POST', headers: {'Content-Type': 'application/json'}, body: {'payload': 'data'}});
    // console.log(request1);
//b) Cloning request objects:
    let request2 = new Request(request1, {body: {'payload': 'newData'}});
    // console.log(request2);


let requestGet = new Request(url, {method: "GET"});
fetch(requestGet).then(response => response.json()).then(response => console.log(response));