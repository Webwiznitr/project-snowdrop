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
      "/image/anushreyav.png",
  },
  {
    id: 2,
    name: "Raj Aryan",
    designation: "Vice President",
    image:
      "/image/rajav.png",
  },
  {
    id: 3,
    name: "Ankit",
    designation: "Technical Head",
    image:
      "/image/ankitav.png",
  },
  {
    id: 4,
    name: "Sumant",
    designation: "Technical Head",
    image:
      "/image/sumantav.png",
  },
  {
    id: 5,
    name: "Rohan",
    designation: "Design Lead",
    image:
      "/image/rohanav.png",
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
    <h2 className="md:text-7xl text-3xl lg:text-7xl font-bold text-center text-white relative z-20 mt-16 mb-16">
        Our Team
      </h2>
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
    </>
  );
}
