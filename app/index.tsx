import React, {useEffect} from 'react';
import { View } from 'react-native';

import CardDisplay from "@/app/components/CardDisplay";
import TopBar from '@/app/components/TopBar';
import { search } from '@/app/helpers/search';

export default function Index() {
    const [ searchTerm, setSearchTerm ] = React.useState('');
    const [ retrievedCards, setRetrievedCards ] = React.useState([]);

    const handleSearchTermChange = async function (event) {
        if ( event.target.value != searchTerm ){
            setSearchTerm(event.target.value);
        }
    };

    useEffect(() => {
        if (searchTerm != '') {
            search(searchTerm)
                .then(cards => {
                    setRetrievedCards(cards);
                })
                .catch(err => console.log(err));
        }
    }, [searchTerm]);

    return (
        <View>
            <TopBar
                searchTerm={searchTerm}
                handleSearchTermChange={handleSearchTermChange}
            />
            <CardDisplay
                cards={retrievedCards}
            />
        </View>
    );
}
