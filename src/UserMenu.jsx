import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';

export default function TemporaryDrawer({isOpen,toggleDrawer}) {

    const DrawerList = (
        <Box 
        sx={{ width: 250 }} 
        role="presentation" 
        onClick={()=> toggleDrawer(false)}
        >
            <List>
                {['set time','user','settings','about us'].map((text) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div>
            <Drawer 
            open={isOpen} 
            onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </div>
    );
}
