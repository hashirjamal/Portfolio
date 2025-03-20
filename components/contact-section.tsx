"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import axios from "axios"
import React, { useState } from "react"
import {toast} from "react-hot-toast"

type msg = {
  name:string,
  email:string,
  subject:string,
  msg:string
}

export default function ContactSection() {

    

const [userMsg,setUserMsg] = useState<msg>({
  name:"",
  email:"",
  subject:"",
  msg:""
})

const handleChange = (key:keyof msg,value:string) =>{

  let obj:msg = {...userMsg}

  obj[key] = value

  setUserMsg(obj)

}

const url = process.env.VERCEL_UR || "localhost:3000"
const sendEmail = async(e:React.FormEvent)=>{
  e.preventDefault()
  console.log(userMsg)
  try{
    const res= await axios.post(`https://${url}/api/send-email`,{
     ...userMsg
    }, {
      headers: {
        "Content-Type": "application/json",
      }})
    console.log(res)
    setUserMsg({
      name:"",
      email:"",
      subject:"",
      msg:""
    })

    toast.success("Form Submitted Successfully. I will get back to you soon")
  }
  catch(e){
    
    toast.error("Something went wrong")
    console.log(e)
  }
}

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">GET IN TOUCH</h2>
          <p className="mt-4 text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind or want to discuss a potential collaboration? Feel free to reach out!
          </p>
          <p className="mt-4 text-muted-foreground max-w-3xl mx-auto">
           Fill this contact form and I will get back to you in 24 hours.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="font-bold">Location</h3>
                <p className="text-muted-foreground">Karachi, Pakistan</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Mail className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="font-bold">Email</h3>
                <p className="text-muted-foreground">hashirjamal18@gmail.com</p>
              </div>
            </div>
           
          </div>

          <form className="space-y-4"  onSubmit={sendEmail}>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Input id="name" placeholder="Your Name" value={userMsg.name} onChange={(e)=>handleChange("name",e.target.value)} required className="w-full" />
              </div>
              <div className="space-y-2">
                <Input id="email" type="email" value={userMsg.email} onChange={(e)=>handleChange("email",e.target.value)} placeholder="Your Email" required className="w-full" />
              </div>
            </div>
            <div className="space-y-2">
              <Input id="subject" placeholder="Subject" value={userMsg.subject} onChange={(e)=>handleChange("subject",e.target.value)} className="w-full" />
            </div> 
            <div className="space-y-2">
              <Textarea id="message" placeholder="Your Message" value={userMsg.msg} onChange={(e)=>handleChange("msg",e.target.value)} required className="min-h-[150px] w-full" />
            </div>
            <Button  type="submit" className="w-full bg-primary hover:bg-primary/90">
              SEND MESSAGE
              <Send className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

