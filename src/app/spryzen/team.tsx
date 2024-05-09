import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";


const teamMembers = [
    {
        id: 1,
        name: "Name",
        image: "/image/anushrey.jpg",
        role: "Role",
    },
    {
        id: 2,
        name: "Name",
        image: "/image/raj.jpg",
        role: "Role",
    },
    {
        id: 3,
        name: "Name",
        image: "/image/ankit.jpg",
        role: "Role",
    },
    {
        id: 4,
        name: "Name",
        image: "/image/anushrey.jpg",
        role: "Role",
    },
    {
        id: 5,
        name: "Name",
        image: "/image/raj.jpg",
        role: "Role",
    },
];

const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 600,
    fade: true,
    autoplaySpeed: 7000,
    pauseOnHover: true,
    swipeToSlide: true,
    cssEase: "linear",
  };

export default function Team(){
    return(
        <>
        <div className="text-center pt-10">
        <h1 className="text-lg font-semibold text-purple-800">WHO WE ARE</h1>
        <h2 className="md:text-3xl text-xl font-bold 
        inline-block text-transparent bg-clip-text
        bg-gradient-to-r from-[#8C6CEA] via-[#FF5E69] to-[#FFA84B]">
            Meet our Team
        </h2>
        <p className="mx-auto px-4 mt-2 max-w-[550px]">Just take a look - each member of the team is watching your
            every gesture and will hear your every whisper.
        </p>
        </div>

        <div className="hidden sm:flex flex-wrap justify-evenly mt-7 mx-auto w-[90%] space-x-3">
            {teamMembers.map((member) => 
                <div key={member.id} className="mb-7">
                    <Image src={member.image} alt="" width={224} height={467}
                    className="w-[224px] h-[467px] object-cover rounded-lg" />
                </div>
            )}
        </div>
        
        <div className="sm:hidden w-3/4 mx-auto py-10 ">
        <Slider {...settings}>
            {teamMembers.map((member) => 
                <div key={member.id} className="flex">
                    <Image src={member.image} alt="" width={224} height={467}
                    className="w-[224px] h-[467px] object-cover rounded-lg
                    mx-auto" />
                </div>
            )}
        </Slider>
        </div>
        </>
    );
};