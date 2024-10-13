"use client";

import { ArrowRight, CogImage, cylinderImage, noodleImage } from "@/assets";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";



export const Hero = () => {

  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  })

  const translateY = useTransform(scrollYProgress, [0,1], [150, -150]);


  return <section ref={heroRef} className='pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip '>
    <div className='container'>
      <div className="md:flex items-center">
        <div className='md:w-[478px]'>
          <div className='tag'>Version 2.0 is here</div>
          <h1 className='mt-6 text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text '>Pathway to productivity</h1>
          <p className='mt-6 tracking-tight text-[#010D3E] text-xl'>
          Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes.
          </p>
          <div className="mt-[30px] flex items-center gap-1">
            <button className='btn btn-primary'>Get for free</button>
            <button className='btn btn-text gap-1'>
              <span>Learn More</span>
              <ArrowRight className='w-5 h-5' />
            </button>
          </div>
        </div>
        <div className='mt-20 md:mt-0 md:h-[648px] md:flex-1 relative'>
          <motion.img 
            src={CogImage.src} 
            alt="Cog Image" 
            className='md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0 xl:left-64' 
            animate={{
              translateY: [-30, 30],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 3,
              ease: "easeInOut",
            }}
          />
          <motion.img 
            src={cylinderImage.src} 
            width={220} 
            height={220} 
            alt="cylinder image" 
            className="hidden md:block md:absolute -top-8 md:-left-32 xl:left-32 " 
            style={{
              translateY
            }}
          />
          <motion.img 
            src={noodleImage.src} 
            width={220} 
            height={220} 
            alt="noodle image" 
            className='hidden md:block md:absolute top-[524px] left-[448px] rotate-[30deg] xl:left-[750px]'
            style={{
              translateY,
              rotate: 30
            }}  
          />

        </div>
      </div>
    </div>
  </section>;
};



