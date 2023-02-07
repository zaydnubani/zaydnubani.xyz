import React from "react";

const Header = () => {

    return(
        <div className="row w-75" style={{position: "fixed", top: 0, backgroundColor: "#D64550", zIndex: 1, boxShadow: "-5px 5px 5px #EA9E8D", borderRadius: "0 0 0.25rem 0"}}>
            <div className="col-12 d-flex flex-row">
                <a href="/" className="text-decoration-none" style={{background: "none", border: "none"}}>
                    <span className="futura text-uppercase" style={{fontSize: "1.5rem", color: "#1C2826"}}>zaydnubani.xyz</span>
                </a>
                <button className="ms-auto" style={{background: "none", border: "none"}}> 
                    <i className="fa-solid fa-ellipsis-vertical" style={{fontSize: "1.5rem", color: "#1C2826"}}></i>
                </button>
            </div>
        </div>
    )
}

export default Header