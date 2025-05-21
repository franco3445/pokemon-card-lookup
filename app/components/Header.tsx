import { CardHeader } from '@mui/material';

type Props = {
    cardName: string;
    setName: string;
};

export default function Header(props: Props) {
    const {
        cardName,
        setName,
    } = props;

    return (
        <CardHeader
            title={cardName}
            subheader={setName}
        />
    );
}
