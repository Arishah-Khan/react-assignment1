import React from "react";
import Button from "./Button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Logs } from "lucide-react";

const list = ["Home", "About", "Services", "Projects", "Pages", "Contact Us"];

function Header() {
  return (
    <div>
      {/* Mobile Navigation */}
      <div className="md:hidden flex justify-between items-center  px-2 sm:px-4 py-3 bg-[#031832]">
        <div>
          <img src="/images/logo.png" alt="logo" className="w-[120px] sm:w-[170px] h-auto" />
        </div>
        <div>
          <Sheet>
            <SheetTrigger>
            <Logs className="text-white "/>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <ul className="space-y-4 pt-10 mt-4 text-center">
                  {list.map((item) => (
                    <li key={item}>
                      <a
                        href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                        className="block text-lg text-black hover:text-[#36e0f7] transition-all duration-300"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="flex justify-center items-center pt-2">
          <Button text="Let's Talk" />
        </div>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex justify-between items-center px-2 lg:px-4 py-3 bg-[#031832]">
        {/* Logo Section */}
        <div>
          <img src="/images/logo.png" alt="logo" className="w-[140px] lg:w-[170px] h-auto" />
        </div>

        {/* Navigation Section */}
        <div>
          <ul className="flex md:space-x-5 lg:space-x-7">
            {list.map((item) => (
              <li key={item}>
                <a
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className={`text-base lg:text-lg 
                    ${item === "Home" ? "text-[#36e0f7]" : "text-white"} 
                    hover:text-[#36e0f7] transition-all duration-300`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Button Section */}
        <div>
          <Button text="Let's Talk" />
        </div>
      </div>
    </div>
  );
}

export default Header;
