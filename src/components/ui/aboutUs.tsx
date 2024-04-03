"use client"
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { logos } from "../../../config/content/gallery";
function about() {
 const [settings] = useState({
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    swipeToSlide: false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 491,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  });

    return (<>
        <div className='flex justify-center flex-wrap'>
            <div className=' border-solid border-2 pt-2 pb-2 w-32 text-center m-10 rounded-3xl' style={{ borderColor: "#8A67B5" }}>About us</div>
        </div>
        <div className='flex justify-center flex-wrap'>
            <div className='text-3xl mb-10 text-center' style={{ background: "-webkit-linear-gradient(left, #8C6CEA , #FF5E69 , #FF8A56 , #FFA84B)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Not just any other technical club</div>
        </div>
        <div className='flex justify-center m-10 gap-10 flex-wrap' >
            <div className=' border-solid border-2 rounded-lg ' style={{ borderColor: "#8A67B5", height: "205px", width: "381px", paddingTop: "23px", paddingBottom: "23px", paddingLeft: "23px", paddingRight: "23px", backgroundImage: "linear-gradient(45deg, #412463, #5D99F4)", backgroundColor: "#A962FF" }}><h1 className='font-bold text-lg  text-center pb-4'>Made for students</h1> <p className='text-lg text-center'>If you are crazy about development we are crazy about you. Any other barrier that you think exists, DOESN'T.</p></div>
            <div className='border-solid border-2 rounded-lg ' style={{ borderColor: "#8A67B5", height: "205px", width: "381px", paddingTop: "23px", paddingBottom: "23px", paddingLeft: "23px", paddingRight: "23px", backgroundImage: "linear-gradient(45deg, #412463, #5D99F4)" }}><h1 className='font-bold text-lg  text-center pb-6'>Development</h1> <p className='text-lg text-center'>We focus on Design as much as developing. At last the eye sees it first</p></div>
            <div className=' border-solid border-2 rounded-lg ' style={{ borderColor: "#8A67B5", height: "205px", width: "381px", paddingTop: "23px", paddingBottom: "23px", paddingLeft: "23px", paddingRight: "23px", backgroundImage: "linear-gradient(45deg, #412463, #5D99F4)" }}><h1 className='font-bold text-lg  text-center pb-5'>Practical Guide</h1> <p className='text-lg text-center'>We guide you everytime you need us. Literally anywhere you want to go we have a guide for that.</p></div>
        </div >

          <div className='flex justify-center flex-wrap'>
                <div className=' border-solid border-2 pt-2 pb-2 w-32 text-center m-10 rounded-3xl' style={{ borderColor: "#8A67B5" }}>Gallery</div>
            </div> 
      <div className=" w-full overflow-hidden py-8 px-5 md:px-10">
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <div key={index} className="container flex">
              <Image
                src={logo}
                alt="logo"
                width={600}
                height={420}
                loading="eager"
                className="h-14 w-auto sm:h-24 m-auto"
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
    )
}

export default about
