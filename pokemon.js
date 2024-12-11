document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=20';
    const containerPokemon = document.getElementById('container__pokemon');

    async function pokemon() {
        try {
            const solicitud = await fetch(apiUrl);
            const data = await solicitud.json();
            const pokemons = data.results;
            
            for (let pokemon of pokemons) {
                const pokeData = await pokemonInfo(pokemon.url);
                cardPokemon(pokeData);
            }

        } catch (error) {
            console.error('Error fetching Pokémon:', error);
        }
    }

    async function pokemonInfo(url) {
        try {
            const solicitud = await fetch(url);
            const data = await solicitud.json();
            return data;
        } catch (error) {
            console.error('Error fetching Pokémon details:', error);
        }
    }

    function cardPokemon(pokemon) {
        const card = document.createElement('div');
        card.className = 'card';
        
        const img = document.createElement('img');
        img.src = pokemon.sprites.front_default;
        img.alt = pokemon.name;

        const name = document.createElement('h3');
        name.textContent = pokemon.name;

        card.appendChild(img);
        card.appendChild(name);
        containerPokemon.appendChild(card);
    }

    pokemon();
});
