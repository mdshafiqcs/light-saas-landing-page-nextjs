"use client";

import { pyramidImage, tubeImage, productImage } from "@/assets";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";


export const ProductShowcase = () => {

  const sectionRef =  useRef(null);

  const {scrollYProgress} = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0,1], [150, -150]);

  return <section ref={sectionRef} className='bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip'>
    <div className="container">
        <div className="section-heading">
          <div className='flex justify-center'>
            <div className='tag'>Boost your productivity</div>
          </div>
          <h2 className="section-title mt-5">A more efficient way to track progress</h2>
          <p className='section-description mt-5' >Efforlessly turn your ideas into a fully functional, responsive, SaaS website in just minutes with this template</p>
        </div>
      <div className='relative'>
      <Image src={productImage} alt="product image" className="mt-10" />
        <motion.img 
        src={pyramidImage.src} 
        width={262} 
        height={262} 
        alt="pyramid image" 
        className="hidden md:block absolute -top-32 -right-36"
        style={{
          translateY,
        }} 
        />
        <motion.img 
        src={tubeImage.src} 
        height={248} 
        width={248} 
        alt="tube image" 
        className='hidden md:block absolute bottom-24 -left-36'
        style={{
          translateY,
        }} 
        />
      </div>
    </div>
  </section>
};
