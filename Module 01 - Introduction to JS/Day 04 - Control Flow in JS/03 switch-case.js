//NOTE: 'switch' is often faster than if-else because of something called a "Jump/Branch Table". Study more about it later.

//01. Normal Switch Statement:
    let alex = 'a', bob = 'b', cooper = 'c', donald = 'd', evan = 'e', faber = 'f', george = 'g';
    switch (alex)
    {
        case 'a':
            console.log('excellent');
            break;
        case 'b':
            console.log('very good');
            break;
        case 'c':
            console.log('good');
            break;
        case 'd':
            console.log('nice');
            break;
        case 'e':
            console.log('bad');
            break;
        default:
            console.log('fail');
            break;
    }


//02. Fallback Styles:
    //a) Fallback Type-I: "Case Grouping" (Stacked Cases).
        let weather = 'humid';
        switch(weather)
        {
            case 'sunny':
                console.log('carry sunscreen');
                break;
            case 'cloudy':
            case 'rainy':
            case 'overcast':
                console.log('better carry an umbrella'); //applies to all three above conditions...
                break;
            case 'humid':
                console.log('carry some water');
                break;
        }

    //b) Fallback Type-II: "Sequential Fallthrough" (Cascading Cases).
        let rectorScale = 5;
        switch(rectorScale)
        {
            case 5:
                console.log('can destroy strong buildings');
            case 4:
                console.log('can destroy weak buildings');
            case 3:
                console.log('can destroy makeshift shelters');
            case 2:
                console.log('can cause loss of property');
            case 1:
                console.log('can cause minor trouble');
                break;
            default:
                console.log('no idea');
        }

    //c) “Switch-on-True” Pattern (more of a hack):
    let age = 9;
    switch (true)
    {
        case age >= 35:
            console.log('eligible for union cabinet');
        case age >= 25:
            console.log('eligible for membership of any legislative assembly');
        case age >= 18:
            console.log('eligible to vote in common elections');
        default:
            console.log('eligible for schooling');
    }