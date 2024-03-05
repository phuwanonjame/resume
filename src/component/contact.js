import React, { useState } from "react";
import { Element } from "react-scroll";
import emailjs from "emailjs-com"; 

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const templateParams = {
            to_name: name,
            to_email: 'jgamerz0001@gmail.com', 
            message: `Name: ${name}\nEmail:${email}
            Phone: ${phone}\nMessage: ${message}`, 
            
            
        };
        emailjs.send('service_6y36a3f', 'template_uk2eri8', templateParams, 'S_8qBx1CblZqyA-Km')
            .then((response) => {
                console.log('Email sent successfully:', response.status, response.text);
                setEmail("");
                setName("");
                setMessage('');
                setPhone('');
                setSubject('');

            }, (error) => {
                console.error('Error sending email:', error);
              
            });
    };

    return (
        <Element name="contact" className=" bg-black max-sm:h-[130%] max-md:h-[100%]  h-screen w-full">
            <div className="h-full flex flex-col justify-center items-center ">
                <div className="flex justify-center items-center">
                    <h1 className="text-6xl text-white max-md:text-5xl">CONTACT <span className="text-6xl max-md:text-5xl text-red-500">ME!</span></h1>
                </div>
                <div className="w-[100%] max-md:w-[90%] max-md:flex-col flex justify-evenly items-center pt-20">
                    <div className="max-md:hidden">
                        <img className="max-md:w-72" src="https://t4.ftcdn.net/jpg/05/97/46/37/360_F_597463789_8mfyr6Lz8JtbESp5ZYyR2XxFUZg6FyQQ.png" alt=""></img>
                    </div>
                    <div className=" shadow-md shadow-red-500 rounded-md ">
                        <form onSubmit={handleSubmit}>
                            <div className="p-5 flex gap-2">
                                <input type="text" placeholder="Full Name" className="p-2 w-full rounded-md" value={name} onChange={(e) => setName(e.target.value)}></input>
                                <input type="email" placeholder="Email" className="p-2 w-full rounded-md" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                            </div>
                            <div className="p-5 flex gap-2">
                                <input type="tel" placeholder="Mobile Phone" className="p-2 w-full rounded-md" value={phone} onChange={(e) => setPhone(e.target.value)}></input>
                                <input type="text" placeholder="Email Subject" className="p-2 w-full rounded-md" value={subject} onChange={(e) => setSubject(e.target.value)}></input>
                            </div>
                            <div className="p-5">
                                <textarea className="w-full p-2 rounded-md" placeholder="Your Message" rows={10} value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                            </div>
                            <div className=" w-full flex justify-center items-center pb-5">
                            <button type="submit" className=" p-2 bg-red-500 text-white rounded-md">Send Message</button>
                            </div>
                           
                        </form>
                    </div>
                </div>
            </div>
        </Element>
    );
}

export default Contact;
