const USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

export default function assignToDollar(dollarValue: number | null | undefined) {
    dollarValue ||= 0;
    return USDollar.format(dollarValue)
}
