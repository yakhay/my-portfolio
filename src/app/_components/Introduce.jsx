'use client';
import React, { forwardRef } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

const Introduce = forwardRef((props, ref) => {
  const { scrollToSection } = props;
  useEffect(() => {
    if (typeof window !== 'undefined') {
        AOS.init();
    }
}, []);


  return (
    <div ref={ref}  className='flex justify-center items-center '>
        <div className='grid grid-cols-1  lg:grid-cols-2 lg:w-[60%] mt-[150px]'>
              <div className='w-[400px] flex justify-between items-start flex-col h-[400px]'>
                      <h3 className='text-[24px] text-white'>Welcome to my portfolio</h3>
                      <h1 className='text-[48px] text-white'>HELLO I AM KHAY YASSINE</h1>
                      <p className='text-[18px] text-white'>Web Developer , Frontend</p>
                      
                      
                          
                          <button onClick={() => scrollToSection('contact')} className=' text-white w-[200px] h-[68px] border-2 border-[#0FE1C2] rounded-lg'>Contact Me</button>
                      
                  </div>
                  <div data-aos="flip-up"> 
                    <div className='bg-cover-custom  relative w-[400px] h-[400px]'>
                      <img  className='w-[230px] absolute  top-[70px] right-[88px] opacity-85 ' src="/images/yakhay.png" alt="" />

                      </div>
              </div>
        </div>
    </div>
  )
});

export default Introduce