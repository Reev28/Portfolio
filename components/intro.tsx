"use client"

import React from 'react'
import Image from 'next/image'
import {motion} from "framer-motion"
import Link from "next/link"
import {BsArrowRight, BsLinkedin} from "react-icons/bs"
import {HiDownload} from "react-icons/hi"
import { FaGithubSquare } from 'react-icons/fa'
import { useSectionInView } from '@/lib/hooks'
import { useActiveSectionContext } from '@/context/active-section-context'




interface Props {}

export default function Intro(props: Props) {
const {ref} = useSectionInView('Home',0.5);
const {setActiveSection,settimeOfLastClick} = useActiveSectionContext();

    return (
        <section ref={ref} id="home" className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]'>
            <div className="flex items-center justify-center">
                <div className='relative'>
                    <motion.div
                    initial={{opacity:0,scale:0}}
                    animate={{opacity:1,scale:1}}
                    transition={{type:"tween",duration:0.2}}
                    >
                        <Image className='h-24 w-24 rounded-full border-[0.35rem] border-white' width="192" height="192" quality="95" priority={true} src="https://media.licdn.com/dms/image/D4D03AQFaAJ4uT_XG1A/profile-displayphoto-shrink_400_400/0/1692983270243?e=1714608000&v=beta&t=stVZAj5TJn7vTnI_msW7zImbpULQPyN-sT6DS726gDA" alt="Reev portrait"/>    
                    </motion.div>
                    <motion.span
                    initial={{opacity:0,scale:0}}
                    animate={{opacity:1,scale:1}}
                    transition={{type:"spring",stiffness:125,delay:0.1,duration:0.7}}
                    className="absolute bottom-0 right-0 text-4xl">👋</motion.span>
                </div>

            </div>
            <motion.p
             className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
             initial={{opacity:0,y:100}}
             animate={{opacity:1,y:0}}
            >
            <span className="font-bold">Hello, I'm Reev.</span> I'm a{" "}
            <span className="font-bold">full-stack developer</span> with{" "}
            <span className="font-bold">1 years</span> of experience. I enjoy
            building <span className="italic">sites</span>. My focus is{" "}
            <span className="underline">React (Next.js)</span>.
            </motion.p>

            <motion.div
                initial={{opacity:0,y:100}}
                animate={{opacity:1,y:0}}
                transition={{delay:0.1}}
                className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'>
                <Link href="#contact" className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'
                      onClick={()=>{setActiveSection("Contact");settimeOfLastClick(Date.now())}}>
                    Contact me here<BsArrowRight className='opacity-70 group-hover:translate-x-1 transition'/>
                </Link>
                <a download href='/Reev Emmanuel Dsouza_Resume.pdf' className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10'>
                    Download CV <HiDownload className='opacity-60 group-hover:translate-y-1 transition'/>
                </a>
                <a href='https://www.linkedin.com/in/reev/' target={"_blank"} className= 'bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60'>
                    <BsLinkedin/>
                </a>
                <a href='https://github.com/Reev28' target={"_blank"} className= 'bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60'>
                    <FaGithubSquare/>
                </a>
            </motion.div>
        </section>
    )
}

