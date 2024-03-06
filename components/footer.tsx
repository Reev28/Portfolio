import React from 'react'

interface Props {}

function Footer(props: Props) {
    const {} = props

    const d = new Date();
    let year = d.getFullYear();

    return (
        <footer className='mb-10 px-4 text-center text-gray-500'>
            <small className='mb-2 block text-xs'>
                &copy; {year}{" "}Reev. All rights reserved. 
            </small>
            <p className='text-xs'>
                <span className='font-semibold'>About this website:</span> 
                built with React & Next.js (App Router & Server Action), 
                TypeScript, 
                Tailwind CSS, 
                Framer Motion, 
                React Email & Resend, 
                Vercel hosting.
            </p>
        </footer>
    )
}

export default Footer
