'use client';
import React, { forwardRef } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

const Projects = forwardRef((props, ref) => {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            AOS.init();
        }
    }, []);
  return (
    <div ref={ref}  className='flex max-w-full justify-center items-center flex-col md:p-[70px] '>

        <div >
            <h1 className='text-[48px] mb-[20px] text-center'>Projects</h1>
        </div>
        
            <div  className='grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-24  items-center'>
                <div data-aos="fade-right" className='w-[340px] md:w-auto'>
                    <img className='rounded-t-lg' src="/images/Projects/Screenshot 2024-11-03 at 09.08.51.png" alt="" />
                    <div className='flex justify-center items-center flex-col '>
                        <a target="_blank" rel="noopener noreferrer" className=' flex justify-center items-center w-[150px] h-[50px] border-2 border-[#0FE1C2] rounded-lg mt-[20px] hover:bg-[#0FE1C2]' href="https://luxenest.vercel.app/"> View project</a>
                    </div>

                    
                </div>
                 <div data-aos="fade-left" className='w-[340px] md:w-auto'>
                    <img className='rounded-t-lg'  src="/images/Projects/Screenshot 2024-11-03 at 09.09.38.png" alt="" />
                    <div className='flex justify-center items-center flex-col '>
                        <a target="_blank" rel="noopener noreferrer" className=' flex justify-center items-center w-[150px] h-[50px] border-2 border-[#0FE1C2] rounded-lg mt-[20px] hover:bg-[#0FE1C2]' href="https://food-eta-rose.vercel.app/"> View project</a>
                    </div>
                    
                </div>
                <div data-aos="fade-right" className='w-[340px] md:w-auto'>
                    <img className='rounded-t-lg'  src="/images/Projects/Screenshot 2024-11-03 at 10.06.35.png" alt="" />
                    <div className='flex justify-center items-center flex-col '>
                        <a target="_blank" rel="noopener noreferrer" className=' flex justify-center items-center w-[150px] h-[50px] border-2 border-[#0FE1C2] rounded-lg mt-[20px] hover:bg-[#0FE1C2]' href="https://garb-anzo.tech/"> View project</a>
                    </div>
                    
                </div>
                <div data-aos="fade-left" className='w-[340px] md:w-auto'>
                    <img className='rounded-t-lg blur-sm'  src="/images/Projects/project.png" alt="" />
                    <div className='flex justify-center items-center flex-col '>
                        <p className=' flex justify-center items-center w-[150px] h-[50px] border-2 border-[#0FE1C2] rounded-lg mt-[20px] hover:bg-[#0FE1C2]' href="/images/Projects/projecs.png"> coming soon</p>
                    </div>
                    
                </div> 
                
            </div>  
        
    </div>
  )
});

export default Projects