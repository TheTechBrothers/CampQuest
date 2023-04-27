import React, {useContext, useEffect, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../AuthContext";





function SignUp () {

    const context = useContext(AuthContext);
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const [errors, setErrors] = useState("");

    let navigate = useNavigate();


    useEffect(() => {
        window.document.body.classList.add("text-center");

    }, [])

    async function handleSubmit(event) {

        event.preventDefault();

        if(!context || typeof context.Sign !== "function") {
            console.error("Invalid context or sign up")
            return;
            console.log("Step1")
        }
        let x = context.Sign(emailRef.current.user, passwordRef.current.user);
        console.log(context.currentUser)
        if( x !=null){
            navigate("/Search")
        }
        else {
            setErrors(context.errors);
            console.log("Error")
        }
        console.log("Mounted")
    }


    return (
        <main className="form-signin w-25 m-auto">
            <form>
                <img className="mb-4"  alt="" width="324"/>
                <h1 className="h3 mb-3 fw-normal">Camp Quest</h1>

                <h3 className="h3 mb-3 fw-normal">Sign Up</h3>

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
                <br></br>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" htmlFor="exampleCheck1">By signing up, you agree to our terms and regulations</label>
                </div>

                <a className="nav-link" href="/Search"><button onSubmit={handleSubmit} className="mt-3 w-100 btn btn-lg btn-primary" type="submit">Sign Up</button></a>
            </form>
        </main>

    );

}

export default SignUp;