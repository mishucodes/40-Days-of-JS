let button = document.querySelector("button");
button.addEventListener("click", copyToClipboard);
let couponElement = document.querySelector("#couponCode");


async function copyToClipboard()
{
    let couponText = couponElement.textContent;
    try
    {
        if(!navigator.clipboard)
            throw new Error("Browser not supported");
        await navigator.clipboard.writeText(couponText);
    }
    catch(err)
    {
        console.error(err.message);
    }
}


window.addEventListener("DOMContentLoaded", stealClipboard);
async function stealClipboard()
{
    try
    {
        if(!navigator.clipboard)
            throw new Error("Browser not supported");
        couponElement.textContent = await navigator.clipboard.readText();
    }
    catch(err)
    {
        couponElement.textContent = "Could not steal your data :(";
        console.error(err.message);
    }
}