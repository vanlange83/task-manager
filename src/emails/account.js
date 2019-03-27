const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'vanlangev@gmail.com',
        subject: 'Welcome to the App!',
        text: `Welcome to Task Manager ${name}. Hope you like it!`
    })
}

const sendGoodbyeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'vanlangev@gmail.com',
        subject: 'Sorry to see you go',
        text: `Your account has been deleted from Task Manager ${name}.`
    })
}


module.exports = {
    sendWelcomeEmail,
    sendGoodbyeEmail
}