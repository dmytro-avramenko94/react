import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header className="header">
            <div className="header__container container">
                <img src="./images/logo.svg" alt="" className="header logo" />
                <nav className="header__nav">
                    <NavLink to='/' className="header__link">Home</NavLink>
                    <NavLink to='/shop' className="header__link" >Shop</NavLink>
                    <NavLink to='/collection' className="header__link" >Collection</NavLink>
                    <NavLink to='/incubator' className="header__link" >Incubator</NavLink>
                </nav>
            </div>
        </header>

    )
}