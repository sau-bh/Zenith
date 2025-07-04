import MusicNoteIcon from '@mui/icons-material/MusicNote';
import MusicOffIcon from '@mui/icons-material/MusicOff';
import { useState } from 'react';
const bgm = new Audio("bgm.mp3");
import "./MusicPlayer.css"

export default function MusicPlayer() {

    let [isMusicPlaying, setMusicPlaying] = useState(false);



    const handleMusic = () => {
        if (!isMusicPlaying) {
            bgm.play();
            bgm.loop = true;
        } else {
            bgm.pause();
        }
        setMusicPlaying(!isMusicPlaying);
    }

    return (
        <button onClick={handleMusic} className='btn'>
            {isMusicPlaying? <MusicOffIcon/>: <MusicNoteIcon/>}
        </button>
    )

}