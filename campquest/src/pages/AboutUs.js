
import React from "react";
import "./AboutUs.css";
import Dinner from './College Dinner.jpg';
import Concert from './Concert.jpg';
import video from './CampQuest.mp4';
import 'bootstrap/dist/js/bootstrap.min'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'mdb-ui-kit/css/mdb.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

function AboutUs () {
    return (
        <div className="row text-center"><div className="story" className="col">
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
            <div className="row">
                <div className="col-md-6">
                    <img src={Dinner} alt="Dinner" className="img-fluid" />
                </div>
                <div className="col-md-6">
                    <img src={Concert} alt="Enjoying" className="img-fluid" />
                </div>
            </div>
        </div>
            <br />
            <br />
            <center>
                <h2 style={{marginTop: '25px'}}>Our Purpose</h2>
            </center>
                <p>
                    Mission: To help and improve college students social experience
                    by locating different local college events.
                </p>
                <p>
                Vision: Make CampQuest to be one of the most trustworthy
                    site where we can enhance all college students social experience in college.
                </p>
            <center>
                <video controls width="400" height="300">
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <p style={{marginTop: '40px'}}>
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
        </div>
    )
};

export  default AboutUs;