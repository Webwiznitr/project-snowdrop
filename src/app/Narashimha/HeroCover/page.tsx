import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
  <div>
  <div className="absolute inset-0 -z-10 h-full w-full bg-[#080512] bg-[linear-gradient(to_right,#0D0719_2px,transparent_1px),linear-gradient(to_bottom,#0D0719_2px,transparent_1px)] bg-[size:6rem_4rem]"></div>
  {/* <div className='border-2 border-red-500 flex flex-row justify-between h-full'>
    <div className="w-1/3 ">
        <img alt='gradient' src={"/Ellipse4.svg"} style={{ width: "100%"}}/>
    </div>
    <div className="w-1/3"></div>
    <div className="w-1/3 ">
        <img alt='gradient' src={"/Ellipse4.svg"} style={{ width: "100%"}}/>
    </div>
  </div> */}
  <div className='first'>
    <div className="flex flex-row justify-between h-full border-2">
        <div className="w-1/2 h-full">
        <Image src="/Ellipse444.svg" alt="gradient" width={300} height={300} layout='responsive' objectFit='cover'/>
        </div>
        <div className="w-1/2 h-full">
            <Image src="/Ellipse444.svg" alt="gradient" width={300} height={300} layout='responsive' objectFit='cover'/>
        </div>
    </div>
  </div>
</div>
  )
}

export default page