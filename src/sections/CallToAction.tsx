"use client";

import { ArrowRight, starImage, springImage } from "@/assets";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";


export const CallToAction = () => {

  const sectionRef = useRef(null);
  const {scrollYProgress} = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0,1], [150, -150]) ;

  return <section ref={sectionRef} className="py-24 bg-gradient-to-b from-white to-[#D2DCFF] overflow-x-clip ">
    <div className="container">
      <div className='section-heading relative'>
        <h2 className='section-title'>Sign up for free today</h2>
        <p className="section-description mt-5">Celebrate the joy of accomplishment with an app designed to track your progress and motivated your efforts.</p>
        <motion.img 
        src={starImage.src} 
        width={360} 
        alt="star image" 
        className="hidden md:block absolute -left-[350px] -top-[137px]" 
        style={{
          translateY,
        }}
        />
        <motion.img 
        src={springImage.src}
        width={360} 
        alt="spring image" 
        className="hidden md:block absolute -right-[331px] -top-[19px]" 
        style={{
          translateY,
        }}
        />
      </div>
      <div className="flex justify-center mt-10 gap-2">
        <button className='btn btn-primary'>Get for free</button>
        <button className='btn btn-text gap-1'>
          <span>Learn more</span>
          <ArrowRight className='h-5 w-5' />
        </button>
      </div>
    </div>
  </section>
};
