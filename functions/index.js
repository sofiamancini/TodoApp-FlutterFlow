const functions = require('firebase-functions');
const sgMail = require('@sendgrid/mail');
const sendGridApiKey = functions.config().sendgrid.apikey;

sgMail.setApiKey(sendGridApiKey);

exports.sendEmailToUser = functions.https.onRequest((req, res) => {
    const msg = {
        to: request.body.to,
        from: "sofia.mancini@uri.edu",
        subject: request.body.subject,
        text: request.body.text,
    };
});

sgMail
    .send(msg)
    .then((sendGridResponse) => {
        console.log(sendGridResponse[0].statusCode);
        console.log(sendGridResponse[0].headers);
        response.send("Email sent!");
    })

    .catch((error) => {
        console.error("Error: ", error);
        throw new functions.https.HttpsError("internal", "Email not sent");
    });
