
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
        <div className='flex justify-between items-start flex-col p-[70px] '>
            <div className='w-full'>
                <h1 className='text-[48px] mb-[20px] text-center'>About Me</h1>
            </div>
            <h3 className='text-[32px]'>Personal Info :</h3>
            <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 '>
                
                <div className='w-[400px] h-[187px]  flex justify-between items-center flex-col mt-[40px]'>
                    
                    
                        <div className='flex justify-between items-center w-full '>
                            <p className='w-[100px] text-[12px] lg:text-[16px]'>First name</p>
                            <p>:</p>
                            <p className='w-[200px]'>Yassine</p>
                        </div>
                        <div className='flex justify-between items-center w-full'>
                            <p className='w-[100px]'>Last name</p>
                            <p>:</p>
                            <p className='w-[200px]'>Khay</p>
                        </div>
                        <div className='flex justify-between items-center w-full'>
                            <p className='w-[100px]'>Age</p>
                            <p>:</p>
                            <p className='w-[200px]'>23</p>
                        </div>
                        <div className='flex justify-between items-center w-full'>
                            <p className='w-[100px]'>Phone</p>
                            <p>:</p>
                            <p className='w-[200px] '>+212767499201</p>
                        </div>

                    
                </div>
                <div className='w-[400px] h-[187px]  flex justify-between items-center flex-col mt-[40px]'>
                        <div className='flex justify-between items-center w-full'>
                            <p className='w-[100px]'>Freelance</p>
                            <p>:</p>
                            <p className='w-[200px]'>Available</p>
                        </div>
                        <div className='flex justify-between items-center w-full'>
                            <p className='w-[100px]'>AKI</p>
                            <p>:</p>
                            <p className='w-[200px]'>yakhay</p>
                        </div >
                        <div className='flex justify-between items-center w-full'>
                            <p className='w-[100px]'>linkedin</p>
                            <p>:</p>
                            <p className='w-[200px]'><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/khay-yassine-7a706b261/">click here</a></p>
                        </div>
                        <div className='flex justify-between items-center w-full'>
                            <p className='w-[100px]'>Email</p>
                            <p>:</p>
                            <p className='w-[200px]'>yassinekhay.dev@gmail.com</p>
                        </div>
                </div>
                <div className='  flex justify-between items-start flex-col mt-[40px]'>
                    <p className='text-[16px]'>am proficient in the C and C++ programming languages, as well
                        as web development using JavaScript, HTML, and CSS. I use Git
                        and GitHub for version control, ensuring effective collaboration
                        and rigorous project tracking. Additionally, I have experience
                        working with React and TailwindCSS for building modern,
                        responsive web applications.</p>
                        <div className="flex justify-between">
                            <button  onClick={() => downloadCV()} className=' mt-[20px] flex justify-center items-center w-[150px] h-[52px] border-2 border-[#0FE1C2] rounded-[30px] text-[14px] mr-[10px]'>DOWNLOAD CV <LuDownloadCloud className=' w-[20px] h-[20px] rounded-[50%] ml-[10px]'/> </button>
                            <button  onClick={() => viewCV()} className=' mt-[20px] flex justify-center items-center w-[150px] h-[52px] border-2 border-[#0FE1C2] rounded-[30px] text-[14px]'>view CV <MdOutlineGridView className=' w-[20px] h-[20px] rounded-[50%] ml-[10px]'/> </button>

                        </div>
                </div>
            </div>
            
        </div>
    </div>
  )
});

export default About