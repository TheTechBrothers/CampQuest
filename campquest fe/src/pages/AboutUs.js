
import React from "react";
import "./AboutUs.css"

const AboutUs = () => {
    return (
        <>
            <div className="story">
                <center>
                    <h2>Our Story</h2>
                </center>
                <b>
                    As a former college student, I remember the nights and weekends I went out
                    to different college events and had fun and made memories with my college
                    family. Those memories were the best time of my life that I will keep
                    forever and I will never. So the Tech Brothers a company run by young
                    extrovert individuals, have created a college event locator called
                    CampQuest.CampQuest was created and built by Terrelle Thomas and Elijah
                    Hodges
                </b>
                <p />
                <b>
                    <p>
                        Are you a college student? Are you tired of having a boring college
                        experience? Then you have the right website to make your experience less
                        boring.CampQuest is a college campus event website that allows users to
                        browse, create and promote local college events around the United
                        States. This website will enable students, alums, and their families to
                        find events easily, have fun with their friends, potentially meet new
                        friends, and make new everlasting memories.As you go through this
                        website, you will find different sports, school-related, and affiliated
                        events posted with their vital details, such as time, location, and
                        host.
                    </p>
                </b>
                <section className="row">
                    <section className="column">
                        <img src="College%20Dinner.jpg" alt="Dinner" />
                    </section>
                    <section className="column">
                        <img src="Concert.jpg" alt="Enjoying" />
                    </section>
                </section>
            </div>
            <br />
            <br />
            <center>
                <h2>Our Purpose</h2>
            </center>
            <b>
                <p>
                    Mission To help and improve college students social experience
                    by locating different local college events.
                </p>
            </b>
            <p />
            <b>
                Mission The vision of CampQuest is to be one of the most trustworthy
                site where we can enhance all college students social experience in college
            </b>
            <center>
                <video width={400} height={300} controls="">
                    <source src="CampQuest.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <p>
                    DISCLAIMER: I hereby declare that I do not own the rights to this
                    music/song. All rights belong to the owner. No Copyright Infringement
                    Intended.
                </p>
            </center>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </>
    )
};

export  default AboutUs;