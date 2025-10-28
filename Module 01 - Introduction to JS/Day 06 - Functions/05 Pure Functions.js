//01. Pure Functions: A function that takes an input value & returns an output value.
//Some Notes:
    //a) The output should be a new value, not the alteration of the input value.
    //b) The function should not change the state of the program-at-large in any way. A pure function’s world ends where its parameters end.
    //c) Every time it receives a certain input, it should output the same value. The output should not be contingent on anything external. Not even some API call.
    //d) Pure functions are very useful for programming in "component-driven architectures" like React.


//An Example of a pure function:
    function add(x,y)
    {
        return x+y;
    }


//Some Example of Impure functions:
    //a) function is dependant upon some value outside scope:
        let greeting = 'hello';
        function greetUser(name = 'guest')
        {
            return greeting + name;
        }
    //b) function makes an API call:
        async function getWeather(city)
        {
            const res = await fetch(`https://wttr.in/${city}?format=j1`);
            const data = await res.json();
            const weather = await data['current_condition'][0]['temp_C'];
            return weather;
        }
        // getWeather('london').then(temp => console.log(temp + 'ºC'));
    //c) produces something 'random': Ignore the complexity of the example. The function merely returns a random number...
        function produceRandom(range = '1-10')
        {
            if(!/^\d+-\d+$/.test(range))
                return null;
            lowerBound = /^\d+/.exec(range)[0];
            upperBound = /\d+$/.exec(range)[0];
            let randomNumber;
            do
            {
                randomNumber = Math.round((Math.random() * upperBound));
            }
            while(randomNumber < lowerBound)
            return randomNumber;
        }
        for(let i = 0; i < 10; i++)
            console.log(produceRandom());
        console.log();
        for(let i = 0; i < 10; i++)
            console.log(produceRandom('100-200'));