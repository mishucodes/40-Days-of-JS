//className:
    divElement.className = "new class name";
//classList:
    divElement.classList; //returns a "DOMTokenList" (array-like)...
    divElement.classList.add("new class");
    divElement.classList.contains("className"); //boolean
    divElement.classList.remove("className");
    divElement.classList.replace("oldClass", "newClass");
    divElement.classList.toggle("className"); //removes if there, adds if not...
    divElement.classList.forEach(callbackFn);