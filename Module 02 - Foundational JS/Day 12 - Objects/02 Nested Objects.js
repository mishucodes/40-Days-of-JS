//Just as an object's keys can have primitives as their values, they may also have non-primitives as their values. For Example:
    let nestedObject =
    {
        socialMedia:
        {
            oldPeople: ['facebook', 'skype', 'sms'],
            newPeople: ['instagram', 'whatsapp', 'twitter'],
            veryNewPeople: ['snapchat', 'discord', 'signal']
        },
        foodApps:
        {
            oldPeople: ['dominoes', 'mcd', 'pizza hut'],
            newPeople: ['zomato'],
            veryNewPeople: ['eat healthy', 'we fit']
        },
        mediaApps:
        {
            oldPeople: ['netflix', 'prime video'],
            newPeople: ['youtube'],
            veryNewPeople: ['hulu']
        }
    }
    //Testing:
        console.log(nestedObject, '\n\n');
        console.log(nestedObject.socialMedia, '\n\n');
        console.log(nestedObject.socialMedia.oldPeople);