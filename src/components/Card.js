import React from 'react'
import './Card.css'
import divider from '../assets/images/pattern-divider-desktop.svg';

function Card(props) {
    return (
        <div className="card cardMobile">
            <div className="cardContainer">
                <p className="adviceTitle">ADVICE #{props.adviceId}</p>
                <p className="quote">"{props.advice}"</p>
            </div>
            <img src={divider} alt="divider" className="mobileImage"/>
        </div>
    )
}

export default Card