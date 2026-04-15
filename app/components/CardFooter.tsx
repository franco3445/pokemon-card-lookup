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

    const prices = tcgPlayerPrices?.prices || [];
    const columns = Object.entries(prices).map(()=> {}).length;

    return (
        <CardContent>
            <BorderedGrid
                columns={columns}
                container
                direction="row"
                justifyContent="space-evenly"
                spacing={1}
            > {Object.entries(prices).map(([key, value]) => {
                // Pretty straightforward - use key for the key and value for the value.
                // Just to clarify: unlike object destructuring, the parameter names don't matter here.
                const convertedLabel = key
                    .replace(/([A-Z])/g, ' $1') // Insert space before capital letters
                    .replace(/^./, str => str.toUpperCase()) // Capitalize first letter
                    .trim();

                return (
                    <CenteredGrid
                        item
                        size={1}
                        key={key}
                    >
                        <Typography variant="h6" component="div" align="center">
                            {convertedLabel}:<br/>
                            {assignToDollar(value.market)}
                        </Typography>
                    </CenteredGrid>
                )
            })}
            </BorderedGrid>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Artist: {artist}
            </Typography>
        </CardContent>
    );
}
