import React, {useContext, useEffect, useRef} from "react";
import "./Signin.css";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../AuthContext";


function Sign (){

    const context = useContext(AuthContext);
    const emailRef = useRef("");
    const passwordRef = useRef("");

    let navigate = useNavigate();

    useEffect(() => {
        window.document.body.classList.add("text-center");

    }, [])

    async function handleSubmit(event) {

        event.preventDefault();

        await context.login(emailRef.current.value, passwordRef.current.value).then(() => {
            if (context.isLoggedIn && context.currentUser != null) {
                navigate("/");
            }
        })


    }


    return (
        <main className="form-signin w-25 m-auto">
            <center><h1>CampQuest</h1></center>
            <form onSubmit={handleSubmit}>
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
                           ref={emailRef}/>
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
                           ref={passwordRef}/>
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                <div className="form-floating">
                    <input type="checkbox" id="check" name="check" defaultValue="check" /><br />
                    <p>By signing up, you agree to our terms and regulations</p>
                </div>
                <button className="mt-3 w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                <p className="mt-5 mb-3 text-body-secondary"> &copy; 2017–2023</p>
            </form>
        </main>
    );

}

export default Sign;