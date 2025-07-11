import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Themes from "./Themes.jsx"
import CloseIcon from '@mui/icons-material/Close';
import SaveIcon from '@mui/icons-material/Save';
import SettingsIcon from '@mui/icons-material/Settings';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import { ListItem, ListItemIcon } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import CustomSound from "./CustomSound.jsx"
import SetBGMVolume from './SetBGMVolume.jsx';

export default function UserProfile({setVolume,volume}) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>


            <ListItemButton onClick={handleClickOpen}>
                <ListItemIcon id='userIcon'>
                    <PersonIcon />
                </ListItemIcon>
                <ListItemText primary="Profile" />
            </ListItemButton>

            <Dialog
                fullWidth={true}
                maxWidth={'sm'}
                open={open}
                onClose={handleClose}
            >

                <DialogTitle>Coming Soon....</DialogTitle>
                <DialogContent>
                    <Box >
                        In devlopment...
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}> <SaveIcon />Save</Button>
                    <Button onClick={handleClose}> <CloseIcon />Close </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
