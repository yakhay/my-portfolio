'use client';
import React, { useState, useEffect } from 'react';

import { VscChromeClose } from "react-icons/vsc";
import { CiMenuBurger } from "react-icons/ci";




function Header({ scrollToSection }) {


  const [screenWidth, setScreenWidth] = useState(0);


  
  

  const handel = () => {
    console.log('clicked');
    const mobil = document.getElementById('mobile');
    const handel1 = document.getElementById('handel1');
    const handelclose1 = document.getElementById('handelclose1');
    if (handel1 && handelclose1) 
    {
      handel1.style.display = 'none';
      handelclose1.style.display = 'block';
    }
    
    if (mobil) {
      mobil.style.display = 'block';
    } 
}
function handelclose() {
    const mobil = document.getElementById('mobile');
    const handel1 = document.getElementById('handel1');
    const handelclose1 = document.getElementById('handelclose1');
    if (handel1 && handelclose1)
      {
        handel1.style.display = 'block';
        handelclose1.style.display = 'none';
      }
    if (mobil) {
      mobil.style.display = 'none';
    }
  }
  useEffect(() => {
    
    const handleResize = () => {
      if (typeof window !== 'undefined')
        setScreenWidth(window.innerWidth);
    };

    
    const mobil = document.getElementById('mobile');
    if (mobil &&screenWidth >= 768) {
      mobil.style.display ='none' ;
      handelclose();

    }

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [screenWidth]);
  
  return (
    <header className="bg-black fixed w-full z-50 items-center p-[7px]">
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 relative">
    <div className="flex h-16 items-center justify-between">
      <div className="flex-1 md:flex md:items-center md:gap-12">
        
                <img className='w-[50px] h-[50px]  shadow-[#0FE1C2] shadow-inner rounded-[50%]' src="/images/yakhay.png" alt="yakhay" />
       
      </div>

      <div className="md:flex md:items-center md:gap-12 ">
        <nav aria-label="Global" className="hidden md:block" >
          <ul className="flex items-center gap-6 text-sm">
            <li>
              <a className="text-[#13F3A7] transition hover:text-gray-500/75 " id='home'  onClick={() => scrollToSection('home')} > Home </a>
              
            </li>

            <li>
              <a className="text-gray-500 transition hover:text-gray-500/75" id='about' onClick={() => scrollToSection('about')}> About </a>
            </li>
            <li>
              <a className="text-gray-500 transition hover:text-gray-500/75" id='education' onClick={() => scrollToSection('education')}> Education </a>
            </li>

            <li>
              <a className="text-gray-500 transition hover:text-gray-500/75" id='skill' onClick={() => scrollToSection('skill')}> Skill </a>
            </li>

            <li>
              <a className="text-gray-500 transition hover:text-gray-500/75" id='projects' onClick={() => scrollToSection('projects')}> Projects </a>
            </li>

            <li>
              <a className="text-gray-500 transition hover:text-gray-500/75" id='contact' onClick={() => scrollToSection('contact')}> Contact </a>
            </li>
          </ul>
        </nav>

        
        
        <div className="block md:hidden relative">
        
          <button onClick={handel} id='handel1' className="block rounded  p-2 text-gray-600 transition hover:text-gray-600/75">
            <CiMenuBurger className='text-[#13F3A7] w-[30px] h-[30px] cursor-pointer' />
          </button>
          <button className='hidden' id='handelclose1' onClick={handelclose}>
            <VscChromeClose className='text-[#13F3A7] w-[30px] h-[30px] cursor-pointer' />
          </button>
        </div>
      </div>
    </div>

    <div className='absolute top-[20px] bg-black  right-[54px] hidden h-[250px] w-[50%] md:none' id='mobile'>
        <nav aria-label="Global" className="" >
          <ul className="flex items-center gap-4 text-sm flex-col p-2">
            <li>
              <a className="text-[#13F3A7] transition hover:text-gray-500/75 " id='home1'  onClick={() => scrollToSection('home')} > Home </a>
              
            </li>

            <li>
              <a className="text-gray-500 transition hover:text-gray-500/75" id='about1' onClick={() => scrollToSection('about')}> About </a>
            </li>
            <li>
              <a className="text-gray-500 transition hover:text-gray-500/75" id='education1' onClick={() => scrollToSection('education')}> Education </a>
            </li>

            <li>
              <a className="text-gray-500 transition hover:text-gray-500/75" id='skill1' onClick={() => scrollToSection('skill')}> Skill </a>
            </li>

            <li>
              <a className="text-gray-500 transition hover:text-gray-500/75" id='projects1' onClick={() => scrollToSection('projects')}> Projects </a>
            </li>

            <li>
              <a className="text-gray-500 transition hover:text-gray-500/75" id='contact1' onClick={() => scrollToSection('contact')}> Contact </a>
            </li>
          </ul>
        </nav>
        </div>
  </div>
</header>
  )
}

export default Header