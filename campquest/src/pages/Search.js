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

    function handclick(){
        //this will navigate to the events page when the user puts the information in
        navigate('/api/event');

    }

    return (
        <main className="form-signin w-75  m-auto ">
            <form className="form-inline my-2 my-lg-0" >
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <img className="mb-4"  alt="" width="324"/>
                <h1 className="h3 mb-3 fw-normal">Event Search</h1>
                <div className="row row-cols-lg-auto g-3 align-items-center " >
                    <div className="col-12">
                        <div className="form-floating w-90">
                            <input type="text" className="form-control" id="floatingInput" placeholder="Search"
                                   />
                            <label htmlFor="floatingInput">Search</label>
                        </div>
                    </div>
                    <div className="col-12">
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onSubmit={handclick}>Search</button>
                    </div>
                </div>
            </form>
            <br></br>
            <br></br>
        </main>

    )

}

export default search;