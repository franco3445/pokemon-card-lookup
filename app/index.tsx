import TopBar from '@/app/components/TopBar';
import React from 'react';
import { View } from 'react-native';

export default function Index() {
    const [ searchTerm, setSearchTerm ] = React.useState('');
    const handleSearchTermChange = async function (event) {
        setSearchTerm(event.target.value);
    }

    return (
        <View>
            <TopBar
                searchTerm={searchTerm}
                handleSearchTermChange={handleSearchTermChange}
            />
        </View>
    );
}
