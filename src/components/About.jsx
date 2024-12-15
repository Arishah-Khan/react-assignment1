import React from "react";
import Button from "./Button";

function AboutUs() {
  return (
    <div className="bg-white pt-8 pb-16 sm:py-16 grid grid-cols-1 md:grid-cols-2  gap-8">
   <div className="relative flex justify-center items-center  order-2 md:order-1">
  {/* Larger Image */}
  <img
    src="/images/about1.jpg" // Replace with your image path
    alt="Image"
    className="w-[270px] h-[270px] sm:w-[400px] sm:h-[380px] lg:w-[450px] lg:h-[450px] relative rounded-3xl"
  />
  
  {/* Smaller Image */}
  <img
    src="/images/about2.jpg" // Replace with your image path
    alt="Image"
    className="w-[120px] h-[120px] sm:w-[180px] sm:h-[180px] lg:w-[200px] lg:h-[200px] absolute  bottom-[-50px] left-[60%] sm:left-[70%]  border-8 rounded-3xl border-white"
  />
</div>

      <div className="flex flex-col justify-center items-center md:items-start md:max-w-[500px] gap-2 order-1 md:order-2  px-3">
        <h4 className="text-[#36e0f7] text-2xl font-semibold pb-3">About Us</h4>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
          Empowering People By Keeping Them Well
        </h2>
        <p className="text-base lg:text-lg text-gray-600 mb-6">
        Repellendus autem ruibusdam et aut officiis debitis aut re necessitatibus saepe eveniet ut et voluptates repudianda sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus.
        </p>
        <div className="flex flex-col justify-center items-center gap-6">
        <div className="flex justify-center items-center gap-4">
          <div>
            <img
              src="/images/about3.png" // Replace with your image path
              alt="Quality Assurance"
              className="w-[50px] lg:w-[60px] h-auto"
            />
          </div>
          <div className="flex flex-col justify-center  ">
            <h3 className="text-xl lg:text-2xl  text-black font-bold">
            100% Customers Satisfaction
                        </h3>
            <p className="text-sm lg:text-base text-gray-600">
            Amet minim mollit non deserunt ullamco est sit aliua dolor do amet sint.
            </p>
          </div>
        </div>

        <div className="flex justify-center gap-4 items-center">
          <div>
            <img
              src="/images/about4.png" // Replace with your image path
              alt="Quality Assurance"
              className="w-[50px] lg:w-[60px] h-auto"
            />
          </div>
          <div className="flex flex-col justify-center ">
            <h3 className="text-base lg:text-2xl  text-black font-bold">
            Quality Assurance Guarantee                        </h3>
            <p className="text-sm lg:text-base text-gray-600">
            Velit officia consequat duis enim velit mollie assu omnis dolor repellendus.


            </p>
          </div>
        </div>
        </div>
        <div className="pt-3">
       <Button text="Read More" />
        </div>

       
      </div>
    </div>
  );
}

export default AboutUs;
