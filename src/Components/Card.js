import React from "react";
import star from "../Images/star.png";

export default function Card(props) {
    return (
        <div className="card-1">
            <img src={props.image} className="profile"/>
            <div className="desc">
                <img src={star} className="star-logo"/>
                <a className="location">{props.location}</a>
            </div>
            <div className="desc">
                <a className="person-desc">{props.desc}</a>
            </div>
            <div className="desc">
                <a className="cost">{props.cost}</a> Per Hour
            </div>
        </div>
    )
}