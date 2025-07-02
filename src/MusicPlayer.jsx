import MusicNoteIcon from '@mui/icons-material/MusicNote';
import { useState } from 'react';

export default function MusicPlayer() {
    const bgm = new Audio("bgm.mp3");

    let [isMusicPlaying, setMusicPlaying] = useState(false);


    const handelMusic = () => {
        setMusicPlaying(!playMusic);
        if (playMusic) {
            bgm.play();
            bgm.loop = true;
        }
    }

    return (
        <MusicNoteIcon onClick={handelMusic}></MusicNoteIcon>
    )

}