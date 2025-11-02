//01. Optional Chaining: Accessing some unsure values from an object. For Example:
    let student =
    {
        name: 'john',
        age: 21,
        subjects:
        {
            core: ['english', 'maths', 'reasoning'],
            extras: ['law']
        },
    };

    console.log(student.parents); //undefined
    //This will cause an Error!!!
        console.log(student.parents.email);
    //A better way:
        console.log(student?.parents?.email); //undefined