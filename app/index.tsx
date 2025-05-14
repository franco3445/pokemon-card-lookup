import TopBar from '@/app/components/TopBar';
import { PokemonTCG } from 'pokemon-tcg-sdk-typescript';
import React, {useEffect} from 'react';
import { View } from 'react-native';

export default function Index() {
    const [ searchTerm, setSearchTerm ] = React.useState('');

    const handleSearchTermChange = async function (event) {
        if ( event.target.value != searchTerm ){
            setSearchTerm(event.target.value);
        }
    };

    const search =  async function (term) {
        const query = `name:${term}`;
        const paramsV2: PokemonTCG.Parameter = { q: query };

        const cards = await PokemonTCG.findCardsByQueries(paramsV2)
        console.log(cards);
    };

    useEffect(() => {
        if (searchTerm != '') {
            search(searchTerm)
                .then(r => console.log('search complete'))
                .catch(err => console.log(err));
        }
    }, [searchTerm]);

    return (
        <View>
            <TopBar
                searchTerm={searchTerm}
                handleSearchTermChange={handleSearchTermChange}
            />
        </View>
    );
}
