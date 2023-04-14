import React, {useContext, useRef, useState} from "react";
import "/Signin.css";
import {Link, useNavigate} from "react-router-dom"
import {AuthContext} from "../AuthContext";


function SignUp() {
    const context = useContext(AuthContext);
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const {errors, setErrors} = useState([]);
    let navigate = useNavigate();

}


function Sign (){
    function  enter () {
    }
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const navigate = useNavigate();

        function handclick(event){
            //this will navigate to the events page when the user puts the information in
            navigate('/target-route');

        }
    return (
        <div>
            <center><h1>CampQuest</h1></center>
            <center>
                <div className="signin">
                    <form>
                        <b /><p><b>Already have an account?</b> <a href="#"> Login Here</a>
                        <br /><br />
                        <label><b>Full Name</b></label>
                        <input type="text" name="Uname" id="Uname" placeholder="Personal Name" />
                        <br /><br />
                        <label><b>School Name</b></label>
                        <input type="text" name="School" id="School" placeholder="School Name" />
                        <br /><br />
                        <label><b>Email Address
                        </b>
                        </label>
                        <input type="text" name="Uname" id="Uname" placeholder="Email Address" />
                        <br /><br />
                        <label><b>Password
                        </b>
                        </label>
                        <input type="Password" name="Pass" id="Pass" placeholder="Password" />
                        <br /><br />
                        <input type="checkbox" id="check" name="check" defaultValue="check" /><br />
                        <b /></p><p><b>By signing up, you agree to our terms and regulations</b></p>
                        <center><input type="button" name="sign" id="sign" defaultValue="Sign In" onSubmit={handclick}/></center>
                    </form>
                </div>
            </center>
            <br /><br />
        </div>
    )
}

export default Sign;