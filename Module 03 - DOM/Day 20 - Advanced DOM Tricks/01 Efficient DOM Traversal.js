//Efficient DOM Traversal:
    let parent = document.getElementById("someID");
    let firstChild = parent.firstElementChild;
    let secondChild = firstChild.nextElementSibling;
    let lastChild = parent.lastElementChild;
    let parentAlias = firstChild.parentElement;