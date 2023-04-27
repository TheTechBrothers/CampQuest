import React from "react";
//import "./NavBar.css";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-secondary justify-content-between" >
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
                        <a className="nav-link" href="/Sign">
                            Sign Up
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/LoginIn">
                            Login
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/Search">
                            Search
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/api/event">
                            Event
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/Contact">
                            Contact Us
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/About Us">
                            About Us
                        </a>
                    </li>
                </ul>
            </div>

                <form className="form-inline w-25" >
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                </form>

        </nav>
    )
};
export default Navbar