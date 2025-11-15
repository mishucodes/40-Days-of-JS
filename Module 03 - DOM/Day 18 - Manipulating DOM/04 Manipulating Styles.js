//This is how we access the style object of an element:
    elementObject.style; //cssStyleDeclaration Object...

//NOTICE THIS:
    elementObject.style.backgroundColor = "yellow"; //camelCase
    elementObject.style["background-color"] = "yellow"; //kebab-case