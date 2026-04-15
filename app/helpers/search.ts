import {PokemonTCG} from "pokemon-tcg-sdk-typescript";
import {allCards} from '@/app/helpers/allCards'

export const cardSearch =  async function (searchTerm: string, sortTerm: string, searchByTerm: string) {
    const query = `${searchByTerm}:"${searchTerm}"`;
    console.log(query);
    const paramsV2: PokemonTCG.Parameter = { q: query, orderBy: sortTerm };
    return PokemonTCG.findCardsByQueries(paramsV2)
};
export const pokemonSearch =  async function () {
    return allCards;
};
