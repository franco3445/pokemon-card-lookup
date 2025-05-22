import {
    CardContent,
    Grid,
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
            <Grid
                columns={3}
                container
                direction="row"
                justifyContent="space-evenly"
                spacing={2}
            >
                <Grid
                    item
                    size={1}
                    key={`normal_price`}
                >
                    <Typography variant="h6" component="div">
                        Normal: {normalPrice}
                    </Typography>
                </Grid>
                <Grid
                    item
                    size={1}
                    key={`rholo_price`}
                >
                    <Typography variant="h6" component="div">
                        R-Holo: {reverseHoloPrice}
                    </Typography>
                </Grid>
                <Grid
                    item
                    size={1}
                    key={`holo_price`}
                >
                    <Typography variant="h6" component="div">
                        Holo: {HoloPrice}
                    </Typography>
                </Grid>
            </Grid>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Artist: {artist}
            </Typography>
        </CardContent>
    );
}
