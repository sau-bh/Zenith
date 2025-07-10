import * as React from 'react';
import Box from '@mui/material/Box';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import Slider from './Slider';

export default function SetBGMVolume({ setVolume, volume }) {

    const handleChange=(e)=>{
        setVolume(e.target.value)
    }

    return (
        <Box sx={{ width: 300, p: 3 }}>
            <VolumeUpIcon />
            <Slider value={volume} handleChange={handleChange} />
        </Box>
    );
}

