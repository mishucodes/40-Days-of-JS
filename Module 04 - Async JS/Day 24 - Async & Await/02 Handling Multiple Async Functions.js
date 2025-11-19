//04. HANDLING MULTIPLE AWAITS:
    //Defining some variables & functions to be used in examples:
        let pikachuAPI = 'https://pokeapi.co/api/v2/pokemon/pikachu';
        let bulbasaurAPI = 'https://pokeapi.co/api/v2/pokemon/bulbasaur';
        let charizardAPI = 'https://pokeapi.co/api/v2/pokemon/charizard';

    //The Example:
        function getPokemonBaseExperience(url)
        {
            return fetch(url).then(response =>
                {
                    if (!response.ok)
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    return response.json();
                })
                .then(data => data.base_experience)
                .catch(error => {throw error;});
        }
        let promisedPokemon1 = getPokemonBaseExperience(pikachuAPI);
        let promisedPokemon2 = getPokemonBaseExperience(bulbasaurAPI);
        let promisedPokemon3 = getPokemonBaseExperience(charizardAPI);
            console.log(promisedPokemon1); //pending promise
            console.log(promisedPokemon2); //pending promise
            console.log(promisedPokemon3); //pending promise
            //Explanation of above:
                //-> return fetch(url).then(...).then(...).catch(...);
                    // fetch(url) gives Promise A.
                    // .then(...) creates Promise B.
                    // .then(...) creates Promise C.
                    // .catch(...) creates Promise D.
                    // "getPokemonBaseExperience()" returns Promise D immediately (while it’s still pending).


    //a) Using multiple awaits in a single async function:
        async function handleMultipleAwaits()
        {
            try
            {
                let results = Promise.all([promisedPokemon1, promisedPokemon2, promisedPokemon3]);
                console.log('Base Experiences:', await results);
            }
            catch(err) {console.log('Error: something went wrong');}
        }
        handleMultipleAwaits();