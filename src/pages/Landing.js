import React from "react";

const Landing = () => {

    return (
        <div className="d-flex flex-column">
            <a className='futura text-decoration-none mx-3' style={{color: 'white', fontSize: '10vw'}} href="/about">About</a>
            <a className='futura text-decoration-none mx-3' style={{color: 'white', fontSize: '10vw'}} href="/portfolio">Portfolio</a>
            <a className='futura text-decoration-none mx-3' style={{color: 'white', fontSize: '10vw'}} href="/experience">Experience</a>
            <a className='futura text-decoration-none mx-3' style={{color: 'white', fontSize: '10vw'}} href="/music">Music</a>    
        </div>
    )
}

export default Landing