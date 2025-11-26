//Getting all elements:
    let draftElement = document.querySelector("#draft");
    let p = document.querySelector("p");
//Getting/Setting the session's storage:
    if(!sessionStorage.getItem("draft"))
        sessionStorage.setItem("draft", "");
//Setting the value on load:
    draftElement.value = sessionStorage.getItem("draft");
//Adding the event listener:
    draftElement.addEventListener("input", saveDraft);
//Defining the function:
    function saveDraft()
    {
        sessionStorage.setItem("draft", draftElement.value);
    }


//NOTE: Maximum storage is 05 mb. (as of 2025), & values are stored in string format.