import React from "react";
import "./Styles.css"
import k1 from "../cards/kat1.jpg"
import k2 from "../cards/kat2.jpg"
import k3 from "../cards/kat3.jpg"
import a1 from "../cards/arn1.jpg"
import star from "../Images/star.png"
import Card from "./Card";
function CardPort() {
    return (
        <div className="card-container-1">
            <Card
                image={k1}
                location="(6)-Australia"
                desc="Learn Photography"
                cost="From 90$/"
            />
            <Card
                image={k2}
                location="(5)-Australia"
                desc="Learn Acting"
                cost="From 100$/"
            />

            <Card
                image={k3}
                location="(4)-Australia"
                desc="Learn Swimming"
                cost="From 50$/"
            />
            <Card
                image={a1}
                location="(6)-USA"
                desc="Learn Bodybuilding"
                cost="From 70$/"
            />
        </div>
    )
}
export default CardPort;

/*
<div className="card-1">
                <img src={k1} className="profile"/>
                <div className="desc">
                    <img src={star} className="star-logo"/>
                    <a className="location">(6)-Australia</a>
                </div>
                <div className="desc">
                    <a className="person-desc">Learn Photography</a>
                </div>

                <div className="desc">
                    <a className="cost">From 90$/</a> Per Hour
                </div>
            </div>
            <div className="card-2">
                <img src={k2} className="profile"/>
                <div className="desc">
                    <img src={star} className="star-logo"/>
                    <a className="location">(5)-Australia</a>
                </div>
                <div className="desc">
                    <a className="person-desc">Learn Acting</a>
                </div>
                <div className="desc">
                    <a className="cost">From 100$/</a> Per Hour
                </div>
            </div>
 */
