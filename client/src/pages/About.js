import React from 'react'

import grass from '../img/grass.jpg'
import miami from '../img/miami.jpg'
import mirage from '../img/mirage.jpg'
import mountain from '../img/mountain.jpg'
import rock from '../img/rock.jpg'
import stream from '../img/stream.jpg'
const About = () => {

    const travels = [
        {
            where: 'Kerlingarfjöll, Iceland',
            src: stream
        },
        {
            where: 'San Francisco, California',
            src: rock
        },
        {
            where: 'Miami, Florida',
            src: miami
        },
        {
            where: 'Brooklyn, New York',
            src: mirage
        },
        {
            where: 'Salt Lake City, Utah',
            src: mountain
        },
        {
            where: 'Akurreyri, Iceland',
            src: grass
        }
    ]

    return (
        <div className='d-flex flex-row flex-wrap p-5'>
            <div  className='d-flex flex-column align-items-center -justify-content-evenly' style={{width: '18rem'}}>
                <span className='futura fs-2 my-3' style={{color: 'white'}}>Hello, I'm Zayd!</span>
                <span className='futura fs-5 my-4' style={{color: 'white'}}>
                    I'm a full-stack developer. When I'm not engulfed by my work, I'm off adventuring; wether that be near or far, the adventurers life is for me! Here are a few photos I've taken on my adventures in the past year that I really liked.
                </span>
            </div>
            {
                travels.map((res)=>{
                    return(
                        <div className='m-1 d-flex flex-column align-items-center p-3' key={travels.indexOf(res)} style={{width: '18rem'}}>
                            <label style={{color: 'white'}} className='fs-5 futura'>{res.where}</label>
                            <img className="rounded m-1 img-fluid" src={res.src} alt='...'/>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default About