'use client';

import { LuDownloadCloud } from "react-icons/lu";
import React, { forwardRef } from 'react';
import { MdOutlineGridView } from "react-icons/md";


const About = forwardRef((props, ref) => {
    function downloadCV() {
        // Path to your CV file
        const cvFilePath = '/khay yassine En (1).pdf';
        console.log(cvFilePath);
    
        // Create an anchor element and set the download attribute
        const link = document.createElement('a');
        link.href = cvFilePath;
        link.download = 'Yassine_Khay_CV.pdf'; // The name of the downloaded file
    
        // Append the anchor to the document, click it, and then remove it
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    function viewCV() {
        const cvFilePath = '/khay yassine En (1).pdf';
        
        // Open the CV in a new browser tab
        window.open(cvFilePath, '_blank', 'noopener,noreferrer');
    }

  return (
    <div ref={ref}>
        <div className='flex justify-center items-center flex-col p-[70px] '>
            <div className='w-full'>
                <h1 className='text-[48px] mb-[20px] text-center'>About Me</h1>
            </div>
            
            <div className='grid grid-cols-1 lg:grid-cols-2 '>
                
                
                
                 
                <div className='  flex justify-around items-center flex-col mt-[40px] '>
                    <p className='text-[18px] w-[320px] lg:text-[24px] md:text-[24px]  md:w-[500px]'>I specialize in modern web development, with a strong foundation in JavaScript, HTML, and CSS, and proficiency in C and C++ programming. I excel in building responsive and scalable applications using React and Next.js, delivering high-performance user interfaces and seamless experiences. Additionally, I utilize Git and GitHub for efficient version control and collaborative development, ensuring streamlined project workflows.</p>
                        <div className="flex justify-between mt-[20px]">
                            <button  onClick={() => downloadCV()} className=' mt-[20px] flex justify-center items-center w-[150px] h-[52px] border-2 border-[#0FE1C2] rounded-[30px] text-[12px] mr-[10px]'>DOWNLOAD CV <LuDownloadCloud className=' w-[20px] h-[20px] rounded-[50%] ml-[10px]'/> </button>
                            <button  onClick={() => viewCV()} className=' mt-[20px] flex justify-center items-center w-[150px] h-[52px] border-2 border-[#0FE1C2] rounded-[30px] text-[12px]'>view CV <MdOutlineGridView className=' w-[20px] h-[20px] rounded-[50%] ml-[10px]'/> </button>

                        </div>
                </div>
                <img className="custom-image opacity-80" src="/images/about.png" alt="" />         
                   </div>
            
        </div>
    </div>
  )
});

export default About