import React from "react";
import Logo from "./Logo";
import { GrSearch} from "react-icons/gr";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
function Header() {
  return (
    <header className="h-16 shadow-md">
      <div className="h-full container mx-auto flex items-center px-4 justify-between">
        <div className="">
          <Logo w={90} h={50} />
        </div>

        <div className=" hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow-md pl-2">
          <input type="text" placeholder="Search roduct here...." className="w-full outline-none "/>
          <div className="text-lg min-w-[50px] h-8 flex bg-red-600 items-center justify-center rounded-r-full">
            <GrSearch />
          </div>
        </div>

        <div className="flex items-center gap-4">
        <div className="text-3xl cursor-pointer">
          <FaShoppingCart/>
        </div>

        <div className="text-2xl relative">
          <span>
          <FaRegUserCircle/>
          </span>
          <div className="bg-red-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3 ">
            <p className="text-sm">0</p>
          </div>
        </div>

        </div>
      </div>
    </header>
  );
}

export default Header;

let stringArray = ["javaScript", "java", "c++", "kotlin", "nodeJS", "python", "jango",]