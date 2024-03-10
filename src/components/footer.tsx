"use client";
import React from "react";
import { SparklesCore } from "../components/ui/sparkles";
import Link from "next/link";
export function SparklesPreviewFooter() {
  return (
    <div className="h-[40rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
     
      <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 relative z-20">
        Coming Soon
      </h1>
      <Link className="mt-4 relative z-20 font-mono" href="mailto:support@teamwebwiz.dev" target="_blank">
      support@teamwebwiz.dev
      </Link>

    </div>
  );
}
