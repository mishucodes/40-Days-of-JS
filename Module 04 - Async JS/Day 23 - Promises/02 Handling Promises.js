//02. HANDLING PROMISES:
    let p1 = new Promise((resolve, reject) => resolve('done'));
    //a) .then(): can take upto 2 arguments (a fn to handle resolved values, & another fn to handle the rejected ones):
        //aa) handling both:
            p1.then((resolve) => console.log('aa:', resolve), (reject) => console.log('aa:', reject));
        //ab) handling only resolved:
            p1.then((resolve) => console.log('ab:', resolve), null);
            //NOTE: not handling errors might cause premature program termination...
        //ac) handling only rejections:
            p1.then(null, (err) => console.log('ac:', err));
//Notice how this console.log gets executed before any of the promises could be executed...
console.log('I will get executed before any promise(s), since I am a part of the synchronous code...');

    //b) .catch(): only handles rejections.
        let p2 = new Promise((resolve, reject) => reject('bad'));
        //ba) handles rejections thrown by the .then() method:
            p2.then((resolve) => console.log('ba:', resolve))
              .catch((reject) => console.log('ba:', reject));
        //bb) handles rejections thrown by multiple .then() methods:
            p1.then((resolve) => {throw new Error('rejected by then()')})
              .then((result) => {throw new Error('rejected by then() again')})
              .catch((err) => console.log('bb:', err.message)); //prints the first error encountered

//c) .finally(): gets executed anyway.
    p2.then((resolve) => {throw new Error('no')})
      .catch((err) => console.log('c:', err.message))
      .finally((arg1, arg2) => console.log('finally receives:', arg1, '&', arg2)); //also, receives no arguments...