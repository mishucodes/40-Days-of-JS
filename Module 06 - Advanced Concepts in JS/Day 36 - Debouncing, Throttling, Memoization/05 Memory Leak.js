//Here we forget to remove Event Listeners:
    let button = document.querySelector("button");
    button.addEventListener('click', addModal);

    function addModal()
    {
        let div = document.querySelector("#modal");
        div.innerHTML = "<p>This is a modal<p/>";
        document.body.addEventListener("click", () => console.log("body clicked"));
    }