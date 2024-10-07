import React from "react";
import Cards from "./Cards";
import Realtor from "../Images/Realtor.png";
import LifeStyle from "../Images/LifeStyle.png";
import DealsOnWheels from "../Images/dealsOnWheels.png";

export default function Projects() {
  return (
    <div className="bg-[#1e1e1e] w-[100%] ">
      <div
        id="projects"
        className="w-3/5 h-px bg-gray-300 border-t border-gray-300 my-10 mx-auto"
      ></div>
      <div className="p-0">
        {/* Heading */}
        <h1 className="text-4xl font-semibold mb-8 text-center uppercase tracking-wider text-white">
          Projects
        </h1>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ml-8 mr-8 text-justify">
          <Cards
            image={Realtor}
            title="Realtor.com"
            text="Realtor.com offers a comprehensive platform for buying, selling, and renting properties. With
                    detailed listings, up-to-date information, photos, and virtual tours, it's easy to find your dream home or perfect
                    rental. The user-friendly interface lets you filter by location, price, and more, ensuring you quickly find
                    exactly what you need in the real estate market."
            link1="https://realtor-clone-react-five-xi.vercel.app/"
            link2="https://github.com/Vaishalijain10/Realtor-Clone-React"
          />
          <Cards
            image={LifeStyle}
            title="LifeStyle"
            text="LifeStyle is your destination for stunning imitation jewelry, offering a virtual store that brings elegance to your
                    fingertips. Explore a wide range of beautifully crafted pieces, from timeless classics to trendy
                    designs, all at affordable prices. Whether for a special occasion or everyday style, LifeStyle makes it easy to find
                    the perfect jewelry from the comfort of your home."
            link1="https://github.com/Vaishalijain10/LifeStyle"
            link2="https://github.com/Vaishalijain10/LifeStyle"
          />
          <Cards
            image={DealsOnWheels}
            title="Deals On Wheels"
            text="Deals On Wheels offers a wide selection of cars from five top brands, making it your one-stop shop
                    for finding the perfect vehicle. Whether you're looking for luxury, reliability, or affordability, our extensive
                    inventory caters to every preference. Explore our user-friendly website to discover exclusive deals and drive away with
                    your ideal car today."
            link1="https://deals-on-wheels.vercel.app/"
            link2="https://github.com/Vaishalijain10/deals_on_wheels"
          />
        </div>
      </div>
    </div>
  );
}
