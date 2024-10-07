import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";


export default function Footer() {
  return (
    <footer className="bg-[#1e1e1e] py-2 text-white">
      
    <div className="container mx-auto text-center">
      {/* Footer Heading */}
      <h3 className="text-sm mb-2 font-bold">Connect with Me</h3>

      {/* Profile Links */}
      <div className="flex justify-center space-x-8 mb-2 mt-2">
        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/vaishalijain10/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
          <FaLinkedin size={30} />
        </a>
        
        {/* GitHub */}
        <a href="https://github.com/Vaishalijain10/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
          <FaGithub size={30} />
        </a>
        
        {/* Twitter */}
        <a  href="mailto:vaishalijain.vj.10@gmail.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
          <MdEmail size={30} />
        </a>
      </div>

      {/* Copyright Text */}
      {/* <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Vaishali Jain. All rights reserved.</p> */}
    </div>
  </footer>
  )
}
