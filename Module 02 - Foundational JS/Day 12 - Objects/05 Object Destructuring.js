//01. Object Destructuring: Breaking the object apart. We can do a lot with it. For Example:
    let student =
    {
        name: 'john',
        age: 21,
        UID: 123,
        email: 'johndoe@email.com',
        subjects:
        {
            core: ['english', 'maths', 'reasoning'],
            extras: ['law']
        },
        relationships:
        {
            parents: ['bob', 'maria'],
            siblings: ['harry', 'cooper'],
            friends: ['william', 'jack']
        }
    };


    //a) Getting certain properties from an object:
        let {name, age} = student;
            console.log(name); //john
            console.log(age); //21
    //b) Let's try getting a nested property:
        let {core} = student;
            console.log(core); //undefined (doesn't work with nested layers)...
    //c) Non-primitive values are passed by reference:
        let {subjects} = student;
        subjects.extras.push('CS');
            console.log(subjects.extras); //['law', 'CS']
            console.log(student.subjects.extras); //['law', 'CS']
    //d) Setting fallback values:
        let {hobbies = 'probably sports'} = student;
            console.log(hobbies); //probably sports
            console.log(student.hobbies); //undefined
    //e) Setting fallback with dynamic values:
        let {extras, numberOfExtraSubjects = extras.length} = student.subjects;
            console.log(extras); //['law', 'CS']
            console.log(numberOfExtraSubjects); //2
    //f) Uses aliases (renaming keys):
        let {UID: UniqueID} = student;
            console.log(UniqueID); //123
    //g) Picking specific items from the nested objects:
        let {relationships: {parents}} = student; //getting 'parents' value from 'relationships' object...
            console.log(parents); //[bob, maria]
    //h) Applying destructuring to the function parameters:
        function sendEmail({email})
        {
            console.log('sent an email to', email);
        }
            sendEmail(student); //sent an email to johndoe@email.com
            //Note that I'm not passing the email as the argument. I'm passing the whole object!!!
    //i) Destructuring a return value:
        function getStudent()
        {
            return student;
        }
            let {email} = getStudent();
                console.log(email);
    //j) Destructuring in Loops:
        let students =
        [
            {name: 'john', age: 21},
            {name: 'bob', age: 18},
            {name: 'kane', age: 14},
            {name: 'jack', age: 25}
        ];
            for(let {name} of students)
                console.log(name);