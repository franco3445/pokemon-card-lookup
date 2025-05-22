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

const StyledCard = styled(Card)(({}) => ({
    backgroundColor: 'silver',
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
                    return (
                        <Grid
                            item
                            size={3}
                            key={`GridItem-${card.id}`} xs={12} sm={6} md={4} lg={2} xl={1}
                        >
                            <StyledCard
                                raised
                                key={card.id}
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
