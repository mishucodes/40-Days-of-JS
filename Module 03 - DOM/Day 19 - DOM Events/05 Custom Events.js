let un = document.querySelector("#username");
let pw = document.querySelector("#password");
let btn = document.querySelector("button");



//Here's how we use Custom-Events:
    //a) create a custom event
    //b) listen for that event
    //c) dispatch that event

//01. Creating a Custom Event:
    let myEvent = new CustomEvent("userLoggedIn",
        {
            detail:
            {
                userType: "casual",
                time: [new Date()]
            }
        }
        );

//02. Listening for this event:
    document.addEventListener("userLoggedIn", (event) =>
        {
            let p = document.createElement("p");
            p.textContent = "welcome, " + un.value;
            document.body.appendChild(p);
            console.log("welcome", un.value);
            console.log("userType:", event.detail.userType);
            console.log("loginTime:", event.detail.time);
        });

//03. Dispatching this event:
    btn.addEventListener('click', () =>
        {
            if(un.value && pw.value)
                document.dispatchEvent(myEvent);
        });