import {
    CardContent,
    Typography,
} from '@mui/material';

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

    return (
        <CardContent>
            <Typography variant="h6" component="div">
                Normal: ${tcgPlayerPrices?.prices?.normal?.market}
            </Typography>
            <Typography variant="h6" component="div">
                ReverseHolo: ${tcgPlayerPrices?.prices?.reverseHolofoil?.market}
            </Typography>
            <Typography variant="h6" component="div">
                Holo: ${tcgPlayerPrices?.prices?.holofoil?.market}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Artist: {artist}
            </Typography>
        </CardContent>
    );
}
