import React from "react";
const Landing = () => {

    return (
        <div className="d-flex flex-column">
            <a className='futura text-decoration-none mx-2 my-1' style={{color: 'white', fontSize: '10vh'}} href="/about">About</a>
            <a className='futura text-decoration-none mx-2 my-1' style={{color: 'white', fontSize: '10vh'}} href="/portfolio">Portfolio</a>
            <a className='futura text-decoration-none mx-2 my-1' style={{color: 'white', fontSize: '10vh'}} href="/experience">Experience</a>
            <a className='futura text-decoration-none mx-2 my-1' style={{color: 'white', fontSize: '10vh'}} href="/music">Music</a>    
        </div>
    )
}

export default Landing