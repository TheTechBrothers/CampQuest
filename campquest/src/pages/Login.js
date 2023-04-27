import React, {useContext, useEffect, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../AuthContext";
import 'bootstrap/dist/js/bootstrap.min'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'mdb-ui-kit/css/mdb.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

function LoginIn () {

    const context = useContext(AuthContext);
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const [errors,setErrors] = useState("");

    let navigate = useNavigate();


    useEffect(()=>{
        window.document.body.classList.add("text-center");

        if(Object.keys(context.currentUser).length !== 0)
        {
            context.setErrors(null, false)
            navigate("/Home")
        }
        else{
            setErrors(context.errors);
        }
    },[context, context.currentUser, navigate, setErrors])

    async function handleSubmit(event){

        event.preventDefault();

        await context.LoginIn(emailRef.current.value, passwordRef.current.value).then(()=>{
            if(context.isLoggedIn && context.currentUser != null)
            {
                navigate("/Search");
                this.headers = {
                    "X-Auth-Token": localStorage.getItem("authorize")
                }
            }
        })

    }

    return (

        <main className="form-signin w-50 h-50 m-auto">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <form onSubmit={handleSubmit}>
                <img className="mb-4"  alt="" width="324"/>
                <h1 className="h3 mb-3 fw-normal">Login In To Your Account</h1>
                <br></br>
                <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
                           ref={emailRef}/>
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <br></br>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
                           ref={passwordRef}/>
                    <label htmlFor="floatingPassword">Password</label>
                </div>

                <button className="mt-3 w-100 btn btn-lg btn-primary" type="submit">Login</button>

                <br></br>
                <br></br>
                <a href="/Search">Continue As A Guest</a>
                <br></br>
                <a href="#">Forgot Password?</a>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </form>
        </main>
    );

}
export default LoginIn;


