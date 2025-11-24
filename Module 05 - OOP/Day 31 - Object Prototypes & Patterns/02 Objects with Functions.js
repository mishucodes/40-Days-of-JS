//Objects may have functions as values:
let user =
{
    name: 'john',
    todaysLuckyNumber: function() {return Math.random();}
}

console.log(user.todaysLuckyNumber());