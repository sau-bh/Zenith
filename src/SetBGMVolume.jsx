import * as React from 'react';
import Box from '@mui/material/Box';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import Slider from './Slider';

export default function TestSlider() {
    const [val, setVal] = React.useState(50);

    return (
        <Box sx={{ width: 300, p: 3 }}>
            <VolumeUpIcon />
            <Slider />
        </Box>
    );
}

