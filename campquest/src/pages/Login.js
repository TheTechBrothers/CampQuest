import {useContext, useEffect, useRef} from "react";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../AuthContext";



function LoginIn() {
    const setErrors = useRef("");
    const context = useContext(AuthContext);
    const emailRef = useRef("");
    const passwordRef = useRef("");

    let navigate = useNavigate();

    async function handleSubmit(event){

        event.preventDefault();

        await context.LoginIn(emailRef.current.value, passwordRef.current.value).then(()=>{
            if(context.isLoggedIn && context.currentUser != null)
            {
                navigate("/");
                this.headers = {
                    "X-Auth-Token": localStorage.getItem("authorize")
                }
            }
        })

    }

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
    },[context, context.currentUser, navigate])

    return (
        <main className="form-signin w-25 m-auto">
            <a href="#">Create Account</a>
            <h2>Login In To Your Account</h2>
            <form onSubmit={handleSubmit}>
                <h1 className="h3 mb-3 fw-normal">Please Login in</h1>
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
                <a href="#">Continue As A Guest</a>
                <br/>
                <br/>
                <a href="#">Forgot Password?</a>
                <button className="mt-3 w-100 btn btn-lg btn-primary" type="submit">Login in</button>
                <p className="mt-5 mb-3 text-body-secondary"> &copy; 2017–2023</p>
            </form>
        </main>
    );

}
export default LoginIn;


