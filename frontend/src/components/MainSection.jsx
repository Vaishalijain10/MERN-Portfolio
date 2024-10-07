import React from "react";
// import bgImage from 'frontend\src\Images\Background.jpg';
import bgImage from "../Images/Background.jpg"


export default function MainSection() {
  return (
    <div className="bg-no-repeat bg-cover bg-center bg-black h-[92.50vh] w-[100%] flex flex-col justify-center items-center text-center"
    style={{ backgroundImage: `url(${bgImage})` }}>
      <h1 className="text-white text-4xl md:text-3xl sm:text-2xl font-bold mb-4 transition-all ease-out">
        Hi, I am Vaishali Jain
      </h1>
      <p className="text-white text-xl md:text-lg sm:text-base mb-6 transition-all ease-out">
        A Software Engineer
      </p>
      <div className="flex flex-col md:flex-row gap-4">
  <a
    href="https://www.linkedin.com/in/vaishalijain10/overlay/1727609274991/single-media-viewer/?profileId=ACoAADySbUoBi3NwPVSb7TgPy9fN6uaBjT9U0PQ"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white text-gray-800 font-semibold py-2 px-6 rounded-lg hover:bg-gray-200 transition ease-out"
  >
    Download Resume
  </a>

  <a
    href="mailto:vaishalijain.vj.10@gmail.com"
    className="bg-white text-gray-800 font-semibold py-2 px-6 rounded-lg hover:bg-gray-200 transition ease-out"
  >
    E-Mail Me
  </a>
</div>
    </div>
  );
}
