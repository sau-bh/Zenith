import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import "./NavMenu.css"
import UserMenu from './UserMenu'

export default function NavMenu({ setCustomTime, setCustomBreakTime, setVolume, volume }) {
    const [isDrawer, setIsDrawer] = useState(false);

    const toggleDrawer = (open) => () => {
        setIsDrawer(open);
    }


    return (
        <>
            <button onClick={toggleDrawer(true)} className='btn'>
                <MenuIcon fontSize='large' id='menuBtn'></MenuIcon>
            </button>

            <UserMenu
                isOpen={isDrawer}
                toggleDrawer={toggleDrawer}
                setCustomTime={setCustomTime}
                setCustomBreakTime={setCustomBreakTime}
                setVolume={setVolume}
                volume={volume}>
            </UserMenu>
        </>
    )
}