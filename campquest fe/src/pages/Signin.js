import React, {useContext, useRef, useState} from "react";
import "/Signin.css";
import {Link, useNavigate} from "react-router-dom"

function SignUp() {
    const context = useContext(AuthContext);
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const {errors, setErrors} = useState([]);
    let navigate = useNavigate();

}



const Sign = () => {
    return (
        <div>

        </div>
    )
}

export default Sign;