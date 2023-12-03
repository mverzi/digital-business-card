import React from "react"
import Image from "../images/headshot.jpeg"
import '../style.css'
import MailIcon from '../images/email.png'

export default function Info(){

    const emailAddress = 'maggie.verzi@gmail.com'

    const handleEmailButtonClick = () => {
        window.location.href = `mailto:${emailAddress}`;
    }

    return (
        <div className="info">
            <img src={Image} className="info--image"/>
            <div className="info--text">
                <h1 className="info--textelement">Mary Verzi</h1>
                <span className="info--textelement info--jobtitle">Full Stack Developer</span>
                <button className="info--button" onClick={handleEmailButtonClick}>
                <img src={MailIcon} alt="Mail Icon" className="info--mailicon" />
                    Email
                </button>
            </div>
            
        </div>
    )
}