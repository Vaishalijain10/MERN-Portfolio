import React from 'react';
import profileImage from "../Images/profile.png";

export default function About() {
  return (
    <section className="py-12 bg-[#1e1e1e] w-[100%]">
    {/* divider */}
    <div id='about' className="w-3/5 h-px bg-gray-300 border-t border-gray-300 my-10 mx-auto"></div>
    
    <h2  className="text-4xl text-center font-semibold mb-12 text-white uppercase tracking-wider">About Me</h2>

    <div className="about-content flex flex-col md:flex-row items-center md:items-start gap-8 max-w-6xl mx-auto">
      {/* About Image */}
      <div className="about-image w-full md:w-1/2 mt-12 flex justify-center">
        <img
          src={profileImage}
          alt="Vaishali Jain"
          className="rounded-lg shadow-lg w-64 h-64 object-cover md:w-auto md:h-auto"
        />
      </div>

      {/* About Text */}
      <div className="about-text w-full md:w-1/2 text-left px-4 sm:px-6 md:px-8">
        <p className="text-white text-md mb-2 text-justify px-2 sm:px-4 md:px-6">
          As someone deeply passionate about coding, I find immense joy and fulfillment in the world of development. 
          The excitement of creating something from scratch, transforming lines of code into functional, innovative solutions, is what drives me.
          I thrive on the challenge of problem-solving and embrace the continuous learning journey in the ever-evolving field of technology.
          Beyond the screen, I am a fun-loving individual who approaches each coding challenge as a thrilling adventure. Whether building web applications,
          crafting algorithms, or exploring new programming languages, I tackle every project with curiosity and determination to make it both enjoyable and impactful.
        </p>

        <div className="about-info text-white sm:px-4 md:px-6">
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Name:</strong> Vaishali Jain</li>
            <li><strong>Age:</strong> 23</li>
            <li><strong>Occupation:</strong> A passionate Software Engineer</li>
            <li><strong>Languages:</strong> Java, JavaScript</li>
            <li><strong>Technologies:</strong> HTML, CSS, React JS, Node JS, Express JS</li>
            <li><strong>Frameworks:</strong> Bootstrap, Tailwind CSS, Material UI</li>
            <li><strong>Databases:</strong> MongoDB, MySQL, Firebase</li>
            <li><strong>Other Skills:</strong> DSA, Problem Solving</li>
            <li><strong>Tools:</strong> Git, GitHub, Figma, Vercel, VS Code, IntelliJ IDEA</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  )
}
