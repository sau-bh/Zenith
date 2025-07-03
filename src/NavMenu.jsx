import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import "./NavMenu.css"

export default function NavMenu() {
    const [isDrawer, setIsDrawer] = useState(false);

    const handelDrawer = () => {
        setIsDrawer(!isDrawer);
        console.log(isDrawer);
    }


    return (
        <>
            <button onClick={handelDrawer} className='btn'>
                <MenuIcon fontSize='large' sx={{ color: 'white' }}></MenuIcon>
            </button>
        </>
    )
}