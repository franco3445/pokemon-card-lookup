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
    const [pokemonList, setPokemonList] = useState<string[]>([]);

    useEffect(() => {
        pokemonSearch()
            .then(results => {
                const uniquePokemonNames = results.map((pokemonName: string )=> pokemonName)
                    .sort()
                    .filter(function(item, pos, self) {
                    return self.indexOf(item) == pos;
                });
                setPokemonList(uniquePokemonNames);
            });
    },
    []
    )
    return (
        <Stack sx={{width: 300, margin: "auto"}}>
            <Autocomplete
                id="search_input"
                freeSolo={true}
                getOptionLabel={(pokemon) => pokemon}
                options={pokemonList}
                sx={{width: 300}}
                isOptionEqualToValue={(option, value) =>
                    option === value
                }
                onChange={handleSearchTermChange}
                noOptionsText={"No Pokemon Found..."}
                renderInput={(params) => <TextField
                    {...params}
                    label="Search for a Pokemon"
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            '&.Mui-focused fieldset': {
                                borderColor: 'black',
                            },
                            backgroundColor: 'white',
                        },
                        '& label': {
                            color: 'black',
                        },
                        '& label.Mui-focused': {
                            color: 'black',
                        },
                    }}
                />}
            />
        </Stack>
    )
}