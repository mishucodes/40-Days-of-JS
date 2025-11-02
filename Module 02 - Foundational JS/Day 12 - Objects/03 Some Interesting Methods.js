let employee =
{
    name: 'john',
    age: 21,
    isMarried: false,
    salary: null
}

//01. 'in' operator:
    console.log(employee.salary? employee.salary: 'salary does not exist'); //'salary does not exist' (but it does)...
    console.log('salary' in employee? employee.salary: 'salary does not exist'); //null

//01a. Another way to do it:
    console.log(employee?.salary); //null
    console.log(employee?.name); //john
    console.log(employee?.role); //undefined
    console.log(employee?.toString); //[Function: toString]

//02. for-in: Looping through all the 'keys' in an object:
    for(let key in employee)
        console.log(key + ':', employee[key]);