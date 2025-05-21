import { PokemonTCG } from "pokemon-tcg-sdk-typescript";
import { allCards } from '@/app/helpers/allCards'

export const cardSearch =  async function (term: string) {
    const query = `name:"${term}"`;
    const paramsV2: PokemonTCG.Parameter = { q: query, orderBy: 'name' };

    return PokemonTCG.findCardsByQueries(paramsV2)
};
export const pokemonSearch =  async function () {
    return allCards;
};
