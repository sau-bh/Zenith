import NavMenu from "./NavMenu";
import MusicPlayer from "./MusicPlayer";

export default function NavControllers(){
    return(
        <span>
            <MusicPlayer></MusicPlayer>
            <NavMenu></NavMenu>
        </span>
    )
}