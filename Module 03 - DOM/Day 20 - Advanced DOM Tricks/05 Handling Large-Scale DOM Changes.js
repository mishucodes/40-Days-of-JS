//Adding a lot of elements to "document.body":
    function addItems(count)
    {
        let fragment = document.createDocumentFragment();
        for(let i = 0; i < count; i++)
        {
            let div = document.createElement("div");
            div.textContent = `item ${i+1}`;
            fragment.appendChild(div);
        }
        document.body.appendChild(fragment);
    }