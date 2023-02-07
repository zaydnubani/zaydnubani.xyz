import React from "react";

import ME_COVER from "../../../images/landing/ME-COVER.png"
import ME_CORAL from "../../../images/landing/ME-CORAL.png"
import ME_RED from "../../../images/landing/ME-RED.png"
import ME_GREEN from "../../../images/landing/ME-GREEN.png"

import Resume from "../../../files/Zayd Nubani - Resume.docx"

const Body = () => {

    const links = [
        {
            href: "/portfolio",
            name: "portfolio"
        },
        {
            href: "/experience",
            name: "experience"
        },
        {
            href: Resume,
            name: "resume"
        },
        {
            href: "/contact",
            name: "contact"
        }
    ]

    setTimeout(()=>{
        document.getElementById("intro").style.opacity = 0
    }, 3000)

    const wordChange = () =>{

        let i = 1

        setInterval(()=>{

            const words = ["Hello.", "I'm Zayd."];
        
            document.getElementById("intro").innerHTML = words[i]
            i = (i+1) % words.length;

            document.getElementById("intro").style.opacity = 1


            setTimeout(()=>{
                document.getElementById("intro").style.opacity = 0
            }, 3000)

        }, 5000)
    }

    wordChange();

    return(
        <div className="row g-1">
            <div className="col-12 col-lg-6 d-flex flex-column">
                <span id="intro" className="futura text-uppercase change" style={{color: "#1C2826", fontSize: "4rem"}}>Hello.</span>
                <div className="rounded" style={{position: "relative", borderLeft: "10px solid #D64550", borderBottom: "10px solid #D64550", overflow: "clip"}}>
                    <img src={ME_GREEN} className="img-fluid" alt="visual red" style={{position:"absolute", left: 42, bottom: 0, maxHeight: "700px"}}/>
                    <img src={ME_CORAL} className="img-fluid" alt="visual red" style={{position:"absolute", left: 30, bottom: 0, maxHeight: "700px"}}/>
                    <img src={ME_RED} className="img-fluid" alt="visual red" style={{position:"absolute", left: 16, bottom: 0, maxHeight: "700px"}}/>
                    <img src={ME_COVER} className="img-fluid rounded" alt="visual" style={{position: "relative", maxHeight: "700px", left: -3}}/>
                </div>
            </div>
            <div className="col-12 col-lg-6 d-flex flex-column rounded" style={{borderRight: "10px solid #D64550", borderTop: "10px solid #D64550", position: "relative"}}>
                {
                    links.map((link)=>{
                        return(
                            <a href={link.href} className="hover text-decoration-none" style={{color: "#1C2826"}} key={links.indexOf(link)}>
                                <span className="futura text-uppercase" style={{fontSize: "6.5vw"}}>{link.name}</span>
                            </a>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Body