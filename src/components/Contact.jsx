import React from "react";
import Button from "./Button";

function Contact() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-8 px-4 sm:px-8 lg:px-16 py-16">
      {/* Left Section: FAQ */}
      <div className=" mb-8 lg:mb-0">
        <h4 className="text-[#36e0f7] text-2xl font-semibold pb-3">FAQ'S</h4>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
          Frequently Asked Questions
        </h2>

        {/* FAQ Items */}
        <div className="space-y-6">
  {/* FAQ Question 1 */}
  <div
    className="flex justify-between items-center bg-white shadow-lg rounded-2xl p-4 border-l-4 border-[#36e0f7] hover:shadow-xl transition duration-300"
  >
    <h4 className="text-lg font-semibold text-gray-800">
      What is your return policy?
    </h4>
    <button className="text-2xl font-bold text-gray-500 hover:text-[#36e0f7] transition duration-300">
      +
    </button>
  </div>

  {/* FAQ Question 2 */}
  <div
    className="flex justify-between items-center bg-white shadow-lg rounded-2xl p-4 border-l-4 border-[#36e0f7] hover:shadow-xl transition duration-300"
  >
    <h4 className="text-lg font-semibold text-gray-800">
      How do I track my order?
    </h4>
    <button className="text-2xl font-bold text-gray-500 hover:text-[#36e0f7] transition duration-300">
      +
    </button>
  </div>

  {/* FAQ Question 3 */}
  <div
    className="flex justify-between items-center bg-white shadow-lg rounded-2xl p-4 border-l-4 border-[#36e0f7] hover:shadow-xl transition duration-300"
  >
    <h4 className="text-lg font-semibold text-gray-800">
      Can I change my order after placing it?
    </h4>
    <button className="text-2xl font-bold text-gray-500 hover:text-[#36e0f7] transition duration-300">
      +
    </button>
  </div>

  {/* FAQ Question 4 */}
  <div
    className="flex justify-between items-center bg-white shadow-lg rounded-2xl p-4 border-l-4 border-[#36e0f7] hover:shadow-xl transition duration-300"
  >
    <h4 className="text-lg font-semibold text-gray-800">
      Do you offer gift wrapping?
    </h4>
    <button className="text-2xl font-bold text-gray-500 hover:text-[#36e0f7] transition duration-300">
      +
    </button>
  </div>

  {/* FAQ Question 5 */}
  <div
    className="flex justify-between items-center bg-white shadow-lg rounded-2xl p-4 border-l-4 border-[#36e0f7] hover:shadow-xl transition duration-300"
  >
    <h4 className="text-lg font-semibold text-gray-800">
      What payment methods do you accept?
    </h4>
    <button className="text-2xl font-bold text-gray-500 hover:text-[#36e0f7] transition duration-300">
      +
    </button>
  </div>
</div>

      </div>

      {/* Right Section: Form */}
      <div className=" bg-white shadow-lg rounded-2xl border-b-2 border-[#052742] hover:border-[#36e0f7] p-4">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-6 text-center">
        Need any Help!        </h2>
        <p className="lg:text-lg text-gray-400 text-center mb-6">
        Eiusmod tempor in labore et dolore magna aliqua ruis ultrices gravida sit amet.
        </p>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#36e0f7]"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#36e0f7]"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Number
            </label>
            <input
              type="number"
              id="name"
              className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#36e0f7]"
              placeholder="Enter your phone number"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#36e0f7]"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <div className="pt-3 flex justify-center items-center">
          <Button text="Submit Now" />
        </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
