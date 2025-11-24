//02. Defining a Named Class:
    let Employee = class GoogleEmployee
    {
        constructor(name, role)
        {
            this.name = name;
            this.role = role;
        }
        createGoogleEmployee()
        {
            return new GoogleEmployee(this.name, this.role); // self-reference using the internal class name
        }
    };

    let e1 = new Employee('Alice', 'HR');
    let e2 = new GoogleEmployee("John", "sales"); //error
    console.log(GoogleEmployee); //error (not undefined, but a proper error)

    let e3 = e1.createGoogleEmployee();
    console.log(e1);
    console.log(e3);