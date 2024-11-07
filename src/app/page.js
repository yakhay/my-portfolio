'use client';
import Image from "next/image";
import Introduce from "./_components/Introduce";
import About from "./_components/About";
import Education from "./_components/Education";
import Skill from "./_components/Skill";
import Projects from "./_components/Projects";
import Contact from "./_components/Contact";
import { useRef } from "react";
import Header from "./_components/Header";



export default function Home() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const educationRef = useRef(null);
  const contactRef = useRef(null);
  const skillRef = useRef(null);
  const projectsRef = useRef(null);
  let ref = useRef(null);

  const scrollToSection = (section) => {

    const home = document.getElementById('home');
    const about = document.getElementById('about');
    const education = document.getElementById('education');
    const skill = document.getElementById('skill');
    const projects = document.getElementById('projects');
    const contact = document.getElementById('contact');
    const home1 = document.getElementById('home1');
    const about1 = document.getElementById('about1');
    const education1 = document.getElementById('education1');
    const skill1 = document.getElementById('skill1');
    const projects1 = document.getElementById('projects1');
    const contact1 = document.getElementById('contact1');
    if (home && about && education && skill && projects && contact) {
        console.log('resetting colors');
        about.style.color = '#9A9393';
        education.style.color = '#9A9393';
        skill.style.color = '#9A9393';
        projects.style.color = '#9A9393';
        contact.style.color = '#9A9393';
        home.style.color = '#9A9393';
    }
    if (home1 && about1 && education1 && skill1 && projects1 && contact1) {
        console.log('resetting colors');
        about1.style.color = '#9A9393';
        education1.style.color = '#9A9393';
        skill1.style.color = '#9A9393';
        projects1.style.color = '#9A9393';
        contact1.style.color = '#9A9393';
        home1.style.color = '#9A9393';
    }
    
    
    switch (section.toLowerCase()) { 
        case 'home':
            home.style.color = '#13F3A7';
            home1.style.color = '#13F3A7';
            ref = homeRef;
            break;
        case 'about':
            about.style.color = '#13F3A7';
            about1.style.color = '#13F3A7';
            ref = aboutRef;
            break;
        case 'education':
            ref = educationRef;
            education.style.color = '#13F3A7';
            education1.style.color = '#13F3A7';
            break;
        case 'contact':
            ref = contactRef;
            contact.style.color = '#13F3A7';
            contact1.style.color = '#13F3A7';
            break;
        case 'skill':
            ref = skillRef;
            skill.style.color = '#13F3A7';
            skill1.style.color = '#13F3A7';
            break;
        case 'projects':
            ref = projectsRef;
            projects.style.color = '#13F3A7';
            projects1.style.color = '#13F3A7';
            break;
        default:
            return;
    }

    if (ref && ref.current) {
        
        
        const targetPosition = ref.current.getBoundingClientRect().top + window.scrollY;


        if (Math.abs(window.scrollY - targetPosition) < 5) {
            console.log(section, 'already in view');
            return ; 
        }
        console.log(section, 'scrolling to view');

        if (ref && ref.current) {
            
            setTimeout(() => {
                ref.current.scrollIntoView({ behavior: 'smooth' });
            }, 10); 
        }
    }
};

  return (
    <div className=" overflow-x-hidden">
      <Header scrollToSection={scrollToSection} />
      <Introduce ref={homeRef} scrollToSection={scrollToSection} />
      <About ref={aboutRef} />
      <Education ref={educationRef} />
      <Skill ref={skillRef} />
      <Projects ref={projectsRef} />
      <Contact ref={contactRef} />
    </div>
  );
}
