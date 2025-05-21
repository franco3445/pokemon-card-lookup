import {
    CardContent,
    Typography,
} from '@mui/material';

import assignToDollar from '@/app/helpers/format';

import type { TCGPlayer } from '@/app/types/tcgplayer';


type Props = {
    artist: string | undefined;
    tcgPlayerPrices: TCGPlayer | undefined;
};

export default function CardFooter(props: Props) {
    const {
        artist,
        tcgPlayerPrices,
    } = props;

    const normalPrice = assignToDollar(tcgPlayerPrices?.prices?.normal?.market)
    const reverseHoloPrice = assignToDollar(tcgPlayerPrices?.prices?.reverseHolofoil?.market)
    const HoloPrice = assignToDollar(tcgPlayerPrices?.prices?.holofoil?.market)

    return (
        <CardContent>
            <Typography variant="h6" component="div">
                Normal: {normalPrice}
            </Typography>
            <Typography variant="h6" component="div">
                ReverseHolo: {reverseHoloPrice}
            </Typography>
            <Typography variant="h6" component="div">
                Holo: {HoloPrice}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Artist: {artist}
            </Typography>
        </CardContent>
    );
}
