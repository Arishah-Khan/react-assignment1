import React from "react";
import Button from "./Button";
import Card from "./Card";

const Card1 = [
  {
    image: "/images/service1.png",
    heading: "Robotic Automation",
    paragraph: "Autem vel eum iure reprehea rui in ea volutae velit…",
  },
  {
    image: "/images/service2.png",
    heading: "Education & Science",
    paragraph: "Eutem vel eum iure reprehea rui in ea volutae velit…",
  },
];

const Card2 = [
  {
    image: "/images/service3.png",
    heading: "Machine learning",
    paragraph: "Butem vel eum iure reprehea rui in ea volutae velit…",
  },
  {
    image: "/images/service4.png",
    heading: "Predictive Analysis",
    paragraph: "Rutem vel eum iure reprehea rui in ea volutae velit…",
  },
];

function Service() {
  return (
    <div className="bg-[#eafcfe] grid grid-cols-1 md:grid-cols-2 justify-center items-center px-2 md:px-10 py-12">
      <div className="flex flex-col justify-center items-center md:items-start max-w-[550px] mx-auto gap-2  px-3">
        <h4 className="text-[#36e0f7] text-2xl font-semibold pb-3">
          SERVICES WE PROVIDE
        </h4>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
          Our Purpose is To Deliver Excellence in Service and Execution
        </h2>
        <p className="text-justify lg:text-lg text-gray-600 mb-6">
          Repellendus autem ruibusdam et aut officiis debitis aut re
          necessitatibus saepe eveniet ut et voluptates repudianda sint et
          molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente
          delectus.
        </p>

        <div className="pt-3">
          <Button text="Read More" />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 py-8">
        <div className="flex flex-col justify-center items-center gap-6">
            {Card1.map((item,index) => (
                <Card 
                key={index}
                image={item.image}
                heading={item.heading}
                paragraph={item.paragraph} />
            ))}
        </div>
        <div className="flex flex-col justify-center items-center gap-6 sm:pt-16">
            {Card2.map((item,index) => (
                <Card 
                key={index}
                image={item.image}
                heading={item.heading}
                paragraph={item.paragraph} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Service;
