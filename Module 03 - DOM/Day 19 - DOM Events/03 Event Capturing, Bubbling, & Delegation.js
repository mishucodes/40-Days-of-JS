let gp = document.querySelector("#grandparent");
let pa = document.querySelector("#parent");
let ch = document.querySelector("#child");

function fn(event) {console.log(this.id);}


//01. EventBubbling: Parents can 'feel' the reverberations of the events their children witnessed:
    gp.addEventListener("click", fn);
    pa.addEventListener("click", fn);
    ch.addEventListener("click", fn);

//02. Event Capturing: Parents can 'capture' the events their children are about to witness in advance [see image]:
    gp.addEventListener("click", fn, true);
    // pa.addEventListener("click", fn, true);

//03. Event Delegation: Comes from "to delegate", & not "to delay". Here, we basically add a single eventListener & handler to a common parent, rather than individual children. For Example:
    let ul = document.querySelector("#list");
    ul.addEventListener("click", fn2);
    function fn2(event)
    {
        if(event.target.tagName === "LI")
            console.log(event.target.textContent);
    }

//04. stopPropagation(): Any child can stop an event being 'informed' to its parent:
    let gf = document.querySelector("#grandfather");
    let fa = document.querySelector("#father");
    let so = document.querySelector("#son");
    function fn3(event) {console.log(event.currentTarget.id)};

    so.addEventListener('click', fn3);
    fa.addEventListener('click', (event) =>
        {
            fn3(event);
            event.stopPropagation();
            //note that it stopped the 'click' itself being reported to the grandparent...
        });
    gf.addEventListener('click', fn3); //nothing because the gf never got to know about the "click"...