import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import { useState } from 'react';
import "./UserMenu.css"

export default function TemporaryDrawer({ isOpen, toggleDrawer, setCustomTime }) {

    const [hrs, setHours] = useState(0);
    const [min, setMinutes] = useState(25);
    const [sec, setSeconds] = useState(0);

    const handelSubmit = (event) => {
        event.preventDefault();
        setCustomTime({ hrs, min, sec })
    }

    const DrawerList = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={() => toggleDrawer(false)}
        >
            <List>
                <ListItem>
                    <form className='setCustomTime' onSubmit={handelSubmit}>
                        <div className="input">
                            <input type="number" placeholder='hrs' onChange={(e) => setHours(+e.target.value)} value={hrs}/>
                            <input type="number" placeholder='min' onChange={(e) => setMinutes(+e.target.value)} value={min} />
                            <input type="number" placeholder='sec' onChange={(e) => setSeconds(+e.target.value)} value={sec} />
                        </div>
                        <button id='setCustomTimeBtn'>Set Time</button>
                    </form>
                </ListItem>
                <Divider variant='middle' style={{ color: "black" }}></Divider>
                <ListItem>
                    <PersonIcon></PersonIcon>User Profile
                </ListItem>
                <ListItem>
                    <SettingsIcon></SettingsIcon> Settings
                </ListItem>
            </List>
        </Box>
    );

    return (
        <div>
            <Drawer
                open={isOpen}
                onClose={()=>toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </div>
    );
}
