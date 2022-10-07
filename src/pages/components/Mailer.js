import React, {useEffect, useState} from "react";
import emailjs from '@emailjs/browser'
import { toast, Toaster } from "react-hot-toast";
import { client, q } from "../../config/index";

const Mailer = () => {

    const [ recipient, setRecipient ] = useState(null)
    const [ recipientName, setrecipientName ] = useState(null)
    const [ POC, setPOC ] = useState(null)
    const [ duplicate, setDuplicate ] = useState(null)
    const [ submitted, setSubmission ] = useState(false)

    const SERVICE_ID = 'service_xoaol08',
    PUBLIC_KEY = '6Salh6qhnsU39yNzz',
    // PRIVATE_KEY = 'JtDZOA1veRm2Hf_dG1xNk',
    EMAIL_TEMPLATE = 'template_6g6v88i'
    

    useEffect(()=>{

        if(recipientName !== null && recipient !== null){
            client.query(q.Paginate(q.Match(q.Index('allInquiries')))).then((ret) => {
                ret.data.forEach((ref) => { 
                    client.query(q.Get(q.Ref(q.Collection('Inquiries'), ref.value.id))).then((oth) => {
                        if(oth.data.email === recipient){
                            setDuplicate(true) 
                            return
                        }else{
                            setDuplicate(false)
                            return
                        }
                    })
                    return
                })
                return
                }).catch((err) => console.error(
                'Error: [%s] %s: %s',
                err.name,
                err.message
            ))
            return
        }

    }, [recipient, recipientName])

    useEffect(()=>{

        const TEMPLATE_PARAMS = {
            to_name: recipientName,
            to_email: recipient 
        }

        if(duplicate === false && POC !== null){
            client.query(
                q.Create(
                  q.Collection('Inquiries'),
                  {
                    data: POC
                  },
                )
            ).then(()=>{
               emailjs.send(SERVICE_ID, EMAIL_TEMPLATE, TEMPLATE_PARAMS, PUBLIC_KEY).then(res=>{
                setSubmission(true)
                toast.success('Check your email, you should have recieved something!')}).catch(err=>toast.error('Unable to submit your contact information, try again'))  
            })
            .catch((err) => console.error(
                'Error: [%s] %s: %s',
                err.name,
                err.message,
                err.errors()[0].description,
            ))
        } else if(duplicate === true && POC !== null){
            toast.error('This email has already been used')
            return 
        }
    }, [duplicate, POC, recipient, recipientName])

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

                    e.preventDefault()

                    const first = e.currentTarget.parentNode.children[2].children[0].value
                    const last = e.currentTarget.parentNode.children[2].children[1].value
                    const email = e.currentTarget.parentNode.children[3].value
                    const message = e.currentTarget.parentNode.children[4].value

                    if(first !== '' && last !== '' && email !== '' && message !== ''){
                        setRecipient(email)
                        setrecipientName(first)
                        setPOC({
                            first: first,
                            last: last,
                            email: email,
                            message: message
                        })   
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
            <div className="d-flex flex-column justify-content-center text-center">
                <span className="fs-1 futura p-2" style={{color: 'white'}}>Please check your email, there should be a message waiting for you!</span>
                <a href="/" className="btn p-2 fs-3 text-uppercase" style={{backgroundColor: 'white'}}><span className="water">home</span></a>
            </div>
        )
    }

    return(
        <div>
        {
            submitted !== false ?
            <FinCon/>
            :
            <StaCon/>
        }
        </div>
    )
}

export default Mailer 