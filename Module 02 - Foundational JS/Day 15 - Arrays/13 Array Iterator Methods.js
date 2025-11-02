let employees =
[
    {name: 'john', age: 21, department: 'HR', salary: 500},
    {name: 'bob', age: 19, department: 'HR', salary: 500},
    {name: 'jack', age: 25, department: 'sales', salary: 700},
    {name: 'harry', age: 27, department: 'sales', salary: 900},
    {name: 'adam', age: 30, department: 'engineering', salary: 1500}
]

//a) .filter():
    //aa) HR Team:
        console.log(employees.filter((employee, index, employees) => 
            {
                if(employee.department === 'HR')
                    return true;
            }));
    //ab) Sales Team:
        let salesTeam = employees.filter((employee) => employee.department === 'sales'? true: false);
            console.log(salesTeam);
//b) .map():
    console.log(salesTeam.map((element, index, array) => element.name + ' surname'));
//c) .flatMap(): first it applies the map function, then it flattens the new array:
    let nestedArray = [[1,2,3],[4,5,6],[7,8,9]];
    console.log(nestedArray.flatMap((innerArray) =>
        {
            innerArray.push('x');
            return innerArray
        })); //[1,2,3,x,4,5,6,x,7,8,9,x];
    
//d) .reduce():
    //da) Average Age:
        let sumOfAllAges = employees.reduce((accumulator, element, index, array) => accumulator + element.age, 0);
            console.log('Average Age:', sumOfAllAges/employees.length); //24.4
    //db) Highest Age:
        let highestAge = employees.reduce((accumulator, element, index, array) => 
            {
                return accumulator < element.age? element.age: accumulator;
            }, 0);
            console.log(highestAge); //30
//e) .reduceRight():
let numbers = [100,40,15];
    //ea) Subtracting LTR:
        console.log(numbers.reduce((acc, el) => acc -= el)); //45
    //ea) Subtracting RTL:
        console.log(numbers.reduceRight((acc, el) => acc -= el)); //-125
//f) .some():
    console.log(employees.some((el,index,arr) => el.age < 10? true: false)); //false
    console.log(employees.some((el,index,arr) => el.age < 20? true: false)); //true
//g) .every():
    console.log(employees.every((el,index,arr) => el.age > 10? true: false)); //true
    console.log(employees.every((el,index,arr) => el.age < 50? true: false)); //true
    console.log(employees.every((el,index,arr) => el.age < 30? true: false)); //false
//h) .find():
    console.log(employees.find((el,index,arr) => el.age > 10? true: false).name); //john
    console.log(employees.find((el,index,arr) => el.age > 100? true: false)); //undefined
//i) .findIndex():
    console.log(employees.findIndex((el,index,arr) => el.age > 10? true: false)); //0
//j) .findLast():
    console.log(employees.findLast((el,index,arr) => el.age > 10? true: false).name); //adam
    console.log(employees.findLast((el,index,arr) => el.age > 100? true: false)); //undefined
//k) .findLastIndex():
    console.log(employees.findLastIndex((el,index,arr) => el.age > 10? true: false)); //4
//l) .forEach():
    console.log(employees.forEach((employee, index, employees) => employee.isAvailable = true)); //undefined
    console.log(employees); //new updated array
//m) .entries():
    console.log(employees.entries()); //Object [Array Iterator] {}
    let employeesIterator = employees.entries();
        console.log(employeesIterator.next()); //{value: [0, employee01], done: false}
        console.log(employeesIterator.next()); //{value: [1, employee02], done: false}
        console.log(employeesIterator.next().value); //[2, employee03]
//n) .values():
    console.log(employees.values()); //Object [Array Iterator] {}
    let employeesIterator02 = employees.values();
        console.log(employeesIterator02.next()); //{value: employee01, done: false}
        console.log(employeesIterator02.next().value); //employee02