'use client'
import React from 'react'
import SectionHeading from './section-heading'
import {motion} from "framer-motion"
import { useSectionInView } from '@/lib/hooks'
import {sendEmail} from '@/actions/sendEmail'
import { FaPaperPlane } from 'react-icons/fa'
import { useFormStatus } from 'react-dom'
import toast from 'react-hot-toast'


interface Props {}

export default function Contact(props: Props) {
    const {} = props
    const {ref} = useSectionInView('Contact');

   

    return (
        <motion.section ref={ref} id="contact" 
                        className='mb-20 sm:mb-28 w-[min(100%,38rem)] text-center'
                        initial={{opacity:0}}
                        whileInView={{opacity:1}}
                        transition={{duration:1}}
                        viewport={{once:true}}
                        >
            <SectionHeading>Contact Me</SectionHeading>
            <p className='text-gray-700 -mt-6 dark:text-white/80'>Please contact me directly at {" "}
                <a className='underline' href='mailto:reev.dsouza@yahoo.com'>
                    reev.dsouza@yahoo.com
                </a>{" "}or through this form
            </p>

            <form action={async formData=>{
                                           const {data, error} = await sendEmail(formData);
                                           if(error){toast.error(error);return}
                                           toast.success("Email sent successfully");
                                        }} 
                className='mt-10 flex flex-col dark:text-black'>
                <input type="email" 
                className='h-14 px-4 rounded-lg borderBlack contactInputDark' 
                name='senderEmail'
                placeholder='Your email'
                required
                maxLength={500}
                />
                <textarea className='h-52 my-3 rounded-lg borderBlack p-4 contactInputDark' 
                name='message'
                placeholder='Your message'
                required
                maxLength={5000}
                />
                <SubmitBtn/>
            </form>
        </motion.section>


    )
}

export function SubmitBtn(){
const {pending} = useFormStatus();

    return (
            <button type='submit' 
            className='group flex items-center justify-center h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 disabled:scale-100 disabled:bg-opacity-65 dark:bg-white dark:bg-opacity-10' 
            disabled={pending}>
            {pending?<div className='h-5 w-5 animate-spin rounded-full border-b-2 border-white'></div>:
            (<>
            Submit{" "}<FaPaperPlane className='text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1'/>{" "}
            </>)  
            }
        </button>
    )
}