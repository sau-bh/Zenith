import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import "./NavMenu.css"
import UserMenu from './UserMenu'

export default function NavMenu() {
    const [isDrawer, setIsDrawer] = useState(false);

    const toggleDrawer = (open) => () => {
        setIsDrawer(open);
        console.log(isDrawer);
    }


    return (
        <>
            <button onClick={toggleDrawer(true)} className='btn'>
                <MenuIcon fontSize='large' sx={{ color: 'white' }}></MenuIcon>
            </button>

            <UserMenu isOpen={isDrawer} toggleDrawer={toggleDrawer}></UserMenu>
        </>
    )
}