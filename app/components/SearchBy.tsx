import {
    MenuItem,
    Stack,
    Select,
} from '@mui/material';
import React from 'react';


type Props = {
    handleSearchTermChange: () => void;
};

const searchBy = [
    {
        label: 'Search By Name',
        value: 'name',
    },
    {
        label: 'Search By Artist',
        value: 'artist',
    },
]

export default function SearchBy(props: Props) {
    const {
        handleSearchByTermChange
    } = props;


    return (
        <Stack sx={{width: 300, margin: "auto"}}>
            <Select
                defaultValue={searchBy[0].value}
                label={"Search By"}
                onChange={handleSearchByTermChange}
                sx={{
                    backgroundColor: 'white',
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'black',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'black',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'black',
                    },
                }}
            >
                {searchBy.map(label => {
                    return (
                        <MenuItem
                            key={label.value}
                            value={label.value}
                        >
                            {label.label}
                        </MenuItem>
                    )
                })}
            </Select>
        </Stack>
    )
}