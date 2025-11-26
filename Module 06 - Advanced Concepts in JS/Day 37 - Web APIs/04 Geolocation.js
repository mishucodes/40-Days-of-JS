let h2 = document.querySelector("h2");
let button = document.querySelector("button");

button.addEventListener("click", showLocation)

function showLocation()
{
    navigator.geolocation.getCurrentPosition(callbackForShowLocation, callbackForErrors);
    function callbackForShowLocation(position)
    {
        let {latitude, longitude} = position.coords;
        h2.textContent = `Lat: ${latitude}, Long: ${longitude}`;
    }
    function callbackForErrors(e)
    {
        console.log("failed");
        switch(e.code)
        {
            case 1:
                h2.textContent = "Request denied";
                break;
            case 2:
                h2.textContent = "Location unavailable";
                break;
            case 3:
                h2.textContent = "Request timed out";
                break;
            default:
                h2.textContent = `Something went wrong`;
        }
    }
}