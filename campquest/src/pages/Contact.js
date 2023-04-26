import React from "react";
import "./Contact.css";

function Contact () {
    return (
        <>
            <center>
                <h1>Contact Us</h1>
                <p />
                <p />
                <h4>Need Help?</h4>
                <h4>Contact customer support through email or telephone!</h4>
                <h5>Phone: 1-888-789-6642</h5>
                <h5>Email: customersupport@campquest.com</h5>
            </center>
            <br />
            <br />
            <b>
                <center>
                    <p>
                        If you would like to contact Tech Brothers directly, please fill out the
                        form below.
                    </p>
                </center>
            </b>
            <div className="container">
                <form>
                    <label htmlFor="fname">First Name</label>
                    <input
                        type="text"
                        id="fname"
                        name="firstname"
                        placeholder="Your name.."
                    />
                    <label htmlFor="lname">Last Name</label>
                    <input
                        type="text"
                        id="lname"
                        name="lastname"
                        placeholder="Your last name.."
                    />
                    <label htmlFor="phone">Phone Number</label>
                    <input type="text" id="phone" name="phone" placeholder="Number" />
                    <label htmlFor="subject1">Subject Topic</label>
                    <input
                        type="text"
                        id="subject1"
                        name="phone"
                        placeholder="Subject Topic"
                    />
                    <label htmlFor="subject">Subject</label>
                    <textarea
                        id="subject"
                        name="subject"
                        placeholder="Write something.."
                        style={{ height: 200 }}
                        defaultValue={""}
                    />
                    <input type="submit" defaultValue="Submit" />
                </form>
            </div>
        </>

    )
}

export default Contact;