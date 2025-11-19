//Defining some variables & functions to be used in examples:
let pikachuAPI = 'https://pokeapi.co/api/v2/pokemon/pikachuu'; //wrong URL to demonstrate error handling...
let bulbasaurAPI = 'https://pokeapi.co/api/v2/pokemon/bulbasaur';
let charizardAPI = 'https://pokeapi.co/api/v2/pokemon/charizard';
function getPokemonBaseExperience(url)
{
    return fetch(url).then(response =>
        {
            if (!response.ok)
                throw new Error(`HTTP error! Status: ${response.status}`);
            else
                return response.json();
        })
        .then(data => data.base_experience)
        .catch(error => {throw error;});
}
let promisedPokemon1 = getPokemonBaseExperience(pikachuAPI);
let promisedPokemon2 = getPokemonBaseExperience(bulbasaurAPI);
let promisedPokemon3 = getPokemonBaseExperience(charizardAPI);



//HANDLING MULTIPLE PROMISES: We'll be using some static methods of Promise to handle multiple promises.
    //a) promise.all(): It takes an array of promises & waits for all of them to be resolved or for any of them to be rejected:
        Promise.all([promisedPokemon1, promisedPokemon2, promisedPokemon3])
            .then((experiences) =>
            {
                console.log('Individual Experiences:', experiences);
                let totalExperience = experiences.reduce((a, b) => a + b);
                console.log('Total Base Experience:', totalExperience);
            })
            .catch(() => console.error('Error in fetching experiences'));

    //b) promise.any(): It takes an array of promises & waits for the any one to be resolved:
        Promise.any([promisedPokemon1, promisedPokemon2, promisedPokemon3])
            .then((firstExperience) => console.log('First Resolved Experience:', firstExperience))
            .catch(() => console.error('All promises were rejected'));

    //c) promise.allSettled(): Waits for all promises to be settled (either resolved or rejected):
        Promise.allSettled([promisedPokemon1, promisedPokemon2, promisedPokemon3])
            .then((results) => console.log('All Settled Results:', results))
            .catch(() => console.error('Error in settling promises'));
                //NOTE: ".catch()" is meaningless here, since ".allSettled()" never rejects...

    //d) promise.race(): Handles the first settled promise (either resolved or rejected):
        Promise.race([promisedPokemon1, promisedPokemon2, promisedPokemon3])
            .then((firstResult) => console.log('First Settled Result:', firstResult))
            .catch(() => console.error('First settled promise was rejected'));