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
}

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

const StyledCard = styled(Card)(({}) => ({
    backgroundColor: 'white',
    borderRadius: '16px',
    maxWidth: 300,
    margin: '0 auto',
    paddingLeft: '1em',
    paddingRight: '1em',
}));

export default function CardGrid(props: Props) {
    const {
        cards
    } = props;
    return (
        <Box>
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
                    let cardColor = 'Colorless';
                    if (card.types) {
                        cardColor = card.types[0];
                    }
                    return (
                        <Grid
                            item
                            size={3}
                            key={`GridItem-${card.id}`} xs={12} sm={6} md={4} lg={2} xl={1}
                        >
                            <StyledCard
                                raised
                                key={card.id}
                                sx={{backgroundColor: typeColorMap[cardColor]}}
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
