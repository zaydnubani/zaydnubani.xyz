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
            where: 'Akurreyri, Iceland',
            src: grass
        }
    ]

    return (
        <div className='d-flex flex-row flex-wrap'>
            <div className='card m-2' style={{width: '18rem'}}>
                <div className='card-body d-flex flex-column align-items-center justify-content-evenly'>
                    <span className='card-title futura fs-1' style={{color: '#006994'}}>Hello there.</span>
                    <span className='card-subtitle futura fs-5' style={{color: '#006994'}}>My name is Zayd, I am a full-stack developer. When I'm not working, I'm off on an adventure whether that be near or far; for you to get a better idea of what I've been doing, here are some pictures I've taken while traveling.</span>
                </div>
            </div>
            {
                travels.map((res)=>{
                    return(
                        <div className='card m-2' style={{width: '18rem'}} key={travels.indexOf(res)}>
                            <div className='card-body d-flex align-items-center justify-content-center'>
                                <span className='card-title futura fs-5' style={{color: '#006994'}}>{res.where}</span>
                            </div>
                            <img className='card-img-top' alt='...' src={res.src}/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default About