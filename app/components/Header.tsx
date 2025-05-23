import {
    CardHeader,
    Grid
} from '@mui/material';
import { styled } from "@mui/material/styles";

type Props = {
    cardName: string;
    setName: string;
};

const BorderedGrid = styled(Grid)(({theme}) => ({
    paddingBottom: '.5em',
    paddingTop: '.5em',
}));

export default function Header(props: Props) {
    const {
        cardName,
        setName,
    } = props;

    return (
        <BorderedGrid>
            <CardHeader
                title={cardName}
                subheader={setName}
                sx={{
                    backgroundColor: 'white',
                    '--Grid-borderWidth': '2px',
                    border: 'var(--Grid-borderWidth) solid',
                    borderRadius: '16px',
                    padding: '.5em'
                }}
            />
        </BorderedGrid>
    );
}
