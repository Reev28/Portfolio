'use client'
import React from 'react'
import {motion} from 'framer-motion'
interface Props {}

export default function SectionDivider(props: Props) {
    return (
        <motion.div 
        className="bg-gray-200 my-24 h-16 w-1 rounded-full hidden sm:block dark:bg-opacity-20"
        initial={{opacity:0,y:100}}
        animate={{opacity:1,y:0}}

        ></motion.div>
    )
}

