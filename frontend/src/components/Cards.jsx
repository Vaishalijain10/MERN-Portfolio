import React from 'react'

export default function Cards({ image, title, text, link1, link2 }) {
  return (
    <div className="p-0 sm:p-4 md:p-6">
    <div className="max-w-sm mx-auto p-2s bg-[#1e1e1e] shadow-lg rounded-[30px] transition-transform duration-300 hover:scale-105 hover:border-blue-500 border-2 border-white">
      {/* Card Image */}
      <img 
        className="w-full pl-1 pt-1 pr-1 h-64 sm:h-48 object-cover rounded-t-[30px]" 
        src={image} 
        alt={title} 
      />

      {/* Card Content */}
      <div className="p-0 sm:p-4">
        {/* Project Name */}
        <h3 className="text-xl text-white sm:text-xl font-bold mb-2 text-center">{title}</h3>

        {/* Paragraph */}
        <p className=" text-white font-normal text-base sm:text-sm mb-4 pl-1 pt-1 pr-1">
         {text}
        </p>

        {/* Buttons */}
        <div className=" justify-evenly grid grid-cols-1 ml-2 mr-2 mb-2 md:grid-cols-2 gap-2 text-center">
          {/* View Website Button */}
          <a 
           href={link1} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-4 py-2 sm:px-3 sm:py-1 rounded-lg hover:bg-blue-600 transition-colors"
          >
            View Website
          </a>

          {/* Source Code Button */}
          <a 
            href={link2} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gray-700 text-white px-4 py-2 sm:px-3 sm:py-1 rounded-lg hover:bg-gray-800 transition-colors"
          >
            Source Code
          </a>
        </div>
      </div>
    </div>
  </div>
  )
}
