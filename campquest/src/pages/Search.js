import React from "react";
import {useNavigate} from "react-router-dom";
//import "./Search.css";
import 'bootstrap/dist/js/bootstrap.min'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'mdb-ui-kit/css/mdb.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

function  search () {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate = useNavigate();

    function handclick(event){
        //this will navigate to the events page when the user puts the information in
        navigate('/target-route');

    }

    return (
<div></div>
    )

}

export default search;