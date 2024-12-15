import React from "react";

function Card({ image, heading, paragraph }) {
  return (
    <div className="max-w-[260px] max-h-[320px] pt-6 pb-0 flex flex-col justify-center items-center bg-white shadow-lg rounded-3xl border-b-4 border-[#1a7188] transform transition duration-300 hover:scale-105 hover:shadow-xl">
      {/* Card Image */}
      <div className="flex justify-center items-center py-4 max-w-[150px] mx-auto px-8 bg-[#eafcfe] rounded-full">
        <img src={image} alt={heading} className="w-[70px]" />
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col justify-center items-center">
        {/* Card Heading */}
        <h2 className="text-xl font-bold text-gray-800 mb-4">{heading}</h2>

        {/* Card Text */}
        <p className="text-gray-600 mb-6">{paragraph}</p>

        {/* Read More Button */}
        <button className="text-[#36e0f7] font-semibold text-lg hover:text-black transition duration-300 ease-in-out">
          READ MORE
        </button>
      </div>
    </div>
  );
}

export default Card;
