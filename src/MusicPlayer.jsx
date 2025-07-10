import MusicNoteIcon from '@mui/icons-material/MusicNote';
import MusicOffIcon from '@mui/icons-material/MusicOff';
import { useState, useEffect } from 'react';
import "./MusicPlayer.css"

const bgm = new Audio("bgm.mp3");
bgm.loop = true;

export default function MusicPlayer({ volume }) {

    let [isMusicPlaying, setMusicPlaying] = useState(false);

    const handleMusic = () => {
        if (!isMusicPlaying) {
            bgm.play();
        } else {
            bgm.pause();
        }
        setMusicPlaying(!isMusicPlaying);
    }

    useEffect(() => {
        bgm.volume = volume ?? 1;
    }, [volume]);

    return (
        <button onClick={handleMusic} className='btn'>
            {isMusicPlaying ? <MusicOffIcon /> : <MusicNoteIcon />}
        </button>
    )

}