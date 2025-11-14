//Methods to grab an object/node from the DOM:
    document.getElementById("id"); //returns an element object
    document.getElementsByClassName("class"); //returns an array-like (HTML-Collection) of element objects...
        //NOTE: Here's how we can convert it into an array:
            //a) Array.from():
                Array.from(arrayLike);
            //b) spread operator:
                [...arrayLike];
    document.getElementsByTagName("tagName"); //returns an array-like (HTML-Collection) of element objects...

    document.querySelector("cssSelector"); //returns the first element object meeting conditions...
    document.querySelectorAll("cssSelector"); //returns an array-like (NodeList) of element objects meeting conditions...


//Difference between HTML-Collections & NodeLists:
    //a) NodeLists are iterable, HTML-Collections are not.
    //b) NodeLists have a ".forEach()" method, but HTML-Collections do not.