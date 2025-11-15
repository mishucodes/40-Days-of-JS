//Types of nodes in DOM:
    //a) Element
    //b) Text
    //c) Comment
    //d) "Document" node (root)
    //e) DocumentType node (<!DOCTYPE html>)
    //f) DocumentFragment (<template>)




/* Example DOM:
    <div>
        <p>
            <span>TEXT<span/>
            <span>TEXT<span/>
        <p/>
        <!-- This is a comment -->
    <div/>
*/


//01. Grabbing someone's Parent/Child:
    spanElement.parentElement; //p
    spanElement.parentNode; //p
    spanElement.parentElement.parentElement; //div

    divElement.children; //returns an HTML-Collection of element nodes...
    divElement.childNodes; //returns a NodeList of all kinds of nodes...

    divElement.firstChild; //text (\n)...
    divElement.firstElementChild; //p
    divElement.lastChild; //text (\n)...
    divElement.lastElementChild; //p


//02. Grabbing siblings:
    spanElement.previousSibling; //text (\n)...
    spanElement.previousElementSibling; //null
    spanElement.nextSibling; //text (\n)...
    spanElement.nextElementSibling; //span