import React, {useEffect} from 'react';
import {
    Backdrop,
    CircularProgress,
} from '@mui/material/';

import CardDisplay from "@/app/components/CardDisplay";
import TopBar from '@/app/components/TopBar';
import { cardSearch } from '@/app/helpers/search';
import { Card as PokemonCard } from '@/app/types/card';

export default function Index() {
    const [ searchTerm, setSearchTerm ] = React.useState('');
    const [ retrievedCards, setRetrievedCards ] = React.useState<PokemonCard[]>([]);
    const [loading, setLoading] = React.useState(false);

    const handleClose = () => {
        setLoading(false);
    };
    const handleToggle = () => {
        setLoading(!loading);
    };

    const handleSearchTermChange = async function (event: React.ChangeEvent, value: string): void {
        handleToggle();
        setSearchTerm(value);
    };

    useEffect(() => {
        cardSearch(searchTerm)
            .then(cards => {
                console.log(cards);
                setRetrievedCards(cards);
                handleClose();
            })
            .catch(err => console.log(err));
    }, [searchTerm]);

    return (
        <div style={{overflowY: 'auto', height: '100vh'}}>
            <TopBar
                handleSearchTermChange={handleSearchTermChange}
            />
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={loading}
                onClick={handleClose}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
            <CardDisplay
                cards={retrievedCards}
            />
        </div>
    );
}
