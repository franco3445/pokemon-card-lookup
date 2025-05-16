import SearchIcon from '@mui/icons-material/Search';
import {
    AppBar,
    Box,
    InputBase,
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

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
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