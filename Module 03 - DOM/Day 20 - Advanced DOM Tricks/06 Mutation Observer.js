//01. Mutation Observer: A Web-API that notifies us of any change in the DOM. Syntax is:
    //let observer = new MutationObserver(callbackFn);
    //observer.observe(nodeToBeObserved, changeToBeObserved);

//An Example:
    let p = document.querySelector("p");
    let button = document.querySelector("button");
    button.onclick = changeText;
    let names = ["Isaac Newton", "Albert Einstein", "Richard Feynman", "Niels Bohr", "Marie Curie"];
    function changeText()
    {
        let name = names[Math.floor(Math.random() * names.length)];
        p.textContent = name;
    }

    let observer = new MutationObserver(observeMutation);
    function observeMutation(mutationList, observer)
    {
        console.log("something changed");
        console.log(mutationList);
        console.log(observer);
        console.log(mutationList[0].type);
    }
    observer.observe(p, {childList: true});


//Types of changes to be observed:
    //a) childList
    //b) characterData
    //c) attributes
    //d) subtree
    //e) etc.