import React from "react";
import Bio from "../components/Bio";
import Headshot from "../components/Headshot";
import Links from "../components/Links";
import './Contact.css';

const Contact = () => {
    return (
        <div className="content contact-page">
            <Bio className="bio"/>
            <Headshot className="headshot"/>
            <Links className="links"/>
        </div>
    )
};

export default Contact;