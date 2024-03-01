import React from "react";
import { Link } from "react-router-dom";
import './Bio.css';

const Bio = () => {

    return (
        <>
            <div className="content">
                <h1>Contact</h1>
                <p>summary info here</p>
                <p>Louise Elliott - March 2024</p>
                <div className="headshot-container"><img className="headshot" src="public/headshot.jpg" alt={`Headshot of Louise Elliott`} /></div>
                <div className="links">
                    <Link to="https://github.com/louise-elliott-work" target="_blank"><img className="github" src="/public/github.svg"/></Link>
                    <Link to="https://www.linkedin.com/in/louise-elliott-work/" target="_blank"><img className="linkedin" src="/public/linkedin.svg"/></Link>
                    <Link to="louise.elliott.work@gmail.com" target="_blank"><img className="envelope" src="/public/envelope.svg"/></Link>                             
                </div>
            </div>
        </>
    )
};

export default Bio;