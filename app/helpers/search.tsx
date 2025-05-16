import { PokemonTCG } from "pokemon-tcg-sdk-typescript";

export const cardSearch =  async function (term: string) {
    const query = `name:${term}`;
    const paramsV2: PokemonTCG.Parameter = { q: query };

    return PokemonTCG.findCardsByQueries(paramsV2)
};
export const pokemonSearch =  async function () {
    const json = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');
    return await json.json();
};
