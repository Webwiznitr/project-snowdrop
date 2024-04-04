"use client";
import React from 'react'
import { useState } from 'react';
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

function page() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isIcon, setIsIcon] = useState(false);

    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
      setIsIcon(!isIcon);
    };
    return (<>
    <div className='hidden md:block'>
        <div className="main-navbar mx-12 h-12 sticky mt-10 flex justify-between items-center text-white bg-[#0f0f10] font-medium rounded-md z-10">
          <p className="nav-item1 ml-4 font-[1000]" style={{ 
      backgroundImage: 'linear-gradient(to top, #7730B5, #FFFFFF)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      color: 'transparent'
    }}>&lt;Webwiz/&gt;</p>
          <div className="nav-item2 flex">
            <p className="nav-item21 mr-10">About</p>
            <p className="nav-item21 mr-10">Projects</p>
            <p className="nav-item21 mr-10">Workshops</p>
            <p className="nav-item21">Events</p>
          </div>
          <div className="nav-item3 mr-4 border-2 px-4 py-1 bg-[#11081e] border-[#8249b5] rounded-md">Join Us</div>
        </div>
    </div>

    
        {isSidebarOpen && (
    <div className='block md:hidden h-screen bg-black w-1/2 text-white z-10 mx-0 my-0'>
        <button onClick={toggleSidebar} className='relative top-4 start-4'>{isIcon ? <FaBars size={30}/>:<IoClose size={30}/>}</button>
        <div className='list-none text-center h-full flex flex-col items-center justify-evenly mt-4'>
            <li className="side-item">About</li>
            <li className="side-item">Projects</li>
            <li className="side-item">Workshops</li>
            <li className="side-item">Events</li>
            <li className="side-item ml-3 mr-3">Join Us</li>
        </div>
    </div>
        )}
        {!isSidebarOpen && (
    <div className='block md:hidden z-10 relative top-10 start-10'>
      <button onClick={toggleSidebar}>{isIcon ? <FaBars/>:<IoClose/>}</button>
      </div>
        )}
    
    </>
    )
}

export default page