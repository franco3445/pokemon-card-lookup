import {
    MenuItem,
    Stack,
    Select,
} from '@mui/material';
import React from 'react';


type Props = {
    handleSearchTermChange: () => void;
};

const orderBy = [
    {
        label: 'Name',
        value: 'name',
    },
    {
        label: 'Set Name',
        value: 'set.name',
    },
    {
        label: 'Artist',
        value: 'artist',
    },
]

export default function SortSearch(props: Props) {
    const {
        handleSortTermChange
    } = props;


    return (
        <Stack sx={{width: 300, margin: "auto"}}>
            <Select
                defaultValue={orderBy[0].value}
                label={"Sort By"}
                onChange={handleSortTermChange}
            >
                {orderBy.map(label => {
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