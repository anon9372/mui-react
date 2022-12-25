import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth';

export default function SearchAppBar() {

    const navigate = useNavigate()
    const auth = useAuth()

    const routeChange = () => {
        let path = `/add`;
        navigate(path);
    }

    const handleLoginPage = () => {
        let path = '/login'
        navigate(path)
    }

    const handleLogout = () => {
        auth.logout()
        navigate('/')
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        TOURS
                    </Typography>
                    {auth.user && <Typography variant='h6'>
                        Hello, {auth.user}!
                    </Typography>}
                    <Button color="primary" variant='outline' className="px-4"
                        onClick={routeChange}
                    >
                        Add
                    </Button>

                    {!auth.user && <Button color="primary" variant='outline' className="px-4"
                        onClick={handleLoginPage}
                    >
                        Login
                    </Button>}
                    {auth.user && <Button color="primary" variant='outline' className="px-4"
                        onClick={handleLogout}
                    >
                        Logout
                    </Button>}

                </Toolbar>
            </AppBar>
        </Box>
    );
}
