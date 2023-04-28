import React from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-ui-kit/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Search() {
    const navigate = useNavigate();

    function handleClick() {
        navigate('/api/event');
    }

    return (
        <div>
            <h1 className="h3 mb-3 fw-normal text-center" style={{ color: "white" }}>Welcome to CampQuest!</h1>
            <h1 className="h3 mb-3 fw-normal text-center" style={{ color: "white" }}>Event Search</h1>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search" />
                            <button className="btn btn-primary" onClick={handleClick}>Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search;
