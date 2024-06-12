import { useState } from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import Modal from "./Modal";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleSidebar = () => {
    console.log(isSidebarOpen);
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
        className={`z-20 fixed top-0 left-0 h-full bg-[#04052e] text-white w-[400px]  transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex items-center justify-between p-[10px]">
          <img
            src="https://storyvord.com/img/favicon.svg"
            alt="Logo"
            className="h-12"
          />
          <button className="w-[22px]" onClick={toggleSidebar}>
            <img src="https://storyvord.com/img/close.svg" />
          </button>
        </div>

        <div className="flex flex-col justify-center h-full bg-gradient-to-r from-[#03256c] to-green-500 gap-[40px]">
          <ul className=" flex flex-col justify-center p-4 space-y-4  bg-[url('https://storyvord.com/img/camera-stand-img.png')] bg-center h-full ">
            <div className="flex flex-col  gap-10 mt-10">
              <li className="text-md font-josefin text-[26px]">
                <a href="https://storyvord.com/portfolio" target="_blank">
                  Portfolio
                </a>
              </li>
              <li
                className="text-md font-josefin flex flex-col text-[26px] cursor-pointer"
                onClick={toggleDropdown}
              >
                <span>
                  Login
                  <svg
                    className={`w-4 h-8 ml-2 inline-block ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                    fill="white"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </span>
                {isDropdownOpen && (
                  <ul className="left-0 flex flex-col  text-black rounded-md text-[20px] ">
                    <li
                      onClick={openModal}
                      className="px-4 py-4 cursor-pointer text-black border-b-[1px] hover:border-b-[2px] border-white mx-4"
                    >
                      Are you Buyer?
                    </li>
                    <li
                      onClick={openModal}
                      className="px-4 py-2 cursor-pointer text-black border-b-[1px] hover:border-b-[2px] border-white mx-4"
                    >
                      Are you Creator?
                    </li>
                  </ul>
                )}
              </li>

              <li className=" flex space-x-4 mt-4 gap-3">
                <a
                  href="https://www.facebook.com/storyvord"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="text-white w-7 h-7 hover:text-gray-300" />
                </a>
                <a
                  href="https://www.linkedin.com/company/88028939"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-white w-7 h-7 hover:text-gray-300" />
                </a>
                <a
                  href="https://twitter.com/storyvord"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="text-white w-7 h-7 hover:text-gray-300" />
                </a>
              </li>
            </div>
          </ul>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </nav>
  );
};

export default Navbar;
