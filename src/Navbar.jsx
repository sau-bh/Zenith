import "./Navbar.css"
import Logo from './Logo';
import NavControllers from './NavControllers';

function Navbar() {
    return (
        <>
            <div className="Nav-container">
                <Logo></Logo>
                
                    <NavControllers></NavControllers>
                
            </div>
        </>
    );
}
export default Navbar;