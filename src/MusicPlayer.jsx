import MusicNoteIcon from '@mui/icons-material/MusicNote';
import { useState } from 'react';
const bgm = new Audio("bgm.mp3");

export default function MusicPlayer() {

    let [isMusicPlaying, setMusicPlaying] = useState(false);
    


    const handleMusic = () => {
        if (!isMusicPlaying) {
            bgm.play();
            bgm.loop = true;
        }else{
            bgm.pause();
        }
        setMusicPlaying(!isMusicPlaying);
    }

    return (
        <button onClick={handleMusic}>
            <MusicNoteIcon></MusicNoteIcon>
        </button>
    )

}