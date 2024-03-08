import React from "react";
import { Link } from "react-router-dom";
import './Bio.css';

const Bio = () => {

    return (
        <>
            <div className="content">
                <p>summary info to go here</p>
                <p>Louise Elliott - March 2024</p>
                <div className="headshot-container"><img className="headshot" src="/headshot.jpg" alt={`Headshot of Louise Elliott`} /></div>
                <div className="links">
                    <Link to="https://github.com/louise-elliott-work" target="_blank"><img className="github" src="/github.svg"/></Link>
                    <Link to="https://www.linkedin.com/in/louise-elliott-work/" target="_blank"><img className="linkedin" src="/linkedin.svg"/></Link>
                    <Link to="louise.elliott.work@gmail.com" target="_blank"><img className="envelope" src="/envelope.svg"/></Link>                             
                </div>
            </div>
        </>
    )
};

export default Bio;