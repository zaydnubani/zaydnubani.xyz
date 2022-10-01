import React from "react";
import form from 'form-data'
import mailgun from 'mailgun.js'

const GMAIL = () => {

    const API_KEY = 'da0a20e4d6758b5af7eb23ccc44aef85-4534758e-da8b6e1c';
    const DOMAIN = 'http://localhost:3000/';

    const Mailgun = new mailgun(form);
    const client = Mailgun.client({username: 'api', key: API_KEY});

    const messageData = {
    from: 'Excited User <me@samples.mailgun.org>',
    to: 'foo@example.com, bar@example.com',
    subject: 'Hello',
    text: 'Testing some Mailgun awesomeness!'
    };

    client.messages.create(DOMAIN, messageData)
    .then((res) => {
    console.log(res);
    })
    .catch((err) => {
    console.error(err);
    });

    return(
        <div>

        </div>
    )
}

export default GMAIL