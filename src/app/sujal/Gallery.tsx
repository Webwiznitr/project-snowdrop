"use client"
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { logos } from "../../../config/content/gallery";
//gallery component
const Gallery = () => {
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

  return (
    <>
      <div className='flex justify-center flex-wrap'>
                <div className=' border-solid border-2 pt-2 pb-2 w-32 text-center m-10 rounded-3xl' style={{ borderColor: "#8A67B5" }}>Gallery</div>
            </div> 
      <div className=" w-full overflow-hidden py-8 px-5 md:px-10">
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <div key={index} className="container flex">
              <img
                src={logo}
                alt="logo"
                width={600}
                height={420}
                loading="eager"
                className="h-14 w-auto sm:h-24 m-auto"
              style={{height: "420px", width:"300px"}}/>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};
export default Gallery;