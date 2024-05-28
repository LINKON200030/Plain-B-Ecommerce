import nodemailer from "nodemailer";

const emailSend = async (emailTo, emailSubject, emailBody) => {
    try {
        let transport = nodemailer.createTransport({
            host: "mail.teamrabbil.com",
            port: 25,
            secure: false,
            auth: {
                user: "info@teamrabbil.com",
                pass: "~sR4[bhaC[Qs",
            },
            tls: {
                rejectUnauthorized: false,
            },
        });

        let mailOptions = {
            from: "MERN Stack Ecommerce Website Team <info@teamrabbil.com>",
            to: emailTo,
            subject: emailSubject,
            text: emailBody,
        };

        await transport.sendMail(mailOptions);

        // If you want to handle successful email sending, you can return a success message or do something else.
        return {
            status: "success",
            message: "Email sent successfully",
        };
    } catch (error) {
        // Handle the error appropriately, log it, or return an error message.
        console.error("Email sending error:", error);
        return {
            status: "failed",
            message: "Failed to send email",
        };
    }
};

export default emailSend;
