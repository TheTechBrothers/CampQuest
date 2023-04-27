import React from "react";

function Footer(){
    return (
        <footer className="bg-light text-center text-white mt-5"className="sticky-bottom">
            <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                &copy; 2023 Copyright &nbsp;
                <a className="text-white" href="http://localhost:3000">CampQuest </a>
            </div>
        </footer>
    )
}

export default Footer;


