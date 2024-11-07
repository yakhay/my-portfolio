'use client';
import React, { forwardRef } from 'react';

const Skill = forwardRef((props, ref) => {


  return (
    <div ref={ref} className='flex justify-center items-center flex-col'>
        
        <div className='w-full'>
                <h1 className='text-[48px] mb-[20px] text-center'>Skills</h1>
            </div> 
        <div className='grid grid-cols-2 lg:grid-cols-4  items-center gap-11 md:gap-24'>
            
            <div className='flex items-center justify-center  flex-col'>
                <img className='w-[100px] md:w-[150px]' src="/images/skills/Group 15 (1).png" alt="" />
                <p className='mt-[15px] md:text-[30px] text-[24px]'>c</p>
            </div>
            <div className='flex items-center justify-center  flex-col'>
                <img className='w-[100px] md:w-[150px]' src="/images/skills/Group 15 (2).png" alt="" />
                <p className='mt-[15px] md:text-[30px] text-[24px]'>c++</p>    
            </div>
            <div className='flex items-center justify-center  flex-col'>
                <img className='w-[100px] md:w-[150px]' src="/images/skills/Group 15 (2).png" alt="" />
                <p className='mt-[15px] md:text-[30px] text-[24px]'>javascript</p>
            </div>
            <div className='flex items-center justify-center  flex-col'>
                <img className='w-[100px] md:w-[150px]' src="/images/skills/Group 15 (5).png" alt="" />
                <p className='mt-[15px] md:text-[30px] text-[24px]'>react</p>
            </div>
            <div className='flex items-center justify-center  flex-col'>
                <img className='w-[100px] md:w-[150px]' src="/images/skills/Group 15 (1).png" alt="" />
                <p className='mt-[15px] md:text-[30px] text-[24px]'>html && css</p>
            </div>
            <div className='flex items-center justify-center  flex-col'>
                <img className='w-[100px] md:w-[150px]' src="/images/skills/Group 15 (3).png" alt="" />
                <p className='mt-[15px] md:text-[30px] text-[24px]'>Next js</p>
            </div>
            <div className='flex items-center justify-center  flex-col'>
                <img className='w-[100px] md:w-[150px]' src="/images/skills/Group 15 (6).png" alt="" />
                <p className='mt-[15px] md:text-[30px] text-[24px]'>tailwind css</p>
            </div>
            <div className='flex items-center justify-center  flex-col'>
                <img className='w-[100px] md:w-[150px]' src="/images/skills/Group 15 (4).png" alt="" />
                <p className='mt-[15px] md:text-[30px] text-[24px]'>Git && GitHub</p>
            </div>
        </div>
    </div>
  )
});

export default Skill