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
    if (home && about && education && skill && projects && contact) {
        console.log('resetting colors');
        about.style.color = '#9A9393';
        education.style.color = '#9A9393';
        skill.style.color = '#9A9393';
        projects.style.color = '#9A9393';
        contact.style.color = '#9A9393';
        home.style.color = '#9A9393';
    }
    
    
    switch (section.toLowerCase()) { 
        case 'home':
            home.style.color = '#13F3A7';
            ref = homeRef;
            break;
        case 'about':
            about.style.color = '#13F3A7';
            ref = aboutRef;
            break;
        case 'education':
            ref = educationRef;
            education.style.color = '#13F3A7';
            break;
        case 'contact':
            ref = contactRef;
            contact.style.color = '#13F3A7';
            break;
        case 'skill':
            ref = skillRef;
            skill.style.color = '#13F3A7';
            break;
        case 'projects':
            ref = projectsRef;
            projects.style.color = '#13F3A7';
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
    <div>
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
