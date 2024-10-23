import React from "react";
import Cards from "./Cards";
import Realtor from "../Images/Realtor.png";
import LifeStyle from "../Images/LifeStyle.png";
import DealsOnWheels from "../Images/dealsOnWheels.png";
import LiveChatApp from "../Images/Live-Chat-App.png";
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 ml-8 mr-8 text-justify min-h-0">
          <Cards
            image={Realtor}
            title="Realtor.com"
            text="Talk-a-tive is a dynamic live chat app designed for seamless communication. 
            With its user-friendly interface, you can easily connect with friends, family, or colleagues in real time. 
            The app supports group chats and private chats, ensuring versatile interaction. 
            Join Talk-a-tive today!"
            // text="Realtor.com provides a comprehensive platform for buying, selling, and renting properties. With detailed listings, up-to-date information, and high-quality photos, discovering your dream home is easy. The user-friendly interface allows you to filter searches by location, price, and other criteria, ensuring you find exactly what you need in the real estate market quickly and efficiently."
            link1="https://realtor-clone-react-five-xi.vercel.app/"
            link2="https://github.com/Vaishalijain10/Realtor-Clone-React"
          />
          <Cards
            image={LiveChatApp}
            title="Live Chat App - Talk-A-Tive!"
            text="Talk-a-tive is a dynamic live chat app designed for seamless communication. 
            With its user-friendly interface, you can easily connect with friends, family, or colleagues in real time. 
            The app supports group chats and private chats, ensuring versatile interaction. 
            Join Talk-a-tive today!"
            link1="https://talk-a-tive-kzf0.onrender.com/"
            link2="https://github.com/Vaishalijain10/MERN-Live-Chat-App"
          />
        
          <Cards
            image={LifeStyle}
            title="LifeStyle"
            text="LifeStyle is your go-to destination for exquisite imitation jewelry.  
                  Our virtual store offers a stunning collection, featuring everything from timeless classics to trendy designs.  
                  All pieces are beautifully crafted and available at affordable prices, also makes it easy to find the perfect jewelry from the comfort of your home."
            link1="https://github.com/Vaishalijain10/LifeStyle"
            link2="https://github.com/Vaishalijain10/LifeStyle"
          />
            <Cards
            image={DealsOnWheels}
            title="Deals On Wheels"
            text="Deals On Wheels is your ultimate destination for an extensive selection of cars from five top brands.  
            Our one-stop shop makes it easy to find the perfect vehicle for your needs.    
            Visit our user-friendly website to explore exclusive deals and drive away with your ideal car today!  "
            link1="https://deals-on-wheels.vercel.app/"
            link2="https://github.com/Vaishalijain10/deals_on_wheels"
          />
        </div>
      </div>
    </div>
  );
}
