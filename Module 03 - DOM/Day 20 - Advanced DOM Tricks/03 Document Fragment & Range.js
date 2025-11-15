//01. Document Fragment: This is like a temporary container for elements. It's not a part of the main DOM. We can copy it, edit it, & then insert it into the main DOM - causing less repainting of the main DOM. For Example:
    let fragment = document.createDocumentFragment();
    console.log(fragment); //document fragment

    for(let i = 0; i < 5; i++)
    {
        let span = document.createElement("span");
        span.textContent = `item ${i+1}`;
        span.style.display = "block";
        fragment.appendChild(span);
    }

    document.body.appendChild(fragment); //notice the HTML structure in chrome. All paragraphs are added individually, & not bundled into a parent div...


//02. Document Range: It's essentially a part of the DOM. If a DOM is an essay, this is like me selecting a bunch of paragraphs from it. For Example:
    let h2 = document.querySelector("h2");
    let p = document.querySelectorAll("p");
    let range = document.createRange();
    console.log(range); //Range object
    range.setStart(h2, 0);
    range.setEnd(p[p.length-1].firstChild, p[p.length-1].firstChild.length);
        //EXPLANATION: These methods take 2 arguments: node, offset.
            //a) Node: which node is selected.
            //b) Offset: if a node is a paragraph, which character exactly is the starting point of that selection.
    console.log(range.cloneContents()); //document fragment

    let clone =  range.cloneContents();
    clone.querySelector("h2").style.backgroundColor = "red";
    document.body.appendChild(clone);