import { ChevronRight } from "lucide-react";
import React from "react";

function Button({ text }) {
  return (
    <div>
      <button
        className="
        px-1
        py-1
        text-white 
        bg-gradient-to-r 
        from-[#28aac1] 
        to-[#02162d] 
        hover:to-[#28aac1] 
        hover:from-[#02162d] 
        rounded-full 
        flex items-center justify-center space-x-1 lg:space-x-2 font-semibold pl-6 border-[1px] border-[#28aac1]
      "
      >
        {/* Icon with background, rounded */}
        <span>{text}</span> {/* Button Text */}
        <div className="bg-white rounded-full p-1 lg:p-2">
          <ChevronRight className="text-black" />
        </div>
      </button>
    </div>
  );
}

export default Button;
