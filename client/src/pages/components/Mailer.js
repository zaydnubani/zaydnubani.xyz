import React, {useEffect, useState} from "react";
import emailjs from '@emailjs/browser'
import { toast, Toaster } from "react-hot-toast";
import axios from 'axios'

const Mailer = () => {

    const [ recipientFN, setrecipientFN ] = useState(null),
    [ recipientLN, setrecipientLN ] = useState(null),
    [ submitted, setSubmission ] = useState(false),
    [ recipientEmail, setrecipientEmail ] = useState(null)

    const SERVICE_ID = 'service_xoaol08',
    PUBLIC_KEY = '6Salh6qhnsU39yNzz',
    EMAIL_TEMPLATE = 'template_6g6v88i'


    useEffect(()=>{
        const send = async (first, last, email) => {
            try {
                await axios({
                    method: 'POST',
                    url: `${window.location.origin}/api/contact`,
                    data: {
                        user_first_name: first,
                        user_last_name: last,
                        user_email: email
                    }
                })
                
                emailjs.send(SERVICE_ID, EMAIL_TEMPLATE, { to_name: first, to_email: email }, PUBLIC_KEY).then(res=>{
                    setSubmission(true)
                }).catch(err=>toast.error('Unable to submit your contact information, try again')) 

            } catch (err){
                console.log(err)
            }
        };

        if(recipientFN !== null && recipientLN !== null && recipientEmail !== null){
            send(recipientFN, recipientLN, recipientEmail)
            return
        };

    }, [recipientFN, recipientLN, recipientEmail])

    const StaCon = () =>{
        return(
            <div className="d-flex flex-column justify-content-center text-center">
                <Toaster/>
                <span className="fs-1 futura p-2" style={{color: 'white'}}>Submit your information and a brief message!</span>
                <div className="d-flex flex-row">
                    <input placeholder="First Name" className="border-0 futura rounded p-2 fs-5 m-1 w-50" style={{backgroundColor: 'white', color: '#006994'}}/>  
                    <input placeholder="Last Name" className="border-0 futura rounded p-2 fs-5 m-1 w-50" style={{backgroundColor: 'white', color: '#006994'}}/>  
                </div>
                <input placeholder="Email Address" className="border-0 futura rounded p-2 fs-5 m-1" style={{backgroundColor: 'white', color: '#006994'}}/>  
                <textarea placeholder='Brief Message' className="rounded futura p-2 fs-5 m-1" style={{backgroundColor: 'white', color: '#006994'}}/>  
                <button className="btn futura text-uppercase fs-5 m-1" style={{backgroundColor: 'white'}} onClick={(e)=>{

                    // e.preventDefault()

                    const first = e.currentTarget.parentNode.children[2].children[0].value
                    const last = e.currentTarget.parentNode.children[2].children[1].value
                    const email = e.currentTarget.parentNode.children[3].value
                    const message = e.currentTarget.parentNode.children[4].value

                    if(first !== '' && last !== '' && email !== '' && message !== ''){
                       setrecipientFN(first)
                       setrecipientLN(last)
                       setrecipientEmail(email)
                    } else{
                        toast.error('Please fill-out all fields.')
                    }
                }}>
                    <span className="water">Submit</span>    
                </button>
            </div>
        )
    }

    const FinCon = () =>{
        return(
            <div className="d-flex flex-column justify-content-center text-center p-5">
                <span className="fs-1 futura p-2 my-5" style={{color: 'white'}}>Please check your email, there should be a message waiting for you!</span>
                <a href="/" className="btn p-2 fs-3 text-uppercase futura" style={{backgroundColor: 'white'}}><span className="water">home</span></a>
            </div>
        )
    }

    return(
        <div>
        {
            // submitted !== false ?
            <FinCon/>
            // :
            // <StaCon/>
        }
        </div>
    )
}

export default Mailer 