import React from "react";

const Body = () => {

    const Experience = [
        {
            position: "Full Stack Developer",
            period: {
                start: "June 2022",
                end: "Present"
            },
            company: "Sacred Garden",
            location: "San Francisco, CA",
            details: ["Constructed and deployed sacrdgardn.com with, but not limited to, React, Bootstrap, MySQL, Block Native, Ethers.js, Web3.js, Heroku, and Jaws DB.", "Designed a unique, token-gated, marketplace experience that caters to web3 and web2 users.", "Collaborated with the UI team to design wireframing and user-experience in Mock Flow and Figma.", "Enhanced the user experience through direct costumer engagement, resulting in increased visitor traffic and user retention."]
        },
        {
            position: "area manager II",
            company: "amazon logistics",
            period: {
                start: "June 2020",
                end: "June 2022"
            },
            location: "Philadelphia, PA",
            details: [
                "Optimized performance outcomes through; assignment of productivity improvement programs, articulation of daily goals and expectations, operational benchmarking, employee engagement, and leading the development of SOP’s that included how-to-videos designed to hasten job learning.", "Promoted from Area Manager I to Area Manager II within 9 months of hire date.", "Successfully onboarded 70 floor associates and promoted 30 of said associates to Learning Ambassadors.", "Developed and promoted 3 Shift Assistants to Area Manager I’s."
            ]
        },
        {
            position: "manager in training",
            company: "pool corporation",
            period: {
                start: "June 2019",
                end: "August 2019"
            },
            location: "Blackwood, NJ",
            details: [
                "Analyzed daily warehouse procedures to identify inefficiencies, then developed SOPs based on evaluations to improve associate’s productivity and cut operational costs.",
                "Processed daily B2B orders for clients handling sensitive information and following-up with suppliers to provide accurate delivery estimations.",
                "Shadowed BDR associates on sales leads, practicing sales pitches and performing on-site product orders using a remote POS device. "
            ]
        },
        {
            position: "territorial sales agent",
            company: "ses",
            period: {
                start: "May 2018",
                end: " June 2018",
            },
            location: "Philadelphia, PA",
            details: ["Assigned local territories to pursue 120+ B2C sales leads for fortune 500 companies such as Verizon and ADT.",
            "Developed a sales pitch to improve personal proficiency, consumer relationships, ease of delivery, and deals closed."
            ]
        },
        {
            position: "Instructor",
            company: "make life skate life",
            period: {
                start: "May 2017",
                end: "July 2017"
            },
            location: "Amman, JOD",
            details: [
                "Instructed underprivileged children from refugee camps surrounding Amman how to skateboard, speak English, and provide basic medical aide.",
                "Raised funds to build an addition on-to the pre-existing skatepark and purchase new skateboards as well as protective gear for the children.",
                "Participated in presenting Make Life Skate Life’s accomplishments to the UN consulate representative on international refugee day."
            ]
        },
        {
            position: "Sales and marketing",
            company: "johnson & johnson",
            period: {
                start: "June 2013",
                end: "Jan 2015"
            },
            location: "Dubai, UAE",
            details: [
                "Assigned with the design and construction of a client email marketing campaign that helped facilitate the acquisition of 10 new distribution channels.",
                "Participated with a team of strategists on a cost improvement project that helped the sales and marketing department save nearly $60,000 in annual spending.",
                "Conducted market research to update and improve current marketing channels and outlets within the United Arab Emirates."
            ]
        }
    ]

    return(
        <div className="row g-2">
            {
                Experience.map((exp)=>{
                    return(
                        <div className="col-12 col-md-6 col-xl-4 rounded p-1" >
                            <span className="futura fs-1 text-uppercase" style={{}}>{exp.position}</span>
                            <div className="d-flex flex-column rounded my-1 p-1" style={{borderLeft:"solid 5px #d64550", borderTop:"solid 5px #d64550", color: "#1c2826"}}>
                                <div className="d-flex flex-row futura text-uppercase">
                                    <span>{exp.company}</span>
                                    <span className="ms-auto">{exp.period.start} - {exp.period.end}</span>
                                </div>
                                <div className="d-flex flex-row futura text-uppercase">
                                    <span className="ms-auto">{exp.location}</span>
                                </div> 
                            </div>
                            
                            <div className="d-flex flex-column futura text-start rounded p-1" style={{borderRight:"solid 5px #d64550", borderTop:"solid 5px #d64550" }}>
                                {
                                    exp.details.map((detail)=>{
                                        return(
                                            <span className="my-1 rounded">{detail}</span>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )

                })
            }
        </div>
    )
}

export default Body