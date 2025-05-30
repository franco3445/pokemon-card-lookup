import {
    Box,
    Card,
    Grid,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import * as React from 'react';

import CardDisplay from '@/app/components/CardDisplay';
import CardFooter from '@/app/components/CardFooter';
import Header from '@/app/components/Header';
import { Card as PokemonCard } from '@/app/types/card';

type Props = {
    cards: PokemonCard[];
};

const typeColorMap = {
    Colorless: '#A8A77A',
    Fire: '#B31B1B',
    Water: '#8FD9FB',
    Lightning: '#F7D02C',
    Grass: '#7AC74C',
    Fighting: '#EE8130',
    Psychic: '#735797',
    Dragon: '#705746',
    Darkness: '#353E43',
    Metal: '#B7B7CE',
    Fairy: '#D685AD',
};

const StyledCard = styled(Card)(() => ({
    backgroundColor: 'white',
    borderRadius: '16px',
    maxWidth: 300,
    margin: '0 auto',
    paddingLeft: '1em',
    paddingRight: '1em',
}));

export default function CardGrid({ cards }: Props) {
    return (
        <Box>
            <Grid
                container
                spacing={2}
                justifyContent="center"
                alignItems="stretch"
                sx={{
                    paddingTop: '5em',
                    flexWrap: 'wrap',
                }}
            >
                {cards.map((card) => {
                    const cardColor = card.types?.[0] || 'Colorless';
                    return (
                        <Grid
                            item
                            key={`GridItem-${card.id}`}
                            xs={12}
                            sm={6}
                            md={4}
                            lg={3}
                            xl={2.4}
                        >
                            <StyledCard
                                raised
                                sx={{ backgroundColor: typeColorMap[cardColor] }}
                            >
                                <Header
                                    cardName={card.name}
                                    setName={card.set.name}
                                />
                                <CardDisplay
                                    cardUrl={card.tcgplayer?.url || ''}
                                    cardImageUrl={card.images.large}
                                    cardName={card.name}
                                />
                                <CardFooter
                                    artist={card.artist}
                                    tcgPlayerPrices={card.tcgplayer}
                                />
                            </StyledCard>
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
}
