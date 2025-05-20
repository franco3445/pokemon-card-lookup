import {
    Box,
    Card,
    CardContent,
    CardHeader,
    CardMedia,
    Grid,
    Typography,
} from '@mui/material';
import * as React from 'react';

import { Card as PokemonCard } from '@/app/types/card';

type Props = {
    cards: PokemonCard[];
}

export default function CardDisplay(props: Props) {
    const {
        cards
    } = props;
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid
                columns={15}
                container
                direction="row"
                justify="space-evenly"
                alignItems="stretch"
                spacing={2}
                sx={{paddingTop: '2em'}}
            >
                {cards.map((card) => {
                    const price = card.tcgplayer?.prices?.normal?.market;
                    const priceHolo = card.tcgplayer?.prices?.holofoil?.market;
                    const priceReverseHolo = card.tcgplayer?.prices?.reverseHolofoil?.market;
                    return (
                        <Grid
                            item
                            size={3}
                            key={`GridItem-${card.id}`} xs={12} sm={6} md={4} lg={2} xl={1}
                        >
                            <Card
                                raised
                                sx={{
                                    backgroundColor: 'silver',
                                    border: 15,
                                    borderColor: 'gray',
                                    borderRadius: '16px',
                                    maxWidth: 300,
                                    margin: "0 auto",
                                    paddingLeft: "1em",
                                    paddingRight: "1em",
                                }}
                                key={card.id}
                            >
                                <CardHeader
                                    title={card.name}
                                    subheader={card.set.name}
                                />
                                <CardMedia
                                    component="img"
                                    style={{height: "auto"}}
                                    image={card.images.large}
                                    title={card.name}
                                    sx={{
                                        objectFit: "contain",
                                    }}
                                />
                                <CardContent>
                                    <Typography variant="h5" component="div">
                                        Normal: {price}
                                    </Typography>
                                    <Typography variant="h5" component="div">
                                        ReverseHolo: {priceReverseHolo}
                                    </Typography>
                                    <Typography variant="h5" component="div">
                                        Holo: {priceHolo}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        {card.artist}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
}
