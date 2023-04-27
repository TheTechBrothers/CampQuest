import React from "react";
import 'bootstrap/dist/js/bootstrap.min'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'mdb-ui-kit/css/mdb.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

function Contact () {
    return (
        <div>
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
            <form>
                <img className="mb-4"  alt="" width="324"/>
                <div className="form-floating">
                    <input type="FirstName" className="form-control" id="floatingInput" placeholder="FirstName"
                           />
                    <label htmlFor="FirstName">FirstName</label>
                </div>
                <br></br>
                <div className="form-floating">
                    <input type="LastName" className="form-control" id="floatingPassword" placeholder="LastName"
                           />
                    <label htmlFor="LastName">LastName</label>
                </div>
                <br></br>
                <div className="form-floating">
                    <input type="PhoneNumber" className="form-control" id="floatingPassword" placeholder="PhoneNumber"
                    />
                    <label htmlFor="PhoneNumber">PhoneNumber</label>
                </div>
                <br></br>
                <div className="form-floating">
                    <input type="PhoneNumber" className="form-control" id="floatingPassword" placeholder="PhoneNumber"
                    />
                    <label htmlFor="PhoneNumber">Subject Topic</label>
                </div>
                <br></br>
                <div className="form-floating">
                    <textarea className="form-control" placeholder="Leave a comment here"
                              id="floatingTextarea"></textarea>
                    <label htmlFor="floatingTextarea">Comments</label>
                </div>
                <a className="nav-link" href="/Search"><button className="mt-3 w-100 btn btn-lg btn-primary" type="submit">Sumbit</button></a>
            </form>
            </div>

    )
}

export default Contact;