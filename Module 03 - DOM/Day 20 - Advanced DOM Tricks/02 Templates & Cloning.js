//Grabbing a template:
    let template = document.getElementById("myTemplate");
    console.log(template); //template element

//Cloning a template:
    let myTemplate = template.content.cloneNode(true); //true for deep-cloning...
    console.log(myTemplate); //document fragment

//Navigating a Document Fragment:
    console.log(myTemplate.querySelector(".card")); //div [card]
    console.log(myTemplate.querySelector("h3")); //h3
    console.log(myTemplate.querySelector("p")); //p [description]
    console.log(myTemplate.querySelector(".phoneAddress")); //div [phoneAddress]
    console.log(myTemplate.querySelector(".phoneAddress p")); //p [phoneNumber]
    console.log(myTemplate.querySelector(".phoneAddress").lastElementChild); //p [address]

//Editing this clone of a Document Fragment:
    myTemplate.querySelector("h3").textContent = "Name: John Doe";
    myTemplate.querySelector("p").textContent = "Description: Some Description for John Doe";
    myTemplate.querySelector(".phoneAddress p").textContent = "Phone: 123-456-789";
    myTemplate.querySelector(".phoneAddress").lastElementChild.textContent = "Address: House, Province, State";

//Attaching this clone to the DOM:
    document.body.appendChild(myTemplate);