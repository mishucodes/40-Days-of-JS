//01. Object.groupBy(anyIterable, callbackFunction): this is a special method added in ES 2025:
    let employees =
    [
        {name: 'john', age: 21, salary: 500, department: 'HR'},
        {name: 'bob', age: 26, salary: 600, department: 'HR'},
        {name: 'jack', age: 46, salary: 6000, department: 'sales'},
        {name: 'adam', age: 19, salary: 3000, department: 'sales'},
        {name: 'harry', age: 39, salary: 3000, department: 'accounting'}
    ];
    let groupedByDepartment = Object.groupBy(employees, (employee) => employee.department);
        console.log(groupedByDepartment);
    let moreThan1000 = Object.groupBy(employees, (employee) => 
        {
            if(employee.salary > 1000)
                return employee.salary;
            else
                return 'Less than 1000';
        });
        console.log(moreThan1000);