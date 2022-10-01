import React from "react";

const Landing = () => {

    return (
        <div className="d-flex flex-column">
            <a className='futura text-decoration-none mx-3' style={{color: 'white', fontSize: '10vw'}} href="/Biopic">About</a>
            <a className='futura text-decoration-none mx-3' style={{color: 'white', fontSize: '10vw'}} href="/Portfolio">Portfolio</a>
            <a className='futura text-decoration-none mx-3' style={{color: 'white', fontSize: '10vw'}} href="/Experience">Experience</a>
            <a className='futura text-decoration-none mx-3' style={{color: 'white', fontSize: '10vw'}} href="/Music">Music</a>    
        </div>
    )
}

export default Landing