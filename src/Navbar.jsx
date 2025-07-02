import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import UserMenu from './UserMenu'
import "./Navbar.css"

// icons
import PersonIcon from '@mui/icons-material/Person';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

const bgm = new Audio("bgm.mp3");

function DrawerAppBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [playMusic, setMusic] = React.useState(false);

    const handeluser = () => {
        console.log("user clicked");
    }

    const handelMusic = () => {
        setMusic(!playMusic);
        if(playMusic){
            bgm.play();
        }
    }

    const handelSetting = () => {
        console.log("settings clicked");
    }

    // const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar component="nav">
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                    Zenith
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        <button onClick={handelMusic} className='control-btn'>
                            <MusicNoteIcon></MusicNoteIcon>
                        </button>
                        <UserMenu></UserMenu>
                        <button onClick={handelSetting} className='control-btn'>
                            <SettingsOutlinedIcon></SettingsOutlinedIcon>
                        </button>
                    </Box>
                </Toolbar>
            </AppBar>
           
            <Box component="main" sx={{ p: 3 }}>
                <Toolbar />
            </Box>
        </Box>
    );
}

DrawerAppBar.propTypes = {
    window: PropTypes.func,
};

export default DrawerAppBar;


// --------------------------------
// import CssBaseline from '@mui/material/CssBaseline';
// import Divider from '@mui/material/Divider';
// import Drawer from '@mui/material/Drawer';
// import IconButton from '@mui/material/IconButton';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
// import MenuIcon from '@mui/icons-material/Menu';
// import Button from '@mui/material/Button';

// For mobile
    //  For mobile icon 
    // const handleDrawerToggle = () => {
    //     setMobileOpen((prevState) => !prevState);
    //     console.log("icon clicked");
    // };

    // For mobile drwer
    // const drawerWidth = 200;
    // const drawer = (
    //     <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
    //         <Typography variant="h6" sx={{ my: 2 }}>
    //             MUI
    //         </Typography>
    //         <Divider />
    //         <List>
    //             <PersonIcon></PersonIcon>
    //         </List>
    //     </Box>
    // );
    // ------------------------
    // <IconButton
    //                     color="inherit"
    //                     aria-label="open drawer"
    //                     edge="start"
    //                     onClick={handleDrawerToggle}
    //                     sx={{ mr: 2, display: { sm: 'none' } }}
    //                 >
    //                 <MenuIcon />
    //                 </IconButton>

    // --------------------------
    //  <nav>
    //             <Drawer
    //                 container={container}
    //                 variant="temporary"
    //                 open={mobileOpen}
    //                 onClose={handleDrawerToggle}
    //                 ModalProps={{
    //                     keepMounted: true, // Better open performance on mobile.
    //                 }}
    //                 sx={{
    //                     display: { xs: 'block', sm: 'none' },
    //                     '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
    //                 }}
    //             >
    //                 {drawer}
    //             </Drawer>
    //         </nav>