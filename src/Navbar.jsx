import "./Navbar.css"
import Logo from './Logo';
import NavControllers from './NavControllers';

function Navbar({setCustomTime, setCustomBreakTime}) {
    return (
        <>
            <div className="Nav-container">
                <Logo></Logo>
                <NavControllers setCustomTime={setCustomTime} setCustomBreakTime={setCustomBreakTime}></NavControllers>
            </div>
        </>
    );
}
export default Navbar;