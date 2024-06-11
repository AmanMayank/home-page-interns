import React, { useState } from "react";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    console.log(isSidebarOpen);
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <nav className="flex items-center justify-between relative bg-[#04052e] p-4">
      <div className="flex items-center">
        <img
          src="https://storyvord.com/img/logo.svg"
          alt="Logo"
          className="h-12 mr-4 lg:ml-24"
        />
      </div>
      <div className=" hidden lg:block text-white text-md font-josefin font-[15px]">
        Portfolio
      </div>
      <div className="hidden lg:block">
        <button className="bg-gradient-to-r from-[#03256c] to-green-500 text-white font-josefin font-[15px] py-1.5 px-10 ml-6 lg:mr-24">
          Login
        </button>
      </div>

      <div className="block lg:hidden" onClick={toggleSidebar}>
        <button className="flex justify-center items-center w-[28px] h-auto ">
          <img src="https://storyvord.com/img/menu.svg" />
        </button>
      </div>

      {/* Sidebar */}

      <div
        className={`z-20 fixed top-0 left-0 h-full bg-[#04052e] text-white w-[400px] transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex items-center justify-between p-[10px] 0">
          <img
            src="https://storyvord.com/img/favicon.svg"
            alt="Logo"
            className="h-12"
          />
          <button className="w-[22px]" onClick={toggleSidebar}>
            <img src="https://storyvord.com/img/close.svg" />
          </button>
        </div>

        <ul className="flex flex-col p-4 space-y-4">
          <li className="text-md font-josefin">Portfolio</li>
          <li>
            <button className="bg-gradient-to-r from-[#03256c] to-green-500 text-white font-josefin font-[15px] py-1.5 px-10">
              Login
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
