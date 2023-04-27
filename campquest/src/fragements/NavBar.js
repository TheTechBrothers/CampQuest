import React from "react";
import "./NavBar.css";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light btn-secondary">
            <a className="navbar-brand" href="/AboutUs">
                CampQuest
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="/SignUp">
                            SignUp
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/Login">
                            Login
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/Search">
                            Search
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/Event">
                            Event
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/Contact">
                            Contact Us
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/AboutUs">
                            AboutUs
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
};
export default Navbar