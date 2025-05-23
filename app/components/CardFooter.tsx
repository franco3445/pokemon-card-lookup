import {
    CardContent,
    Grid,
    Typography,
} from '@mui/material';
import { styled } from "@mui/material/styles";

import assignToDollar from '@/app/helpers/format';

import type { TCGPlayer } from '@/app/types/tcgplayer';

type Props = {
    artist: string | undefined;
    tcgPlayerPrices: TCGPlayer | undefined;
};

const BorderedGrid = styled(Grid)(({theme}) => ({
    backgroundColor: 'white',
    '--Grid-borderWidth': '2px',
    border: 'var(--Grid-borderWidth) solid',
    borderRadius: '16px',
    padding: '.5em'
}));

const CenteredGrid = styled(Grid)(({theme}) => ({
    display: 'flex',
    justifyContent: 'center',
}));

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
            <BorderedGrid
                columns={3}
                container
                direction="row"
                justifyContent="space-evenly"
                spacing={1}
            >
                <CenteredGrid
                    item
                    size={1}
                    key={`normal_price`}
                >
                    <Typography variant="h6" component="div" align="center">
                        Normal: {normalPrice}
                    </Typography>
                </CenteredGrid>
                <CenteredGrid
                    item
                    size={1}
                    key={`rholo_price`}
                >
                    <Typography variant="h6" component="div" align="center">
                        R-Holo: {reverseHoloPrice}
                    </Typography>
                </CenteredGrid>
                <CenteredGrid
                    item
                    size={1}
                    key={`holo_price`}
                >
                    <Typography variant="h6" component="div" align="center">
                        Holo: {HoloPrice}
                    </Typography>
                </CenteredGrid>
            </BorderedGrid>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Artist: {artist}
            </Typography>
        </CardContent>
    );
}
