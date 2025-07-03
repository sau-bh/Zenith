import NavMenu from "./NavMenu";
import MusicPlayer from "./MusicPlayer";
import "./NavControllers.css"

export default function NavControllers() {
    return (
        <div className="controllers">
            <MusicPlayer></MusicPlayer>
            <NavMenu></NavMenu>
        </div>
    )
}