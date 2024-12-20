"use client";


import emailjs from 'emailjs-com';
import { FaPhoneAlt } from "react-icons/fa";
import Link from 'next/link';


import React, { forwardRef } from 'react';

const Contact = forwardRef((props, ref) => {




    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const data = {
            name: form.name.value,
            email: form.email.value,
            subject: form.subject.value,
            message: form.message.value,
        };
    
        
        emailjs.send('service_huc9jsm', 'template_ko2iq0d', data, '_DGJ18cN9BokZsCiI')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                
                form.reset();
            })
            .catch((error) => {
                console.error('FAILED...', error);
            });
    };
  return (
    <div ref={ref} className='flex justify-center items-center flex-col '>
        <div >
            <h1 className='text-[48px] mb-[20px] text-center'>Contact</h1>
        </div>
        <div className='grid grid-cols-1  md:grid-cols-2  md:w-[90%] lg:w-[70%] items-center justify-center'>
            
        <form className='flex flex-col   w-[330px] md:w-[350px]]' onSubmit={handleSubmit}>
                <input className=' w-[330px] md:w-[350px] h-[50px] border-2 border-[#f2f3f2] rounded-lg bg-black p-[20px] text-[#f2f3f2]' type="text" placeholder='Name' name="name" required />
                <input className=' w-[330px] md:w-[350px] h-[50px] border-2 border-[#f2f3f2] rounded-lg bg-black p-[20px] text-[#f2f3f2] mt-[20px]' type="email" placeholder='Email' name="email" required />
                <input className=' w-[330px] md:w-[350px] h-[50px] border-2 border-[#f2f3f2] rounded-lg bg-black p-[20px] text-[#f2f3f2] mt-[20px]' type="text" placeholder='Subject' name="subject" required />
                <textarea className=' w-[330px] md:w-[350px] h-[150px] border-2 border-[#f2f3f2] rounded-lg bg-black p-[20px] text-[#f2f3f2] mt-[20px]' placeholder='Message' name="message" required></textarea>
                <button className='text-white w-[200px] h-[68px] border-2 border-[#0FE1C2] rounded-lg mt-[20px]' type="submit">Send</button>
            </form>
            
            <div>
                <h2 className='font-bold text-[32px] mt-[20px] md:text-start text-center'>DON’T BE SHY</h2>
                <p className=' w-[330px]  mt-[20px] lg:w-[500px] Inconsolata md:text-start text-center'>Feel free to reach out if you have any questions, collaboration opportunities, or just want to connect. I'm always open to new projects and discussions.</p>
                <div className='flex justify-around items-center w-[300px] mt-[20px]'>
                    <img className='w-[45px] h-[30px]' src="/images/Vector.png" alt="" />
                    <div >
                        <h3>Email :</h3>
                        <Link href="mailto:yassinekhay.dev@gmail.com">
                        yassinekhay.dev@gmail.com
                        </Link>
                        
                    </div>
                    
                    
                </div>
                
                <div className='flex justify-around items-center w-[300px] mt-[20px]'>
                        <FaPhoneAlt color='#0FE1C2' className='w-[45px] h-[30px]'/>
                        <div className='w-[200px]'>
                            <h3>tel :</h3>
                            <p>+212 7 67 49 92 01</p>
                        </div>
                </div>
                
                <div  className='flex justify-between items-center  p-[70px]  mt-[20px]'>
                        <a href="https://www.linkedin.com/in/yassine-khay-7a706b261/" target="_blank" rel="noopener noreferrer"><img src="/images/media/skill-icons_linkedin.png" alt="" /></a>
                        <a href="https://www.instagram.com/_yakhay_/" target="_blank" rel="noopener noreferrer"><img src="/images/media/skill-icons_instagram.png" alt="" /></a>
                        <a href="https://github.com/yakhay" target="_blank" rel="noopener noreferrer"><img src="/images/media/Vector (1).png" alt="" /></a>

                    </div>
            </div>
        </div>
    </div>
  )
});

export default Contact