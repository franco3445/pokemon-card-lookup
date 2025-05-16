import {
    Box,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    Typography,
} from '@mui/material';
import * as React from 'react';

export default function CardDisplay(props) {
    const {
        cards
    } = props;
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="stretch"
                spacing={2}
            >
                {cards.map((card) => {
                    const price = card.tcgplayer?.prices?.mid || card.cardmarket?.prices?.averageSellPrice;
                    return (
                        <Grid item
                              key={`GridItem-${card.id}`} xs={12} sm={6} md={4} lg={2} xl={1}
                        >
                            <Card
                                sx={{ maxWidth: 345 }}
                                key={card.id}
                            >
                                <CardMedia
                                    style={{
                                        height: '342px',
                                        width: '245px',
                                }}
                                    image={card.images.small}
                                    title={card.name}
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {card.name}
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    {card.set.name}
                                </Typography>
                                </CardContent>
                                <CardActions>
                                <Typography variant="subtitle1">{card.artist}</Typography>
                                <Typography variant="subtitle1">${price}</Typography>
                                </CardActions>
                            </Card>
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
}
