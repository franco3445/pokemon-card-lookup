export interface Cardmarket {
    prices: CardMarketPrice;
    updatedAt: string;
    url: string;
}

export interface CardMarketPrice {
    averageSellPrice: number;
    avg1: number;
    avg7: number;
    avg30: number;
    germanProLow: number;
    lowPrice: number;
    lowPriceExPlus: number;
    reverseHoloAvg1: number;
    reverseHoloAvg7: number;
    reverseHoloAvg30: number;
    reverseHoloLow: number;
    reverseHoloSell: number;
    reverseHoloTrend: number;
    suggestedPrice: number;
    trendPrice: number;
}