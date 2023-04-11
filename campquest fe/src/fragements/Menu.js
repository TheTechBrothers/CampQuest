import {useEffect, useState} from "react";
import {get} from "axios";
import {Link} from "react-router-dom";
import * as events from "events";
import "./Menu.css"
import camp from "../CAMP.jpg"


console.log(camp);
function Menu(props) {

    const [Events, setEvents] = useState([])
    const [username, setUsername] = useState("jane_doe_222335")

    useEffect(()=>{
        const getEvents = async ()=>{
            await get("http://localhost:8080/api/event")
                .then((response)=>{
                    setEvents(response.data.events)
                })
                .catch(err => console.log(err))
        }

        getEvents().then(null)
    }, [])


    return (
        <header>
                        <div className="p-3 text-center bg-white border-bottom">
                            <div className="container">
                                <div className="row">

                                    <div className="col-md-4 d-flex justify-content-center justify-content-md-start mb-3 mb-md-0">
                                        <Link className="ms-md-2" to="/">
                                           <img src={camp} height="55" alt="logo"/>
                                        </Link>
                                    </div>

                        <div className="col-md-4 d-flex justify-content-center justify-content-md-end align-items-center">
                            <div className="d-flex">

                                <div className="dropdown">
                                    <a className="text-reset dropdown-toggle d-flex align-items-center hidden-arrow"

                                       id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown"
                                       aria-expanded="false">
                                        {username}
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-end"
                                        aria-labelledby="navbarDropdownMenuLink">
                                        <li><a className="dropdown-item">Sign Up</a></li>
                                        <li><a className="dropdown-item">Login</a></li>
                                        <li><a className="dropdown-item">Search</a></li>
                                        <li><a className="dropdown-item">Event</a></li>
                                        <li><a className="dropdown-item">Contact Us</a></li>
                                        <li><a className="dropdown-item">About Us</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <nav className="navbar navbar-dark bg-secondary">

                <div className="container justify-content-center justify-content-md-between">

                    <ul className="navbar-nav flex-row">
                        {
                            events.map((events, idx) => {
                                let content = encodeURIComponent(events.content);
                                return (
                                    <li className="nav-item me-2 me-lg-0 d-none d-md-inline-block" key={idx}>
                                        <Link className="nav-link" to={`/${events.slug}?t=${events.title}&c=${content}`}>{events.title}</Link>
                                    </li>
                                )
                            })
                        }

                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Menu;