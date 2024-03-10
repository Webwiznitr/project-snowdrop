"use client";
import React from "react";
import { BackgroundGradient } from "../components/ui/background-gradient";
import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";
const handleClick = () => {
  // Your click event handling logic here
  window.location.href = "https://www.hackodisha.tech/";
}
export function BackgroundGradientDemo() {
  return (
    <>
    <h2 className="md:text-7xl text-3xl lg:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 relative z-20 mt-16 mb-16">
        Flagship Event
      </h2>
    <div className="flex justify-center mx-4 sm:mx-auto">
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <Image
          src={`/image/HO.png`}
          alt="jordans"
          height="400"
          width="400"
          className="object-contain"
        />
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          HACKODISHA
        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400">
        Hackodisha, the premier tech event of NIT ROURKELA, brings together innovators, developers, and enthusiasts from around the globe for a transformative journey into the realms of technology and creativity. Join us as we explore cutting-edge solutions, foster collaboration, and push the boundaries of innovation.
        </p>
        <button className="rounded-full pl-2 pr-2 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800 " onClick={handleClick}>
          <span>Website</span>
          
        </button>
      </BackgroundGradient>
    </div>
    </>
  );
}
