import React, {useContext} from "react";
import {AuthContext} from "./AuthContext";
import {Navigate} from "react-router-dom";

function PrivateRoute({children}) {
   const {currentUser} = useContext(AuthContext);

   if(currentUser != undefined){
       console.log(currentUser.isActive);
       alert("User is not active or paused");

       //currentUser.signOut();

       return <Navigate to= "/" replace={true}/>

   }
   else {
       if (currentUser !=null & Object.keys(currentUser).length > 0) {
           //console.log(currentUser)
           localStorage.setItem("user", JSON.stringify(currentUser));

       }
       return currentUser ? children : <Navigate to="/" replace={true}/>
   }
}




export default PrivateRoute;