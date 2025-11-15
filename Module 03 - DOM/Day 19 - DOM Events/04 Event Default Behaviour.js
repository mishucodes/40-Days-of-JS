let link = document.querySelector("a");
link.addEventListener("click", (event) =>
    {
        event.preventDefault();
        console.log(`you clicked "${event.target.textContent}"`);
        console.log("default behaviour prevented");
    });