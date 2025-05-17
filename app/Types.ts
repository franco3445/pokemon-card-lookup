// export type PokemonCard = {
//     id: string;
//     name: string;
//     supertype: string;
//     subtypes: string[];
//     hp?: string;
//     types?: string[];
//     evolesFrom?: string;
//     evolvesTo?: string[];
//     rules?: string[];
//     abilities?: Ability[];
//     attacks?: Attack[];
//     weaknesses?: Weakness[];
//     resistances?: Resistance[];
//     retreatCost?: string[];
//     convertedRetreatCost?: number;
//     set: Set;
//     number: string;
//     artist?: string;
//     rarity: string;
//     flavorText?: string;
//     nationalPokedexNumbers?: number[];
//     legalities: ILegality;
//     images: CardImage;
//     tcgplayer?: TCGPlayer;
//     cardmarket?: Cardmarket;
// }
//
// export type Ability = {
//     name: string;
//     text: string;
//     type: string;
// }
//
// export type AncientTrait = {
//     name: string;
//     text: string;
// }
//
// export type Attack = {
//     cost: string[];
//     name: string;
//     text: string;
//     damage: string;
//     convertedEnergyCost: number;
// }
//
// export type CardImage = {
//     large: string;
//     small: string;
// }
//
// export type Cardmarket = {
//     prices: CardMarketPrice;
//     updatedAt: string;
//     url: string;
// }
//
// export type CardMarketPrice = {
//     averageSellPrice: number;
//     avg1: number;
//     avg7: number;
//     avg30: number;
//     germanProLow: number;
//     lowPrice: number;
//     lowPriceExPlus: number;
//     reverseHoloAvg1: number;
//     reverseHoloAvg7: number;
//     reverseHoloAvg30: number;
//     reverseHoloLow: number;
//     reverseHoloSell: number;
//     reverseHoloTrend: number;
//     suggestedPrice: number;
//     trendPrice: number;
// }
//
// export declare enum Legality {
//     Legal = "Legal",
//     Banned = "Banned"
// }
//
// export interface ILegality {
//     expanded?: any;
//     standard?: any;
//     unlimited?: any;
// }
//
// export type Resistance = {
//     type: string;
//     value: string;
// }
//
// export type Set = {
//     id: string;
//     images: SetImage;
//     legalities: ILegality;
//     name:  string;
//     printedTotal: number;
//     ptcgoCode: string;
//     releaseDate: string;
//     series:  string;
//     total: number;
//     updatedAt: string;
// }
//
// export type SetImage = {
//     logo: string;
//     symbol: string;
// }
//
// export type TCGPlayer = {
//     prices: TCGPlayerPriceTypes;
//     updatedAt: string;
//     url: string;
// }
//
// export type TCGPlayerPrices = {
//     low: number | null;
//     mid: number | null;
//     high: number | null;
//     market: number | null;
//     directLow: number | null;
// }
//
// export type TCGPlayerPriceTypes = {
//     normal?: TCGPlayerPrices;
//     holofoil?: TCGPlayerPrices;
//     reverseHoloFoil?: TCGPlayerPrices;
// }
//
// export type Weakness = {
//     type: string;
//     value: string;
// }
