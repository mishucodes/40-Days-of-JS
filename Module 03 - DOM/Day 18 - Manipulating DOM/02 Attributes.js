//01. Reading Attributes:
    imgElement.getAttribute("src");
    imgElement.getAttribute("alt");
    imgElement.getAttribute("customAttribute");

//02. Writing Attributes:
    imgElement.setAttribute("src", "./myImg.png");
    imgElement.setAttribute("customAttribute", "new string value for this customAttribute");

//03. Removing Attributes:
    imgElement.removeAttribute("alt");
    
//04. Checking Attributes:
    imgElement.hasAttribute("alt"); //returns boolean