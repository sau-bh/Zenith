import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

export default function TestSlider() {
    const [val, setVal] = React.useState(50);

    return (
        <Box sx={{ width: 300, p: 3 }}>
            <VolumeUpIcon />
            <Slider
                value={val}
                onChange={(e, newVal) => setVal(newVal)}
                min={10}
                max={100}
                step={10}
                valueLabelDisplay="auto"
                sx={{
                    '& input[type="range"]': {
                        appearance: 'none',
                        WebkitAppearance: 'none',
                        MozAppearance: 'none',
                    }
                }}
            />
        </Box>
    );
}

