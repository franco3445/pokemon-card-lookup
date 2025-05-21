import { CardMedia } from "@mui/material";


type Props = {
    cardUrl: string | undefined;
    cardImageUrl: string;
    cardName: string;
}

export default function CardDisplay(props: Props) {
    const {
        cardUrl,
        cardImageUrl,
        cardName,
    } = props;

    return (
        <a
            href={cardUrl}
            target="_blank"
            rel="noopener noreferrer"
        >
            <CardMedia
                component="img"
                style={{height: "auto"}}
                image={cardImageUrl}
                title={cardName}
                sx={{
                    objectFit: "contain",
                }}
            />
        </a>
    );
}
