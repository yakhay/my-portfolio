'use client';
import React, { forwardRef } from 'react';

const Education = forwardRef((props, ref) => {


  return (
    
        <div ref={ref}  className='flex justify-centar items-center flex-col p-[60px] '>
            
            <div className='w-full'>
                <h1 className='text-[48px] mb-[10px] text-center'>Education</h1>
            </div>
            <div className='grid grid-cols-1   lg:grid-cols-3  md:[80%]'>
                    <div className='h-[400px] flex items-center'>
                        <h3 className=' lg:text-[48px] italic text-[32px] '>Common core 
                        </h3>
                    </div>
                
                <div className='w-[5px] h-[400px] relative  bg-[#0FE1C2]  lg:block hidden'>
                    <div className='w-[30px] h-[30px] absolute rounded-[50%] bg-[#0FE1C2] top-[-1] left-[-13px]'></div>
                    <div className='w-[30px] h-[30px] absolute rounded-[50%] bg-[#0FE1C2] top-[50%] left-[-13px]'></div>
                    <div className='w-[30px] h-[30px] absolute rounded-[50%] bg-[#0FE1C2] top-[99%] left-[-13px]'></div>
                </div>
                <div className=''>
                    <div className=''>
                        <p className='text-[14px]'>2022 - 2024</p>
                        <h3 className='text-[24px]'>Common core at 1337 School </h3>
                        <p className='text-[#9F9F9F]'>1337 UM6P, Benguerir</p>
                        <p className='text-[#9F9F9F] w-[350px]'>The leading computer science training program in Morocco, part of the 42 Network</p>
                    </div>
                    <div className='mt-[20px]'>
                        <p className='text-[14px]'>2021 - 2022</p>
                        <h3 className='text-[24px]'>1 years in ofppt</h3>
                        <p className='text-[#9F9F9F]'>Ista , Benguerir</p>
                        <p className='text-[#9F9F9F]'>dev degital</p>
                    </div>
                    <div className='mt-[20px]'>
                        <p className='text-[14px]'>2018 - 2019</p>
                        <h3 className='text-[24px]'>Baccalaureate</h3>
                        <p className='text-[#9F9F9F]'>EL ASALAM , Benguerir</p>
                        <p className='text-[#9F9F9F]'>Physical Sciences</p>
                    </div>
                </div>
            </div>
        </div>
    
  )
});

export default Education