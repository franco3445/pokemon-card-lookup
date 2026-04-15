export interface TCGPlayer {
    url: string;
    updatedAt: string;
    prices: {
        normal?: Price;
        holofoil?: Price;
        reverseHolofoil?: Price;
        '1stEdition'?: Price;
        unlimited?: Price;
    };
}
export interface Price {
    low: number | null;
    mid: number | null;
    high: number | null;
    market: number | null;
    directLow: number | null;
}
