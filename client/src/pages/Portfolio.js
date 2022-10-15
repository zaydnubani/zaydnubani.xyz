import React, {useEffect, useState} from 'react'

import Sacrd_Gardn from '../img/Sacrd_Gardn.png'
import ZJN from '../img/ZJN.png'

const Portfolio = () => {

    const works = [
        {
            company: 'SACRΞD GARDΞN',
            image: Sacrd_Gardn, 
            src: 'https://sacrdgardn.com/',
            description: 'Sacred Garden is a real and virtual psychedelic plant community with a focus on conservation, cultivation and education.',
            tags: [
                'fauna', 'react', 'html', 'css', 'javascript', 'node.js', 'Block Native', 'Solidity', 'typescript', 'bootstrap', 'web3.js', 'ethers.js', 'merkeltree.js', 'netlify'
            ]
        },
        {
            company: 'zaydnubani.xyz',
            image: ZJN,
            src: 'http://zaydnubani.xyz/',
            description: 'A personal landing page that offers a creative and unique experience for any prospectors.',
            tags: [
                'heroku', 'express.js', 'react', 'javascript', 'html', 'css', 'bootstrap', 'spotifyAPI', 'emailjs', 'MySQL'
            ]
        }

    ]

    return(
        <div className='d-flex flex-row flex-wrap justify-content-evenly p-5'>
            {
                works.map((res)=>{
                    return(
                        <div className="card m-2" style={{width: '18rem'}} key={works.indexOf(res)}>
                            <a href={res.src}>
                              <img src={res.image} className="card-img-top" alt="..."/>  
                            </a>
                            <div className="card-body d-flex flex-column"> 
                                <span className='futura fs-4 text-uppercase text-decoration-none' style={{color: '#006994'}}>{res.company}</span>
                                <div className="accordion accordion-flush" id="accordionExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${res.tags[0]}one`} aria-expanded="false" aria-controls={`${res.tags[0]}one`}>
                                                <span className='text-uppercase futura' style={{color: '#006994'}}>description</span>
                                            </button>
                                        </h2>
                                        <div id={`${res.tags[0]}one`} className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <span className='futura text-wrap' style={{color: '#006994'}}>{res.description}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingOne">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${res.tags[0]}two`}  aria-expanded="false" aria-controls={`${res.tags[0]}two`} >
                                                <span className='text-uppercase futura' style={{color: '#006994'}}>Tags</span>
                                            </button>
                                        </h2>
                                        <div id={`${res.tags[0]}two`} class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div class="accordion-body d-flex flex-row flex-wrap">
                                                {
                                                    res.tags.map((ret)=>{
                                                        return(
                                                            <div className='p-2 m-1 waterBG rounded rounded-pill' key={res.tags.indexOf(ret)}>
                                                                <span className='futura' style={{color: 'white'}}>{ret}</span>
                                                            </div>
                                                        )
                                                    })
                                                }                                        
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Portfolio