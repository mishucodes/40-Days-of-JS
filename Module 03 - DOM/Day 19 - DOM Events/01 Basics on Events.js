//01. Event: It's a signal that something happened in the webpage (click, keypress, mousemove, etc...)
//02. Handler: It's essentially a function that should execute following a particular 'event'.

//Event Handling in HTML (Markup): We use attributes such as:
    //a) "onClick" [case insensitive]

//Event Handling in JS:
    //a) We use attributes such as:
        //aa) element.onclick = function() {fn definition};
            //SOME NOTES ON "onclick":
                //aaa) case sensitive
                //aab) can't add multiple handlers to an event.
    //b) We also use certain methods:
        //ba) element.addEventListener('eventName', handlerFunction, optionalBooleanToEnableEventCapturing);
        //ba) element.removeEventListener('eventName', handlerFunction, optionalBooleanToEnableEventCapturing);

//DOM Content Loaded:
    document.addEventListener("DOMContentLoaded", handlerFunction);