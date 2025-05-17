import {
    Autocomplete,
    Stack,
    TextField,
} from '@mui/material';
import React, {
    useState,
    useEffect
} from 'react';

import { pokemonSearch } from '@/app/helpers/search';

type Props = {
    handleSearchTermChange: () => void;
}

type pokemonInformation = {
    name: string;
    url: string;
}

export default function LiveSearch(props: Props) {
    const {
        handleSearchTermChange
    } = props;
    const [pokemonList, setPokemonList] = useState([]);

    useEffect(() => {
        pokemonSearch()
            .then(results => {
                setPokemonList(results.results.map((pokemon: pokemonInformation) => pokemon.name));
            });
    },
    []
    )
    return (
        <Stack sx={{widsdfgsdfgth: 300, margin: "auto"}}>
            <Autocomplete
                id="search_input"
                getOptionLabel={(pokemon) => pokemon}
                options={pokemonList}
                sx={{width: 300}}
                isOptionEqualToValue={(option, value) =>
                    option === value
                }
                onChange={handleSearchTermChange}
                noOptionsText={"No Pokemon Found..."}
                renderInput={(params) => <TextField {...params} label="Search for a Pokemon"/>}
            />
        </Stack>
    )
}