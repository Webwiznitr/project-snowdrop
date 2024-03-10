"use client";
import React from "react";
import { AnimatedTooltip } from "../components/ui/animated-tooltip";
import Image from "next/image";

const people = [
  {
    id: 1,
    name: "Anushrey",
    designation: "President",
    image:
      "/image/anushrey.jpg",
  },
  {
    id: 2,
    name: "Raj Aryan",
    designation: "Vice President",
    image:
      "/image/raj.jpg",
  },
  {
    id: 3,
    name: "Ankit",
    designation: "Technical Head",
    image:
      "/image/ankit.jpg",
  },
  {
    id: 4,
    name: "Sumant",
    designation: "Technical Head",
    image:
      "/image/sumant.jpg",
  },
  {
    id: 5,
    name: "Rohan",
    designation: "Design Lead",
    image:
      "/image/rohan.jpg",
  },
  /*{
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      "",
  },*/
];

export function AnimatedTooltipPreview() {
  return (
    <>
    
    <h2 className="md:text-7xl text-3xl lg:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 relative z-20 mt-16 mb-16 ">
        Team Members
      </h2>
      
      
    
    
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
    
    </>
  );
}
