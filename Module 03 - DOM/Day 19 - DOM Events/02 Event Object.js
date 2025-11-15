//01. Event Object: An object that we the handler function gets as its argument whenever an event triggers it. This objects contains a lot of information about the event.

//Useful properties & methods in the Event Object:
    //a) event.type
    //b) event.name
    //c) event.value
    //d) event.target
    //e) event.target.attribute [of the target element]...
    //f) event.currentTarget


//NOTE: "this" inside a non-arrow handler function refers to the element on which ".addEventListener()" is attached. Probably because it is this element object as a method of which this handler function is called.
    let h1 = document.getElementsByTagName("h1")[0];
    h1.addEventListener('click', function() {console.log(this)}); //h1
    h1.addEventListener('click', () => console.log(this)); //window