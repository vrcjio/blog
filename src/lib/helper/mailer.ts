import nodemailer from 'nodemailer';

export const sendEmail =async ({email, emailType, mailData} :{email:string, emailType:string, mailData:any}) => {
    try {
        if(!process.env.USER_MAIL_PASSWORD || !process.env.USER_MAIL){
            throw Error('mail keys missing');
        }

        var transport = nodemailer.createTransport({
            service: "gmail",
            
            auth: {
              user: process.env.USER_MAIL,
              pass: process.env.USER_MAIL_PASSWORD
            }
          });
        
        
        const timingMsg = "Verify it within 10 Minutes otherwise registration will be cancelled."

        const mailOptions = {
            from: 'vrcjio@gmail.com',
            to: email,
            subject: emailType === "VERIFY" ? "Verify your email." : "Reset your password.",
            html: (emailType === "VERIFY")?
            `<p>Click <a href="${process.env.DOMAIN_NAME}/verify?userEmail=${mailData}"> here</a>
            to Verify your email.
            copy this ${process.env.DOMAIN_NAME}/verify?userEmail=${mailData} 
            <br/> ${timingMsg} `
            :
            `<p>Please do not share yout otp for any person. yout otp password reset otp is 
            <u>${mailData}</u> , don't be share this. 
            <br/> ${timingMsg} `,
            
        }

        const mailResponse = await transport.sendMail(mailOptions);
         
        return mailResponse;

    } catch (error:any) {
        throw new Error(error.message);
    }
}