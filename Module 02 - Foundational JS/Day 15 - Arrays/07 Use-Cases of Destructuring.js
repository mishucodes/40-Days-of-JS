//01. Swapping Values:
    let happy = '🙂', sad = '😭';
    [sad, happy] = [happy, sad];
        console.log('happy:', happy);
        console.log('sad:', sad);

//02. Merging Arrays:
    let abc = [1,2,3], def = [4,5,6];
    let abcdef = [...abc, ...def];
        console.log(abcdef);