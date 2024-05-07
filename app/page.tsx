"use client"
import { projects } from './data';
import Card from './components/Card';
import {motion, useScroll} from 'framer-motion'
import { useRef } from 'react';

export default function Home() {
      const container=useRef(null);
      const {scrollYProgress}=useScroll({
            target:container,
            offset:["start start", 'end end']
      })
  return (
    <div
    ref={container}
    className='mt-[40vh] mb-[40vh]'>
      {projects.map((project, index) => {
            const targetScale=1-((projects.length-index)*0.05);
        return <Card key={index} {...project} index={index}  targetScale={targetScale} progress={scrollYProgress}/>;
      })}
    </div>
  );
}

