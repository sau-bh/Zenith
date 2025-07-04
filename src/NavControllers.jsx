import NavMenu from "./NavMenu";
import MusicPlayer from "./MusicPlayer";
import "./NavControllers.css"

export default function NavControllers({setCustomTime}) {
    return (
        <div className="controllers">
            <MusicPlayer></MusicPlayer>
            <NavMenu setCustomTime={setCustomTime}></NavMenu>
        </div>
    )
}