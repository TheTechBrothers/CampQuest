import React, {useContext, useRef, useState} from "react";
import "/Login.css";


const Login = () => {

        function LoginIn() {
            const context = useContext(AuthContext);
            const emailRef = useRef("");
            const passwordRef = useRef("");
            const {errors, setErrors} = useState([]);
            let navigate = useNavigate();

            async function HandleSubmit(event) {
                console.log("execute");
                event.preventDefault();

                await context.sign(emailRef.current.value, passwordRef.current.value).then(() => {
                })

                useEffect(() => {
                    if (Object.keys(context.currentUser).length ≠ 0);
                    {
                        context.setErrors(null, false);
                        navigate("/AboutUs");
                    }
                else
                    {
                        setErrors(context, errors);
                    }
                }, [context.currentUser])
            }
        }



    return (
        <div>

        </div>
    )
}

export default Login();