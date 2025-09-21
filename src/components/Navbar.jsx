import React from 'react'
import logo from "../assets/tk2.png"
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { FaSquareTwitter } from 'react-icons/fa6'
const Navbar = () => {
  return (
    <nav className='flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <a href="/" aria-label='Home'>
            <img src={logo} className='mx-2' width={60} height={33} alt='logo'/>
            </a>
        </div>

        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <a href="https://www.linkedin.com/in/tesnim-khabacha-036300315/" target='_blank' rel='noopener noreferrer' aria-label='LinkedIn'
            > <FaLinkedin/></a>
            <a href="https://github.com/tesnim123" target='_blank' rel='noopener noreferrer' aria-label='Github'
            > <FaGithub/></a>
            
        </div>
    </nav>
  )
}

export default Navbar