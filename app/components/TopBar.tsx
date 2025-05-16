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

import LiveSearch from '@/app/components/LiveSearch';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

type Props = {
    searchTerm: string;
    handleSearchTermChange: ChangeEventHandler;
};

export default function TopBar(props: Props) {
    const {
        searchTerm,
        handleSearchTermChange,
    } = props;

    return (
        <Box>
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        Pokemon Card Look Up
                    </Typography>
                    <Search>
                        <LiveSearch
                            handleSearchTermChange={handleSearchTermChange}
                        />
                    </Search>
                </Toolbar>
            </AppBar>
        </Box>
    )
}