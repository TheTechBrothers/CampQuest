import React, {useContext, useEffect} from 'react';
import {AuthContext} from "./AuthContext";
import {useNavigate} from "react-router-dom";

function SignOut() {

    const  context = useContext(AuthContext)
    let navigate = useNavigate();

    useEffect( () => {
        console.log("Bye")
        context.signOut();
        },)
    return (
        <div></div>
    );
}

export default SignOut;