//05. CANCELLING fetch() REQUESTS: You can't cancel a promise, but you can cancel a fetch() call causing that promise.
    //For Example:
        let url = "./CancellingRequestsHelper/Navalmanack.pdf";
        let downloadButton = document.querySelector("#download");
        let abortButton = document.querySelector("#abortDownload");
        downloadButton.addEventListener("click", download);
        abortButton.addEventListener("click", abortDownload);
        let controller;
    
        //function to begin download:
            async function download()
            {
                console.log("downloading");
                try
                {
                    controller = new AbortController();
                    let signal = controller.signal;
                    setTimeout(async () =>
                        {
                            let response = await fetch(url, {signal});
                            let blob = await response.blob();
                            let objectURL = URL.createObjectURL(blob);
                            let link = document.createElement("a");
                            link.setAttribute("href", objectURL);
                            link.setAttribute("download", "The Almanack of Naval Ravikant.pdf");
                            link.click();
                            URL.revokeObjectURL(objectURL);
                        }, 2000); //causing a slight delay for the download...
                }
                catch(error)
                {
                    console.error(error.message);
                }
            }

        //function to abort download:
            async function abortDownload()
            {
                console.warn("aborting");
                if(controller)
                    controller.abort("User requested an abortion");
            }