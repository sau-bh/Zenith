import "./Navbar.css"
import Logo from './Logo';
import NavControllers from './NavControllers';

function Navbar({setCustomTime}) {
    return (
        <>
            <div className="Nav-container">
                <Logo></Logo>
                <NavControllers setCustomTime={setCustomTime}></NavControllers>
            </div>
        </>
    );
}
export default Navbar;