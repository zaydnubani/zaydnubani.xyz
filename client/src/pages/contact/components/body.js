import React, {useEffect, useState} from "react";
import { toast, Toaster } from "react-hot-toast";
import axios from 'axios'
import emailjs from "@emailjs/browser"

const Body = () => {

    const [ recipientFN, setrecipientFN ] = useState(null),
    [ recipientLN, setrecipientLN ] = useState(null),
    [ recipientEmail, setrecipientEmail ] = useState(null),
    [ recipientMessage, setrecipientMessage ] = useState(null)

    useEffect(()=>{

        const redirect = () => {

            document.getElementById("state").style.opacity = 0
            document.getElementById("timer").style.opacity = 0

            var count = 10,
            countdown = setInterval(()=>{
                document.getElementById("timer").style.opacity = 1
                document.getElementById("state").style.opacity = 1
                document.getElementById("state").innerHTML = `Thank you for reaching out. You will now be redirected in`;
                document.getElementById("timer").innerHTML = count
                count--;

                setTimeout(()=>{
                    document.getElementById("timer").style.opacity = 0
                }, 600)

                if(count===0){
                    clearInterval(countdown);
                    window.location = "https://zaydnubani.xyz/"
                }
            }, 1500)
        },

        send = async (first, last, message, email, service, template, pooblic) => {
            try {
                await emailjs.send(
                    service,
                    template,
                    {
                        first_name: first,
                        last_name: last,
                        message: message,
                        email: email
                    },
                    pooblic
                ).then((data)=>{
                    toast.success("Your information has been recieved.")
                    redirect()
                })
            } catch (err) {
                console.log(err)
            }
        },

        store = async (first, last, email, message) => {
            try {
                await axios({
                    method: 'POST',
                    url: `${window.location.origin}/api/contact`,
                    data: {
                        first_name: first,
                        last_name: last,
                        email: email,
                        message: message
                    }
                }).then((res)=>{
                    send(res.data.data.first_name, res.data.data.last_name, res.data.data.message, res.data.data.email, res.data.service, res.data.template, res.data.public)
                })
            } catch (err){
                console.log(err)
            }
        }
        

        if(recipientFN !== null && recipientLN !== null && recipientEmail !== null){
            store(recipientFN, recipientLN, recipientEmail, recipientMessage)
            return
        };

    }, [recipientFN, recipientLN, recipientEmail, recipientMessage])

    return(
        <div className="row g-1">
            <Toaster/>
            <div className="col-12 d-flex flex-column">
                <div className="futura fs-5 text-uppercase my-1 p-1 rounded" style={{borderTop: "solid 5px #D64550", borderLeft: "solid 5px #D64550"}}><span id="state">Submit your information, and I will reach out to you as soon as possible.</span><span className="mx-1" id="timer"></span></div>
                <div className="d-flex flex-row rounded my-1" style={{borderBottom: "solid 5px #D64550", borderRight: "solid 5px #D64550"}}>
                    <input placeholder="First Name" className="border-0 futura rounded p-2 fs-4 m-1 w-50" style={{backgroundColor: '#EA9E8D', color: '#1C2826'}}/>  
                    <input placeholder="Last Name" className="border-0 futura rounded p-2 fs-4 m-1 w-50" style={{backgroundColor: '#EA9E8D', color: '#1C2826'}}/>  
                </div>
                <div className="d-flex flex-column rounded my-1" style={{borderLeft: "solid 5px #D64550", borderBottom: "solid 5px #D64550"}}>
                    <input placeholder="Email Address" className="border-0 futura rounded p-2 fs-5 m-1" style={{backgroundColor: '#EA9E8D', color: '#1C2826'}}/>  
                    <textarea placeholder='Brief Message' className="rounded futura p-2 fs-5 m-1" style={{backgroundColor: '#EA9E8D', color: '#1C2826', border: "none", height: "300px", overflowY: "scroll"}}/>  
                </div>
                <button className="btn futura text-uppercase fs-5 m-1 hover" style={{backgroundColor: '#D64550', color: '#1C2826'}} onClick={(e)=>{

                    const first = e.currentTarget.parentNode.children[1].children[0].value,
                    last = e.currentTarget.parentNode.children[1].children[1].value,
                    email = e.currentTarget.parentNode.children[2].children[0].value,
                    message = e.currentTarget.parentNode.children[2].children[1].value;

                    if(first !== '' && last !== '' && email !== ''){
                       setrecipientFN(first)
                       setrecipientLN(last)
                       setrecipientEmail(email)
                       setrecipientMessage(message)
                       e.currentTarget.onclick = null
                    } else{
                        toast.error('Please fill-out all required fields.')
                    }
                }}>
                    <span className="fs-1">Submit</span>    
                </button>
            </div>
        </div>
    )
}

export default Body