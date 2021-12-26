import React from "react";
import "./Styles.css"
import gridPhoto from "../Images/photo-grid.png"
function Hero() {
    return (
        <div className="hero">
            <img src={gridPhoto} className="grid-photo"/>
        </div>
    )
}

export default Hero;