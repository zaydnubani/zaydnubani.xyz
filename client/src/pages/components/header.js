import React from "react";

const Header = () => {

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
            // href: Resume,
            name: "resume"
        },
        {
            href: "/contact",
            name: "contact"
        }
    ]

    return(
        <div className="row w-75 menu" style={{position: "fixed", top: 0, backgroundColor: "#D64550", zIndex: 1, boxShadow: "-5px 5px 5px #EA9E8D", borderRadius: "0 0 0.25rem 0"}}>
            <div className="col-12 d-flex flex-column menu" style={{height: "40px"}}>
                <div className="d-flex flex-row">
                    <a href="/" className="text-decoration-none" style={{background: "none", border: "none"}}>
                        <span className="futura text-uppercase" style={{fontSize: "1.5rem", color: "#1C2826"}}>zaydnubani.xyz</span>
                    </a>
                    <button className="ms-auto menu" style={{background: "none", border: "none", display: "none"}} onClick={(e)=>{
                        const arr = e.currentTarget.parentNode.parentNode.children[1].children,
                        container = e.currentTarget.parentNode.parentNode,
                        close = e.currentTarget.parentNode.children[1],
                        open = e.currentTarget.parentNode.children[2]

                        setTimeout(()=>{
                            container.style.height = "40px"
                            close.style.display = "none"
                            open.style.display = "block"
                        }, 450)

                        for(let i = 0; i < arr.length; i++){
                            arr[i].style.opacity = 1
                            
                            setTimeout(()=>{
                                arr[i].style.opacity = 0
                            }, 300)

                            setTimeout(()=>{
                                arr[i].style.display = "none"
                            }, 650)
                        }
                    }}> 
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                    <button className="ms-auto menu" style={{background: "none", border: "none"}} onClick={(e)=>{
                        const arr = e.currentTarget.parentNode.parentNode.children[1].children,
                        container = e.currentTarget.parentNode.parentNode,
                        close = e.currentTarget.parentNode.children[1],
                        open = e.currentTarget.parentNode.children[2]

                        container.style.height = "300px"
                        close.style.display = "block"
                        open.style.display = "none"

                        for(let i = 0; i < arr.length; i++){
                            arr[i].style.display = "block"
                            arr[i].style.opacity = 0

                            setTimeout(()=>{
                                arr[i].style.opacity = 1
                            }, 1500)
                        }
                    }}> 
                        <i className="fa-solid fa-ellipsis-vertical" style={{fontSize: "1.5rem", color: "#1C2826"}}></i>
                    </button>
                </div>
                <div className="d-flex flex-column">
                    {links.map((link)=>{
                        return(
                            <a key={links.indexOf(link)} className="futura text-uppercase text-decoration-none fs-1 hover" style={{color: "#1C2826", display: "none"}} href={link.href}>
                                {link.name}
                            </a>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Header