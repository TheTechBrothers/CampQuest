import React from "react";
import "./Event.css";
function Event  () {
    return (
        <div>
            <section id="about">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <div className="card">
                            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                            <img
                                className="card-img-top"
                                src="Spring%20Game-250x150.jpg"
                                alt="Profile Image"
                            />
                            <div className="card-body">
                                <h5 className="card-title font-weight-bold">Noles Spring Game</h5>
                                <p className="card-text font-italic">Time: 2:10PM </p>
                                <p className="card-text font-italic">
                                    Location: Doak Campbell Stadium
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <p>DATE: Friday 25th April, 2023</p>
                        <p>General $20</p>
                        <p>Free For Students With School ID</p>
                        <p>Address: 403 Stadium Dr, Tallahassee, Fl 32304</p>
                        <a href="https://seminoles.evenue.net/cgi-bin/ncommerce3/SEGetGroupList?groupCode=FOOTBALL&linkID=fsuse&shopperContext=&caller=&appCode=">
                            FSU TICKET
                        </a>
                        <br />
                        <br />
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3439.8953155088616!2d-84.3056216!3d30.439069399999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88ecf51adb351167%3A0x331138374f830e1!2s403%20Stadium%20Dr%2C%20Tallahassee%2C%20FL%2032304!5e0!3m2!1sen!2sus!4v1679207521926!5m2!1sen!2sus"
                            width={400}
                            height={300}
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </section>
            <br />
            {/* About Section */}
            <section id="about1">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <div className="card">
                            <img
                                className="card-img-top"
                                src="TECHCON-250x150.png"
                                alt="Profile Image"
                            />
                            <div className="card-body">
                                <h5 className="card-title font-weight-bold">TECH CONFERENCE</h5>
                                <p className="card-text font-italic">TIME: 11:00AM</p>
                                <p className="card-text font-italic">
                                    LOCATION: Bloomington, Indiana
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <p>DATE: Friday 25th May, 2024</p>
                        <p>General $15</p>
                        <p>Free For Students With School ID</p>
                        <p>Address: 120 W Jefferson Blvd, Fort Wayne, IN 46802</p>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a href="#">TECHFORLIFE</a>
                        <br />
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4024.4652248237135!2d-85.14696906920912!3d41.074135548626295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8815e4f303d7c91f%3A0xf218811af639c01!2sGrand%20Wayne%20Convention%20Center!5e0!3m2!1sen!2sus!4v1679211202221!5m2!1sen!2sus"
                            width={400}
                            height={300}
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Event;