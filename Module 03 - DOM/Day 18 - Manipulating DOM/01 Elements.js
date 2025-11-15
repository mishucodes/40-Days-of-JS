//01. Creating Elements:
    let h1 = document.createElement("h1");

//02. Inserting Elements:
    //a) appendChild():
        document.body.querySelector("cssSelector").appendChild(h1);
    //b) insertBefore():
        document.querySelector("cssSelector to select the parent element of the second argument to insertBefore()").insertBefore("theNewElementToBeInserted", "theElementBeforeWhichTheNewElementShouldGo");
            //NOTE: If we add "null" as the second argument, the newElement gets added as the lastChild of the parent element...
    //c) insertAfter():
        document.querySelector("cssSelector to select the parent element of the second argument to insertBefore()").insertBefore("theNewElementToBeInserted", "theElementBeforeWhichTheNewElementShouldGo".nextElementSibling);

//03. Modifying Content:
    div.innerHTML = "<h2>Sub Title</h2>";
    h1.innerText = "Title";
    h1.textContent = "New Title";
        //NOTE: "innerText" takes CSS-visibility into account, but "textContent" does not...
    
//Removing Elements:
    elementToBeRemoved.remove();
    parentElement.removeChild("childElement");
    parentElement.innerHTML = "";
    parentElement.innerText = "";
    parentElement.textContent = "";
    parentElement.replaceChildren("newChildElement01", "newChildElement02", "newChildElement03");
    parentElement.replaceChildren(); //empty method means removal of all children...