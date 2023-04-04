import {useContext, useEffect, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";

function LoginIn() {
    let AuthContext;
    const context = useContext(AuthContext);
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const {errors, setErrors} = useState([]);
    let navigate = useNavigate();

    context.setErrors = (param, b) => {

    };

    async function HandleSubmit(event) {
        console.log("execute");
        event.preventDefault();

        await context.sign(emailRef.current.value, passwordRef.current.value).then(() => {
        })

 useEffect(() => {

 if (Object.keys(context.currentUser).length = 0)
 {
     context.setErrors(null,false);
     navigate("/AboutUs");
 }
 else {
     setErrors(context.errors);
 }
 },[context.currentUser])


        return (
            <>
                <h2>Login In To Your Account</h2>
                <br />
                <div className="login">
                    <form id="login" method="GET">
                        <a href="#">Create Account</a>
                        <br />
                        <br />
                        <label>
                            <b>Email Address</b>
                        </label>
                        <label htmlFor="Uname" />
                        <input type="text" name="Uname" id="Uname" placeholder="Email Address" />
                        <br />
                        <br />
                        <label>
                            <b>Password</b>
                        </label>
                        <label htmlFor="Pass" />
                        <input type="Password" name="Pass" id="Pass" placeholder="Password" />
                        <br />
                        <br />
                        <input type="button" name="log" id="log" defaultValue="Log In" />
                        <br />
                        <br />
                        <br />
                        <br />
                        <a href="#">Continue As A Guest</a>
                        <br />
                        <br />
                        <a href="#">Forgot Password?</a>
                    </form>
                </div>
                <br />
            </>

        )
    }}
export default LoginIn;


