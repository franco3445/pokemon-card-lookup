import {
    AppBar,
    Box,
    Toolbar,
    Typography,
} from '@mui/material';
import {
    alpha,
    styled,
} from '@mui/material/styles';
import { ChangeEventHandler } from 'react';

import PokemonSearch from '@/app/components/PokemonSearch';
import SortSearch from '@/app/components/SortSearch';

const StyledToolBar = styled(Toolbar)(({theme}) => ({
    backgroundColor: '#f2c524',
}));

const StyledTypography = styled(Typography)(({theme}) => ({
    color: 'black',
    flexGrow: 1,
}));

type Props = {
    handleSearchTermChange: ChangeEventHandler;
    handleSortTermChange: ChangeEventHandler;
};

export default function TopBar(props: Props) {
    const {
        handleSearchTermChange,
        handleSortTermChange,
    } = props;

    return (
        <Box>
            <AppBar>
                <StyledToolBar>
                    <StyledTypography
                        variant="h6"
                        noWrap
                    >
                        Pokemon Card Look Up
                    </StyledTypography>
                    <SortSearch
                        handleSortTermChange={handleSortTermChange}
                    />
                    <PokemonSearch
                        handleSearchTermChange={handleSearchTermChange}
                    />
                </StyledToolBar>
            </AppBar>
        </Box>
    )
}