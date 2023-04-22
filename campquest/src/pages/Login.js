import {useContext, useEffect, useRef} from "react";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../AuthContext";


function LoginIn() {
    const context = useContext(AuthContext);
    const emailRef = useRef("");
    const passwordRef = useRef("");

    let navigate = useNavigate();

    useEffect(()=>{
        window.document.body.classList.add("text-center");

    },[])

    async function handleSubmit(event){

        event.preventDefault();

        await context.login(emailRef.current.value, passwordRef.current.value).then(()=>{
            if(context.isLoggedIn && context.currentUser != null)
            {
                navigate("/");
                this.headers = {
                    "X-Auth-Token": localStorage.getItem("authorize")
                }
            }
        })

    }
    return (
        <>
            <h2>Login In To Your Account</h2>
            <br/>
            <div className="login">
                <form id="login" onSubmit={handleSubmit}>
                    <a href="#">Create Account</a>
                    <br/>
                    <br/>
                    <label>
                        <b>Email Address</b>
                    </label>
                    <label htmlFor="Uname"/>
                    <input type="text" name="Uname" id="Uname" placeholder="Email Address"/>
                    <br/>
                    <br/>
                    <label>
                        <b>Password</b>
                    </label>
                    <label htmlFor="Pass"/>
                    <input type="Password" name="Pass" id="Pass" placeholder="Password"/>
                    <br/>
                    <br/>
                    <input type="button" name="log" id="log" defaultValue="Log In"/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <a href="#">Continue As A Guest</a>
                    <br/>
                    <br/>
                    <a href="#">Forgot Password?</a>
                </form >
            </div>
            <br/>
        </>

    )
}
export default LoginIn;


