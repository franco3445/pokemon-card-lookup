import React, {useEffect} from 'react';
import {
    Backdrop,
    Box,
    CircularProgress,
} from '@mui/material/';

import CardGrid from "@/app/components/CardGrid";
import TopBar from '@/app/components/TopBar';
import { cardSearch } from '@/app/helpers/search';
import { Card } from '@/app/types/card';

export default function Index() {
    const [ searchByTerm, setSearchByTerm ] = React.useState('name');
    const [ searchTerm, setSearchTerm ] = React.useState('');
    const [ sortTerm, setSortTerm ] = React.useState('name');
    const [ retrievedCards, setRetrievedCards ] = React.useState<Card[]>([]);
    const [loading, setLoading] = React.useState(false);

    const handleClose = () => {
        setLoading(false);
    };
    const handleToggle = () => {
        setLoading(!loading);
    };

    const handleSearchTermChange = async function (event: React.ChangeEvent, value: string): Promise<void> {
        if (!value) {
            return;
        }
        handleToggle();
        setSearchTerm(value);
    };

    const handleSearchByTermChange = async function (event: React.ChangeEvent, value: string): Promise<void> {
        if (!value) {
            return;
        }
        handleToggle();
        setSearchByTerm(event.target.value)
    };

    const handleSortTermChange = async function (event: React.ChangeEvent, value: string): Promise<void> {
        handleToggle();
        setSortTerm(event.target.value);
    };

    useEffect(() => {
        cardSearch(searchTerm, sortTerm, searchByTerm)
            .then(cards => {
                setRetrievedCards(cards);
            })
            .catch(err => console.log(err))
            .finally(() => handleClose());
    }, [
        searchByTerm,
        searchTerm,
        sortTerm,
    ]);

    return (
        <Box
            sx={{
                backgroundImage: 'url(https://i.imgur.com/444EbWN.jpeg)',
                height: '100%',
                overflow: 'auto'
        }}
        >
            <TopBar
                handleSearchByTermChange={handleSearchByTermChange}
                handleSearchTermChange={handleSearchTermChange}
                handleSortTermChange={handleSortTermChange}
            />
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={loading}
                onClick={handleClose}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
            <CardGrid
                cards={retrievedCards}
            />
        </Box>
    );
}
