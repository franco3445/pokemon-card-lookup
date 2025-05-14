import { PokemonTCG } from "pokemon-tcg-sdk-typescript";

export const search =  async function (term) {
    const query = `name:${term}`;
    const paramsV2: PokemonTCG.Parameter = { q: query };

    return PokemonTCG.findCardsByQueries(paramsV2)
};
