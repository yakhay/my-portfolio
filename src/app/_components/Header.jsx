
import React from 'react'


function Header({ scrollToSection }) {
  
  return (
    <header className="bg-black fixed w-full z-50 items-center p-[7px]">
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div className="flex h-16 items-center justify-between">
      <div className="flex-1 md:flex md:items-center md:gap-12">
        
                <img className='w-[50px] h-[50px]  shadow-[#0FE1C2] shadow-inner rounded-[50%]' src="/images/yakhay.png" alt="yakhay" />
       
      </div>

      <div className="md:flex md:items-center md:gap-12">
        <nav aria-label="Global" className="hidden md:block" >
          <ul className="flex items-center gap-6 text-sm">
            <li>
              <a className="text-gray-500 transition hover:text-gray-500/75 " id='home'  onClick={() => scrollToSection('home')} > Home </a>
              
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

        <div className="hidden md:relative md:block">
          

          
        </div>

        <div className="block md:hidden">
          <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</header>
  )
}

export default Header