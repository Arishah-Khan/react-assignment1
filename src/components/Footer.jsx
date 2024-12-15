import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { AiOutlinePhone, AiOutlineMail, AiOutlineEnvironment } from "react-icons/ai";

function Footer() {
  return (
    <footer className="bg-[#03162e] text-white py-8 px-6">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-8">
        {/* Column 1: Logo and Paragraph */}
        <div className='flex flex-col justify-start items-center'>
          <div className="mb-4 flex flex-col justify-start items-center">
            <img
              src="/images/logo.png"
              alt="Artelligence Logo"
              className="w-[200px] h-auto mb-4"
            />
            <p className="text-base py-2 max-w-[350px] mx-auto">
              Artelligence is committed to delivering top-notch AI solutions for businesses worldwide.
            </p>
          </div>
          <div className="flex space-x-4">
            <div className="bg-[#010e26] p-2 rounded-full border-2 border-[#36e0f7] hover:bg-[#36e0f7]">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="w-6 h-6  transition duration-300" />
            </a>
            </div>
            <div className="bg-[#010e26] p-2 rounded-full border-2 border-[#36e0f7] hover:bg-[#36e0f7]">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="w-6 h-6 transition duration-300" />
            </a>
            </div>
            <div className="bg-[#010e26] p-2 rounded-full border-2 border-[#36e0f7] hover:bg-[#36e0f7]">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="w-6 h-6  transition duration-300" />
            </a>
            </div>
          </div>
        </div>
        {/* Column 2: Useful Links */}
        <div className='flex flex-col justify-start items-center'>
          <h3 className="text-xl font-bold mb-4">Useful Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-[#36e0f7] transition duration-300">Home</a></li>
            <li><a href="/about" className="hover:text-[#36e0f7] transition duration-300">About Us</a></li>
            <li><a href="/services" className="hover:text-[#36e0f7] transition duration-300">Services</a></li>
            <li><a href="/contact" className="hover:text-[#36e0f7] transition duration-300">Contact Us</a></li>
          </ul>
        </div>
        {/* Column 3: Services */}
        <div className='flex flex-col justify-start items-center'>
          <h3 className="text-xl font-bold mb-4">Our Services</h3>
          <ul className="space-y-2 text-sm ">
            <li><a href="/services/ai" className="hover:text-[#36e0f7] transition duration-300">AI Solutions</a></li>
            <li><a href="/services/robotics" className="hover:text-[#36e0f7] transition duration-300">Robotics</a></li>
            <li><a href="/services/ml" className="hover:text-[#36e0f7] transition duration-300">Machine Learning</a></li>
            <li><a href="/services/consulting" className="hover:text-[#36e0f7] transition duration-300">Consulting</a></li>
          </ul>
        </div>
        {/* Column 4: Contact Us */}
        <div className='flex flex-col justify-start items-center'>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm">
      <li>
        <AiOutlinePhone className="inline-block mr-2 text-[#36e0f7] text-2xl" />
        +1 (123) 456-7890
      </li>
      <li>
        <AiOutlineMail className="inline-block mr-2 text-[#36e0f7] text-2xl" />
        info@artelligence.com
      </li>
      <li>
        <AiOutlineEnvironment className="inline-block mr-2 text-[#36e0f7] text-2xl" />
        123 AI Street, Tech City
      </li>
    </ul>
        </div>
      </div>
      {/* Divider */}
      <div className="h-[1px] bg-[#5bd0df] my-8 mx-auto max-w-4xl"></div>
      {/* Bottom Section */}
      <div className="text-center text-sm">
        <p>Copyright © 2022, Artelligence.com. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
