import React from "react";
import { NavLink } from "react-router-dom";
import './NavBar.css';

const NavBar = () => {
    return (
        <>
            <NavLink
                to="/"
                end
                className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
                }
            >
            Home
            </NavLink>
            <NavLink
                to="game"
                className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
                }
            >
            Game
            </NavLink>
            <NavLink
                to="contact"
                className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
                }
            >
            Contact
            </NavLink>
        </>
    )
};

export default NavBar;