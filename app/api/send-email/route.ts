
import type { NextApiRequest, NextApiResponse } from 'next'
import { NextRequest, NextResponse } from "next/server";
const nodemailer = require("nodemailer")

type ResponseData = {
  status:string
  message: string
}
export const config = {
  api: {
    bodyParser: true, // Ensure this is enabled (default is true)
  },
};
export async function POST(req:NextRequest){

  let body = await req.json()
  
  
  console.log(body)
try{
  // console.log(process.env)
const transport = nodemailer.createTransport(
    {
      host: "live.smtp.mailtrap.io",
      port: 587,
  auth: {
    user:process.env.email_user,
pass:process.env.pass,
    
  }
    }
)


const mailOptions = {
    from :"info@demomailtrap.co",
    to:"hashirjamal18@gmail.com",
    subject:"Client Query from Portfolio Website",
    html: `
    <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
      <h2 style="color: #007bff;">New Client Query</h2>
      <p><strong>Name:</strong> ${body.name}</p>
      <p><strong>Email:</strong> ${body.email}</p>
      <p><strong>Subject:</strong> ${body.subject}</p>
      <p><strong>Message:</strong></p>
      <p style="background: #f8f9fa; padding: 10px; border-radius: 5px; font-style: italic;">${body.msg}</p>
      <hr>
      <p style="text-align: center; font-size: 12px; color: #888;">This email was sent from your portfolio website.</p>
    </div>`
}

const res = await transport.sendMail(mailOptions)

return NextResponse.json({status:"Success",message:"Email sent successfully"})
}
catch(e){
  console.log(e)
 
  return NextResponse.json({status:"Error",message:"Could not send email"})
}


}