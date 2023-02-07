import React from "react";

const Footer = () => {

    const links = [
        {
            href: "https://www.linkedin.com/in/zayd-nubani-a7a8a9263/",
            class: "fa-brands fa-linkedin-in"
        },
        {
           href: "https://github.com/zaydnubani",
           class: "fa-brands fa-github-alt" 
        },
        {
            href: "discordapp.com/users/zaynuba#5238",
            class: "fa-brands fa-discord" 
        }
    ]

    return(
        <div className="row">
            <div className="col-12 text-center py-5">
            
                <div className="d-flex flex-row justify-content-center my-2">
                    {
                        links.map((link)=>{
                            return(
                                <a href={link.href} className="text-decoration-none mx-3 hover" style={{color: "#1C2826"}}>
                                    <i className={link.class} style={{fontSize: "2rem"}}></i>
                                </a>
                            )
                        })
                    }
                </div>
                <span className="futura text-uppercase" style={{fontSize:"0.75rem"}}>developed by zayd nubani</span>
            </div>
        </div>
    )
}

export default Footer