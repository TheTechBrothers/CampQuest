import React, {useContext} from "react";
import {AuthContext} from "./AuthContext";
import {Navigate} from "react-router-dom";

function PrivateRoute({children}) {
    const {currentUser, isLoggedIn} = useContext(AuthContext);

    if (isLoggedIn && currentUser?.length > 0)
        localStorage.setItem("user", JSON.stringify(currentUser));

    return <Navigate to="/sigin" replace={true} />
}




export default PrivateRoute;