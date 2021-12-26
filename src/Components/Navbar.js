import React from "react";
import logo from "../Images/airbnb-logo.png"
import "./Styles.css"
function Navbar() {
    return (
        <nav className="navStyle">
            <img src={logo} className="logoStyle"/>
        </nav>
    )
}
export default Navbar;