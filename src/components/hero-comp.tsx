"use client";
import React from "react";
import { cn } from "@/utils/cn";
import { Spotlight } from "../components/ui/Spotlight";


export function SpotlightPreview() {
  return (
    <>
    <div className="h-[40rem] w-full rounded-md flex flex-col  bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden justify-center">
    <div className="mx-8 sm:mr-6 mt-12  sm:mb-4 flex  items-start justify-center order-first">
                <img src="/image/webwizlogo.png" alt="Webwiz Logo" className="mt-6 h-12 sm:h-12  mx-2 object-cover" />
                <div className="border-r border-gray-600 h-20 sm:h-24 mx-2"></div>
                <a href="https://www.hackodisha.tech/" target="_blank">
                <img src="/image/HO3logo.png" alt="Hackodisha Logo" className="mt-9 h-6 mx-2" />
                </a>
    </div>
      <div className="flex items-center justify-center">
      <Spotlight
        className="-top-5 sm:-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full  md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
         Team Webwiz 
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
        Web development club of NITR
        </p>
        <div className="flex flex-col  items-center mt-6">
    
          <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50" >
        <a href="#projects">View Projects</a>
        </button>
  
        </div>
        </div>
      </div>
    </div>
    </>
  );
}
