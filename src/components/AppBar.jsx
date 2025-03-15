import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { ExpandMore } from '@mui/icons-material';

const pages = ['Home', 'Acera', 'Centenio', "Elige Tu Pais"];
const pays = ['perù', 'Agentina', 'Bolivia', 'Chille'];
function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const [anchorElm, setAnchorEl] = React.useState(null)
    const [openMenu, setOpenMenu] = React.useState(false)

    const handleOpenMenu = (e) => {
        setAnchorEl(e.target)
        setOpenMenu(!openMenu)
    }

    const handleCloseMenu = () => {
        setAnchorEl(null)
        setOpenMenu(!openMenu)
    }

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="fixed" sx={{ px: "30px", backgroundColor: "rgb(0,0,0, 0.2)" }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontSize: "23px",
                            gap: "2px",
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        <span style={{ color: "#f17404" }}>FLIX</span><span> PRIME</span>
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, alignItems: "center"}}>
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            <span style={{ color: "#f17404" }}>FLIX</span><span> PRIME</span>
                        </Typography>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: 'block', md: 'none', } }}
                            slotProps={{
                                list: {
                                    sx: {
                                        bgcolor: "black", // Fond du menu en noir
                                        color: "white", // Texte blanc pour lisibilité
                                    },
                                },
                            }}
                        >
                            {pages.map((page) => (
                                page === pages[(pages.length - 1)] ?
                                    <MenuItem
                                        key={page}
                                        onClick={handleOpenMenu}
                                        sx={{ my: 2, color: 'white', display: 'block', display: "flex", alignItems: "center", gap: "5px", "&:hover": { color: "#f17404" }, }}
                                    >
                                        {page}
                                        <ExpandMore fontSize="small" />
                                    </MenuItem> :
                                    <MenuItem key={page} onClick={handleCloseNavMenu}
                                        sx={{
                                            "&:hover": { color: "#f17404" },
                                        }}
                                    >
                                        {page}
                                    </MenuItem>
                            ))}
                            <Box>
                                <Button size="large" sx={{ fontWeight: "bold", color: "white", background: "#f17404", textTransform: "none" }}>
                                    Contacter nous
                                </Button>
                            </Box>
                        </Menu>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: "center" }}>
                        {pages.map((page) => (
                            page === pages[(pages.length - 1)] ?
                                <Button
                                    key={page}
                                    onClick={handleOpenMenu}
                                    sx={{
                                        my: 2, color: 'white',
                                        display: 'block',
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "5px",
                                        "&:hover": { color: "#f17404" },
                                    }}
                                >
                                    {page}
                                    <ExpandMore fontSize="small" />
                                    <Menu
                                        open={openMenu}
                                        onClose={handleCloseMenu}
                                        anchorEl={anchorElm}
                                        sx={{ display: "flex", flexDirection: "column" }}
                                        slotProps={{
                                            list: {
                                                sx: {
                                                    bgcolor: "black", // Fond du menu en noir
                                                    color: "white", // Texte blanc pour lisibilité
                                                },
                                            },
                                        }}
                                    >
                                        {pays.map((pays, i) => (
                                            <MenuItem key={i}
                                                sx={{
                                                    "&:hover": { color: "#f17404" },
                                                }}
                                            >
                                                <Button color="inherit ">
                                                    {pays}
                                                </Button>
                                            </MenuItem>
                                        ))}
                                    </Menu>
                                </Button> :
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block', "&:hover": { color: "#f17404" } }}
                                >
                                    {page}
                                </Button>
                        ))}
                    </Box>
                    <Box sx={{ display: { xs: "none", sm: "flex" } }}>
                        <Button size="large" sx={{ fontWeight: "bold", color: "white", background: "#f17404", textTransform: "none" }}>
                            Contacter nous
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;
