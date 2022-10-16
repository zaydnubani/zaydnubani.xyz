import React from "react";

const Work = () => {

    const Experience = [
        {
            Company: 'SACRΞD GARDΞN',
            Location: 'SFO',
            Title: 'Full-Stack Developer',
            Employment: 'Freelance',
            Time: {
                start: '06/22',
                end: 'Present'
            },
            Details: [
                {
                    Type: 'Collaboration',
                    Info: 'Collaborated with the UI team to design the wireframing and user-experience in MockFlow. '
                },
                {
                    Type: 'Construction',
                    Info: 'Constructed sacrdgardn.com with, but not limited to, React, Bootstrap, Fauna, Block Native, ethers.js, and web3.js.'
                },
                {
                    Type: 'Participation',
                    Info: 'Participated in bi-weekly meetings to discuss bugs, changes, and further development. '
                },
                {
                    Type: 'Design',
                    Info: 'Designed a unique, token-gated, marketplace experience that caters to web3 and web2 users. '
                },
                {
                    Type: 'Engagement',
                    Info: 'Engaged with sacrdgardn.com users and delta flora genesis NFT holders to better curate the user experience.'
                }
            ],
            Tags: ['Solidity', 'React.js', 'Block Native', 'ethers.js', 'web3.js', 'Fauna', 'Bootstrap', 'Javascript', 'HTML5', 'CSS', 'Typescript'],
            Links: [
                {
                    name: 'main',
                    url: 'https://sacrdgardn.com/'
                },
                {
                    name: 'instagram',
                    url: 'https://www.instagram.com/sacrdgardn/'
                }
            ]
        },
        {
            Company: 'AMAZON',
            Location: 'PHL',
            Title: 'Area Manager II',
            Employment: 'Full-Time',
            Time: {
                start: '06/20',
                end: '06/22'
            },
            Details: [
                {
                    Type: 'Evaluation',
                    Info: 'Evaluated daily, weekly, and monthly performance rates to develop associate productivity improvement plans.'
                },
                {
                    Type: 'Coaching',
                    Info: 'Coached associates, identifying barriers and areas of improvement to assist them on their road to benchmark. '
                },
                {
                    Type: 'Participation',
                    Info: 'Participated in daily BDR calls with superiors, debriefing daily site performance and discussing next-day plans.'
                },
                {
                    Type: 'Planning',
                    Info: 'Planned and scheduled daily associate engagement activities to improve associate morale.'
                },
                {
                    Type: 'Design',
                    Info: 'Designed SOPs that incorporated how-to-videos to decrease time spent hands-on training new associates.'
                },
                {
                    Type: 'Communication',
                    Info: 'Communicated with peers to re-evaluate and re-plan business objectives given variable circumstances such as late linehauls, low attendance, and high MNR.'
                }
            ],
            Tags: ['Operations', 'Management', 'MS Office'],
            Links: [
                {
                    name: 'main',
                    url: 'https://www.amazon.com/ref=nav_logo'
                },
                {
                    name: 'instagram',
                    url: 'https://www.instagram.com/amazon/?hl=en'
                }
            ]
        },
        {
            Company: 'POOLCORP',
            Location: 'EWR',
            Title: 'Manager in Training',
            Employment: 'Internship',
            Time: {
                start: '06/19',
                end: '08/19'
            },
            Details: [
                {
                    Type: 'Analysis',
                    Info: 'Analyzed daily warehouse procedures to identify inefficiencies, then developed SOPs based on evaluations to improve associate productivity and cut operational costs.'
                },
                {
                    Type: 'Processing',
                    Info: 'Processed daily B2B orders for clients handling sensitive information and following-up with suppliers to provide accurate delivery estimations.'
                },
                {
                    Type: 'Shadowing',
                    Info: 'Shadowed BDR associates on sales leads, practicing sales pitches and performing on-site product orders using a(n) remote POS device.'
                },
                {
                    Type: 'Evaluation',
                    Info: 'Evaluated monthly financial reports to identify discrepancies and potential expenses that could be cut or substituted.'
                }
            ],
            Tags: ['Management', 'Operations', 'MS Office', 'Sales', 'Salesforce'],
            Links: [
                {
                    name: 'main',
                    url: 'https://www.poolcorp.com/'
                },
                {
                    name: 'twitter',
                    url: 'https://twitter.com/poolcorp'
                }
            ]
        },
        {
            Company: 'J&J',
            Location: 'DXB',
            Title: 'Marketing Intern',
            Employment: 'Internship',
            Time: {
                start: '06/16',
                end: '08/16'
            },
            Details: [
                {
                    Type: 'Assistance',
                    Info: 'Assisted with the design and construction of a client email marketing campaign that helped facilitate the acquisition of 10 new distribution channels.'
                },
                {
                    Type: 'Participation',
                    Info: 'Participated with a team of strategists on a(n) cost improvement project that helped the sales and marketing department save nearly $60,000 in annual spending. '
                },
                {
                    Type: 'Support',
                    Info: 'Supported two sectors within the marketing and sales organization: medical devices and pharmaceuticals.'
                },
                {
                    Type: 'Research',
                    Info: 'Conducted market research to update and improve current marketing channels and outlets within the United Arab Emirates.'
                }
            ],
            Tags: ['Marketing', 'MS Office', 'Sales', 'Salesforce'],
            Links: [
                {
                    name: 'main',
                    url: 'https://www.jnj.com/?utm_source=google&utm_medium=cpc&utm_campaign=GO-USA-ENG-PS-Corporate%20Equity-BC-EX-RN-BRAND_GENERAL&utm_content=J&J%20-%20General%20-%20E&utm_term=johnson%20and%20johnson&ds_rl=1262818&gclid=CjwKCAjwvsqZBhAlEiwAqAHElX393IlkrsWdMuOGLiV8VVyziaiJ5mc1F0q1qJBJybBI0cS7MC7cGxoCsWAQAvD_BwE&gclsrc=aw.ds'
                },
                {
                    name: 'instagram',
                    url: 'https://www.instagram.com/jnj/'
                }
            ]
        },
        {
            Company: 'MAKE LIFE SKATE LIFE',
            Location: 'JOD',
            Title: 'Instructor',
            Employment: 'Volunteer',
            Time: {
                start: '05/17',
                end: '07/17'
            },
            Details: [
                {
                    Type: 'Instruction',
                    Info: 'Instructed underprivileged children from refugee camps surrounding Amman how to skateboard, speak English, and provide basic medical aide.'
                },
                {
                    Type: 'Philanthropy',
                    Info: 'Raised funds to build an addition on-to the pre-existing skatepark and purchase new skateboards as well as protective gear for the children. '
                },
                {
                    Type: 'Participation',
                    Info: 'Participated in presenting Make Life Skate Life’s accomplishments to the UN consulate representative on international refugee day.'
                }
            ],
            Tags: ['Volunteer', 'Charity', 'Training'],
            Links: [
                {
                    name: 'main',
                    url: 'https://www.makelifeskatelife.org/'
                },
                {
                    name: 'instagram',
                    url: 'https://www.instagram.com/makelifeskatelife/'
                }
            ]
        }
    ]
    return (
        <div className="row">
            <div className="col">
                {
                    Experience.map((res)=>{
                        return(
                        <div className='rounded m-2 p-2' style={{backgroundColor: 'white'}} key={Experience.indexOf(res)}>
                            <button className="d-flex flex-column w-100 rounded" style={{backgroundColor: 'white', border: 'none'}} type="button" data-bs-toggle="collapse" data-bs-target={`#Collapse-${Experience.indexOf(res)}`} aria-expanded="false" aria-controls={`Collapse`}>
                                <div className='d-flex flex-column align-items-start w-100'>
                                    <span className="futura water fs-3">
                                    {res.Title}
                                    </span>
                                    <span className="futura water fs-5">
                                        {res.Company}
                                    </span>
                                    
                                </div>
                                <div className='d-flex flex-row w-100'>
                                    <span className="futura water">
                                        {res.Location}
                                    </span>
                                    <span className="futura ms-auto water">
                                        {res.Time.start}-{res.Time.end}
                                    </span>
                                </div>
                            </button>
                            <div className="collapse" id={`Collapse-${Experience.indexOf(res)}`}>
                                <div className="accordion accordion-flush" id={`${res.Company}-accordion`}>
                                    {
                                        res.Details.map((ret)=>{
                                            const collapse = `${res.Employment}-${res.Tags[0]}-${res.Details.indexOf(ret)}`
                                            return(
                                                <div className="accordion-item" key={res.Details.indexOf(ret)}>
                                                    <h2 className="accordion-header" id="flush-headingOne">
                                                        <button className="accordion-button collapsed futura" type="button" data-bs-toggle="collapse" style={{color: '#006994'}} data-bs-target={`#${collapse}`} aria-expanded="false" aria-controls="flush-collapseOne">
                                                            {ret.Type}
                                                        </button>
                                                    </h2>
                                                    <div id={`${collapse}`} className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                                        <div className="accordion-body">
                                                            <span className="futura" style={{color: '#006994'}}>{ret.Info}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <div className="d-flex flex-row p-2 align-items-center">
                                    {
                                        res.Links.map((data)=>{
                                            return(
                                                data.name === 'main' ?
                                                    <button className='btn futura fs-5 border-0 water-underline' src='https://amazon.com' key={res.Links.indexOf(data)} onClick={()=>{
                                                        window.location.href = data.url
                                                    }} style={{color: '#006994'}}>
                                                        Learn more
                                                    </button>
                                                    :
                                                    data.name === 'instagram' ?
                                                        <button className='btn ms-auto border-0' key={res.Links.indexOf(data)} src={data.url} onClick={()=>{
                                                            window.location.href = data.url
                                                        }}><i className="fa-brands fa-instagram futura water fs-4"></i></button>
                                                        :
                                                        <button className='btn ms-auto border-0' key={res.Links.indexOf(data)} src={data.url} onClick={()=>{
                                                            window.location.href = data.url
                                                        }}><i className="fa-brands fa-twitter futura water fs-4"></i></button>
                                            )
                                        })
                                    }
                                </div>
                                <div className="d-flex flex-row flex-wrap">
                                    {
                                        res.Tags.map((data)=>{
                                            return(
                                                <div className="futura waterBG rounded rounded-pill m-2 px-2 py-1" style={{color: 'white'}} key={res.Tags.indexOf(data)}>
                                                    {data}
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>   
                        )
                    })
                }
                
            </div>
        </div>
    )
    }

export default Work