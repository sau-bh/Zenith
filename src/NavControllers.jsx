import NavMenu from "./NavMenu";
import MusicPlayer from "./MusicPlayer";
import { useState } from "react";
import "./NavControllers.css"

export default function NavControllers({setCustomTime,setCustomBreakTime}) {

    const [volume, setVolume] = useState(0.5);

    return (
        <div className="controllers">
            <MusicPlayer volume={volume}/>
            <NavMenu setCustomTime={setCustomTime} setCustomBreakTime={setCustomBreakTime} volume={volume} setVolume={setVolume}></NavMenu>
        </div>
    )
}