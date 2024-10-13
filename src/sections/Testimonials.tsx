"use client";

import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const testimonials = [
  {
    text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
    imageSrc: avatar1.src,
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    text: "Our team's productivity has skyrocketed since we started using this tool. ",
    imageSrc: avatar2.src,
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    text: "This app has completely transformed how I manage my projects and deadlines.",
    imageSrc: avatar3.src,
    name: "Morgan Lee",
    username: "@morganleewhiz",
  },
  {
    text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
    imageSrc: avatar4.src,
    name: "Casey Jordan",
    username: "@caseyj",
  },
  {
    text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
    imageSrc: avatar5.src,
    name: "Taylor Kim",
    username: "@taylorkimm",
  },
  {
    text: "The customizability and integration capabilities of this app are top-notch.",
    imageSrc: avatar6.src,
    name: "Riley Smith",
    username: "@rileysmith1",
  },
  {
    text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
    imageSrc: avatar7.src,
    name: "Jordan Patels",
    username: "@jpatelsdesign",
  },
  {
    text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
    imageSrc: avatar8.src,
    name: "Sam Dawson",
    username: "@dawsontechtips",
  },
  {
    text: "Its user-friendly interface and robust features support our diverse needs.",
    imageSrc: avatar9.src,
    name: "Casey Harper",
    username: "@casey09",
  },
];

const firstColumn = testimonials.slice(0,3);
const secondColumn = testimonials.slice(3,6);
const thirdColumn = testimonials.slice(6,9);


const TestimonialColumn = (props: {className?: string, testimonials: typeof testimonials, duration?:number}) => (
  <div className={props.className}>
    
    <motion.div 
    className="mt-10 flex flex-col gap-6 pb-6"
    animate={{
      translateY: "-50%"
    }}
    transition={{
      duration: props.duration || 10,
      repeat: Infinity,
      repeatType: "loop",
      ease: "linear",
    }}
    >
    {
      [...new Array(2)].map((_, index) => (
        <React.Fragment key={index}>
          {
            props.testimonials.map(({text, imageSrc, name, username}) => (
              <div className='card' key={username} >
                <div>{text}</div>
                <div className="flex items-center gap-2 mt-5">
                  <Image src={imageSrc} height={40} width={40} alt={name} className="h-10 w-10 rounded-full" />
                  <div>
                    <div className="tracking-tight font-medium leading-5">{name}</div>
                    <div className='tracking-tight leading-5'>{username}</div>
                  </div>
                </div>
              </div>
            ))
          }
        </React.Fragment>
      )) 
    }
      
    </motion.div>
  </div>
)

export const Testimonials = () => {

  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, {once: true, amount: 0.4});

  return <section ref={sectionRef} className="bg-white">
    <div className='container'>
      <div className="section-heading">
        <div className='flex justify-center'>
          <div className='tag'>Testimonials</div>
        </div>
        <h2 className='section-title mt-5'>What our users say</h2>
        <p className='section-description mt-5'>From intuitive design to powerful features, our app has become an essential tool for users around the world.</p>
      </div>
      <div className='flex justify-center gap-6 xl:gap-10 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden'>
        {
          inView && <>
            <TestimonialColumn testimonials={firstColumn} duration={15}/>
            <TestimonialColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
            <TestimonialColumn testimonials={thirdColumn} className="hidden lg:block" duration={17}/>
          </>
        }
      </div>
    </div>
  </section>
};
