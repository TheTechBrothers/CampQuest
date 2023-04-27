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
        navigate('/api/event');

    }

    return (

        <div className="input-group">
            <div className="form-outline">
                <br></br>
                <input id="search-input" type="search" id="form1" className="form-control"/>
                <label className="form-label" htmlFor="form1">Event Search</label>
            </div>
            <button id="search-button" type="button" className="btn btn-primary" onSubmit={handclick}>
                <i className="fas fa-search"></i>
            </button>
        </div>
    )

}

export default search;