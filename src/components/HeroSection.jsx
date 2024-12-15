import React from "react";
import Button from "./Button";

function HeroSection() {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 items-center justify-center px-3 sm:px-6 pt-10 md:pt-8"
      style={{
        background: "linear-gradient(-45deg, #16657c 40%, #031832 30%)",
        boxShadow: "10px 0px 30px rgba(0, 0, 0, 0.3), inset 0px 30px 40px rgba(0, 0, 0, 0.15), inset -10px -10px 40px rgba(0, 0, 0, 0.1)",
      }}
      
    >
      {/* Left Section: Text and Buttons */}
      <div className="flex justify-center pt-4  pb-10 sm:pt-8 md:pt-2 sm:items-start md:pl-4 flex-col gap-2">
      <h1 className="text-2xl sm:text-4xl max-w-[500px] md:max-w-[700px] md:text-3xl lg:text-5xl font-bold text-white mb-4">

          Bring Force of Artificial Intelligence To Business
        </h1>
        <p className="text-base lg:text-lg text-white mb-6 max-w-[500px] md:max-w-[700px]">
          Empower your business with cutting-edge AI technology to achieve
          unparalleled growth and efficiency.
        </p>
        <div className="flex flex-col justify-center items-center sm:flex-row gap-4 sm:justify-start sm:items-start">
          <div>
            <Button text="Read More" />
          </div>
          <div>
          <button
            className="px-8 py-[8px]
        md:py-3 bg-[#083756] text-white rounded-full shadow-md hover:bg-white hover:text-[#041c36] transition duration-300  font-semibold border-[1px] border-[#28aac1]"
          >
            Contact Us
          
          </button>
          </div>
        </div>
      </div>

      {/* Right Section: Image */}
      <div className="flex justify-center">
        <img
          src="/images/heroSec.png"
          alt="Artificial Intelligence in Business"
          className="w-[300px] sm:w-[400px] lg:w-[500px]"
        />
      </div>
    </div>
  );
}

export default HeroSection;
