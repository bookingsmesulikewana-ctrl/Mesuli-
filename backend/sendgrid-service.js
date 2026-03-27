const sgMail = require('@sendgrid/mail');

// Set SendGrid API key from environment variables
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Function to send transactional emails
const sendTransactionalEmail = async (to, subject, text, html) => {
    const msg = {
        to,
        from: 'your-email@example.com', // Use the email address or domain you verified with SendGrid
        subject,
        text,
        html,
    };

    try {
        await sgMail.send(msg);
        console.log('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
        if (error.response) {
            console.error(error.response.body);
        }
    }
};

module.exports = sendTransactionalEmail;
