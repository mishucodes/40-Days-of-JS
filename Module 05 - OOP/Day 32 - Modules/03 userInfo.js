//NOTE: only one default export allowed per file.
    export default function userName() {return 'Mitushi'};

//Some Notes:
    //a) If there are more than one default exports, the latter could override the previous export(s); or the whole file could fail. It's an implementation detail.
    //b) Other ways to export default:
        //ba) export default userAge;
        //bb) export default {userName, userAge};
            //NOTE: this will export not two fn definitions, but one object containing 2 fn definitions.