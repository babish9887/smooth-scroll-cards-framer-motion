"use client"
import Image from 'next/image';
import React, { useRef } from 'react';
import {motion, useScroll, useTransform} from 'framer-motion'
function Card({ title, description, src, link, color, index,  progress, targetScale }: any) {
      const container=useRef(null);
      const{scrollYProgress}=useScroll({
            target:container,
            offset: ['start end', "start start"]
      })
      const imageScale=useTransform(scrollYProgress, [0,1], [1.5,1])
      const top=index*30;
      const scalebox=useTransform(progress, [index*0.25, 1], [1, targetScale])
      console.log(scalebox, imageScale)
  return (
    <div ref={container} className='sticky top-[20vh] flex justify-center items-center'>
      <motion.div style={{scale: scalebox, transformOrigin:"top",  backgroundColor: color , top:top}} className='w-[800px] h-[500px] mb-[50vh] rounded-2xl relative '>
        <h1 className='w-full text-center text-3xl mt-10 font-semibold'>{title}</h1>
        <div className='flex overflow-hidden'>

        <div className='w-1/2 mt-10 p-8'>
            <p>{description}</p>
        </div>
        <div className='overflow-hidden w-1/2 p-12'>
            <div className='w-full overflow-hidden rounded-2xl'>

        <motion.div
        style={{scale:imageScale}}
      className='w-full'>
            <div className='w-full h-full'>

            <Image src={src} alt='image' width={400} height={400} className=' rounded-2xl w-full aspect-[16/16] object-cover' />
            </div>
        </motion.div>
              </div>
        </div>
      </div>
      </motion.div>
    </div>
  );
}

export default Card;
