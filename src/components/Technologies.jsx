import React from 'react'
import { FaCss3Alt, FaHtml5, FaNodeJs, FaPython } from 'react-icons/fa'
import { RiReactjsLine } from 'react-icons/ri'
import { SiAngular, SiExpress, SiJavascript, SiMongodb, SiMysql, SiNestjs, SiNextdotjs, SiTailwindcss, SiTypescript } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className='pb-24'>
        <motion.h2 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration:1.5}} className='my-20 text-center text-4xl'>Technologies</motion.h2>
        <motion.div  whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:1.5}} className='flex flex-wrap items-center justify-center gap-4'>
            {/* React */}
      <div className="p-4">
        <RiReactjsLine className="text-7xl text-cyan-400" />
      </div>
      {/* Angular */}
      <div className="p-4">
        <SiAngular className="text-7xl text-red-600" />
      </div>

 {/* Next.js */}
      <div className="p-4">
        <TbBrandNextjs className="text-7xl " />
      </div>
      {/* Node.js */}
      <div className="p-4">
        <FaNodeJs className="text-7xl text-green-500" />
      </div>

      {/* Express.js */}
      <div className="p-4 ">
        <SiExpress className="text-7xl text-white" />
      </div>

      

      {/* TypeScript */}
      

      
     

      {/* NestJS */}
      <div className="p-4">
        <SiNestjs className="text-7xl text-pink-600" />
      </div>

      {/* MongoDB */}
      <div className="p-4">
        <SiMongodb className="text-7xl text-green-600" />
      </div>

      {/* MySQL */}
      <div className="p-4">
        <SiMysql className="text-7xl text-blue-500" />
      </div>

      
     
      
        </motion.div>
    </div>
  )
}

export default Technologies