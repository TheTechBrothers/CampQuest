import React from "react";
import {Nav, NavLink, NavMenu}
 from "./NavBarElements";

const NavBar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/AboutUs" activeStyle>
                        About
                    </NavLink>
                    <NavLink to="/contact" activeStyle>
                        Contact Us
                    </NavLink>
                    <NavLink to="/Event" activeStyle>
                        Event
                    </NavLink>
                    <NavLink to="/Search" activeStyle>
                        Search
                    </NavLink>
                    <NavLink to="/Sign-In" activeStyle>
                        Sign-In
                    </NavLink>
                    <NavLink to="/Log-In" activeStyle>
                        Log-In
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default NavBar;