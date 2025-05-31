import {CardHeader, Grid} from '@mui/material';
import {styled} from "@mui/material/styles";

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

    const handleClick = () => {
        console.log(cardName, setName);
        const url = `https://www.google.com/search?q=${cardName}+${setName}`;
        window.open(url, "_blank");
    };

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
                    cursor: 'pointer',
                    padding: '.5em'
                }}
                onClick={handleClick}
            />
        </BorderedGrid>
    );
}
