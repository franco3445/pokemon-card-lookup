import React, {useEffect} from 'react';

import CardDisplay from "@/app/components/CardDisplay";
import TopBar from '@/app/components/TopBar';
import { cardSearch } from '@/app/helpers/search';
import { Card as PokemonCard } from '@/app/types/card';

export default function Index() {
    const [ searchTerm, setSearchTerm ] = React.useState('');
    const [ retrievedCards, setRetrievedCards ] = React.useState<PokemonCard[]>([]);

    const handleSearchTermChange = async function (event: React.ChangeEvent, value: string): void {
        setSearchTerm(value);
    };

    useEffect(() => {
        cardSearch(searchTerm)
            .then(cards => {
                console.log(cards);
                setRetrievedCards(cards);
            })
            .catch(err => console.log(err));
    }, [searchTerm]);

    return (
        <div style={{overflowY: 'auto', height: '100vh'}}>
            <TopBar
                searchTerm={searchTerm}
                handleSearchTermChange={handleSearchTermChange}
            />
            <CardDisplay
                cards={retrievedCards}
            />
        </div>
    );
}
