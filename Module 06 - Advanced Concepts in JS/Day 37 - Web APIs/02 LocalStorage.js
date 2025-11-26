//01. Getting/Setting the theme storage:
    if(!localStorage.getItem("theme"))
        localStorage.setItem("theme", "light");

//02. Setting the last-saved user theme:
    setTheme(localStorage.getItem("theme"));

//03. Letting the user change the theme:
    let button = document.querySelector("button");
    button.addEventListener("click", changeTheme);


//a) function that sets the theme:
    function setTheme(theme)
    {
        if(theme === "light")
        {
            document.body.style.backgroundColor = "white";
            document.body.style.color = "black";
        }
        else if(theme === "dark")
        {
            document.body.style.backgroundColor = "black";
            document.body.style.color = "white";
        }
    }
//b) function that changes the theme:
    function changeTheme()
    {
        if(localStorage.getItem("theme") === "light")
            localStorage.setItem("theme", "dark");
        else
            localStorage.setItem("theme", "light");
        setTheme(localStorage.getItem("theme"));
    }




//NOTE: Maximum storage is 05 mb. (as of 2025), & values are stored in string format.