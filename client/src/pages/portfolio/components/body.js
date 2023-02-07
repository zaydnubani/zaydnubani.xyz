import React from "react";

import RUUM from "../../../images/portfolio/RUUM.CLOUD.png"
import SACRD from "../../../images/portfolio/SACRDGARDN.png"

const Body = () => {

    const portfolio = [
        {
            site: "Sacred Garden",
            href: "https://sacrdgardn.com",
            src: SACRD,
            details: "Sacred Garden is a real and virtual psychedelic plant community with a focus on conservation, cultivation and education. ΔFLORA is your membership token."
        },
        {
            site: "RUUM",
            href: "http://ruum.cloud",
            src: RUUM,
            details: "RUUM.CLOUD is an alternative social media application that isn't different, but it's different. Love it, hate it, or use it; just don't spend your life on it."
        }
    ]

    return(
        <div className="row g-2">
            {
                portfolio.map((site)=>{
                    return(
                        <a className="col-12 col-md-6 col-xl-4 d-flex flex-column rounded text-decoration-none hover" href={site.href} style={{borderBottom: "5px solid #D64550", borderRight: "solid 5px #D64550", overflow: "clip", color: "#1C2826"}}>
                            <span className="futura fs-1 text-uppercase">{site.site}</span>
                            <img className="img-fluid rounded" alt="visual" src={site.src} style={{borderBottom: "5px solid #D64550", borderLeft: "solid 5px #D64550", position: "relative", right: -5}}/>
                            <span className="futura fs-5 py-2">{site.details}</span>
                        </a>
                    )
                })
            }
        </div>
    )
}

export default Body