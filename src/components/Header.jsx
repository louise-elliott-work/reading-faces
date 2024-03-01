import React from "react";
import NavBar from "./NavBar";
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <img src="/icon-placeholder.svg" alt={`...`} height="60px"/>
            <p className="name">Feelings and faces</p>
            <section className="navbar"><NavBar /></section>
        </div>
    )
};

export default Header;