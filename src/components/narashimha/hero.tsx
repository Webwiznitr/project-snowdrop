"use client";
import React from 'react'
function hero(){
    return(<>
    <div className='hidden md:block'>
        <div className='main-hero flex flex-col relative top-56 justify-center items-center ml-20 mr-20 bg-[#262628] text-[#FFFFFF] px-4 py-4'>
            <div>
                <p className='font-bold text-[64px] text-center mb-[24px]'>Empowering Students to Create Stunning Websites</p>
            </div>
            <div>
                <p className='text-[24px] text-center mb-[56px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, reprehenderit neque illo iure aspernatur esse assumenda reiciendis nihil animi! Necessitatibus illum maxime, sint corrupti sequi molestiae? Quaerat, quod maxime! Nisi?
                </p>
            </div>
            <div className=''>
                <button className='border-[2px] border-[#8037B1] px-5 py-2.5 mr-4 rounded-md bg-[#3F3BFA] text-[#FFFFFF] font-semibold'>Primary button</button>
                <button className='border-[2px] border-[#8037B1] px-5 py-2.5 mr-4 rounded-md text-[#FFFFFF] font-semibold bg-[#262628]'>Secondary button</button>
            </div>
        </div>
    </div>





    <div className='block md:hidden'>
        <div className='main-hero flex flex-col relative top-56 justify-center items-center ml-10 mr-10 bg-[#262628] text-[#FFFFFF] px-4 py-4'>
            <div>
                <p className='font-bold text-[32px] text-center mb-[24px]'>Empowering Students to Create Stunning Websites</p>
            </div>
            <div>
                <p className='text-[12px] text-center mb-[28px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, reprehenderit neque illo iure aspernatur esse assumenda reiciendis nihil animi! Necessitatibus illum maxime, sint corrupti sequi molestiae? Quaerat, quod maxime! Nisi?
                </p>
            </div>
            <div className='flex flex-row'>
                <button className='border-[2px] border-[#8037B1] px-2.5 py-2 mr-4  rounded-md bg-[#3F3BFA] text-[#FFFFFF] font-semibold text-[12px]'>Primary button</button>
                <button className='border-[2px] border-[#8037B1] px-2.5 py-2 mr-4 rounded-md text-[#FFFFFF] font-semibold bg-[#262628] text-[12px]'>Secondary button</button>
            </div>
        </div>
    </div>
        
</>)
}
export default hero