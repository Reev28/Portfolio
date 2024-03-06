"use server";
import { getErrorMessage, validateString } from "@/lib/utils";
import {Resend} from "resend";
import ContactFormEmail from "@/email/contact-form-email";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY)


export const sendEmail = async (formData:FormData) => {
    const senderEmail =formData.get("senderEmail");
    const message =formData.get("message");

    //Simple validation for sender email
    if(!validateString(senderEmail,500)){
        return {
            error: "Invalid sender email"
        }
    }
    //Simple validation for message
    if(!validateString(message,5000)){
        return {
            error: "Invalid message"
        }
    }

    //To send the email
    let data;
    try {
        data = await resend.emails.send({
             from: 'Portfolio Contact Form <onboarding@resend.dev>',
             to: 'reev.dsouza@yahoo.com',
             subject: "Message from contact form",
             reply_to: senderEmail as string,
            //  text: message as string
            react:React.createElement(ContactFormEmail,{message:message as string,senderEmail:senderEmail as string})

         });
    } catch (error: unknown) {
       
        return {
            error : getErrorMessage(error),
        }
    }

    return {data};
}
