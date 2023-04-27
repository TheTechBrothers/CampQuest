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
        <center>
            <form role="search-role" id="form">
                <input
                    type="search"
                    id="query-details"
                    name="h"
                    placeholder="Event Search"
                    aria-label="Search through content of the site"
                />
                <button type="button" onSubmit={handclick}>
                    <svg viewBox="0 0 1024 1024">
                        <path
                            className="path1"
                            d="M848.471 928l-263.059-264.059c-48.941 37.707-111.120 56.060-178.412 55.060-172.296 0-315-145.708-315-314s145.708-315 315-314c173.298 0 315 144.708 314 314 0 69.296-28.474 129.475-58.060 179.414l276.060 265.060-80.529 80.530zM190.625 409.079c0 125.365 99.092 220.458 220.458 219.456s220.456-98.092 220.456-220.456c0-123.365-105.160-220.458-220.458-220.458-124.366 0-220.457 98.093-220.455 220.454z"
                        />
                    </svg>
                </button>
            </form>
        </center>
    )

}

export default search;