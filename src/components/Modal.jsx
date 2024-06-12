import React from "react";
import { AiFillCloseSquare } from "react-icons/ai";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Modal = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className=" bg-[#0f0e11] p-2 w-[65%] lg:min-w-[576px]">
            <div className="flex justify-between items-center">
              <div className="text-xl font-barlow-2 font-bold mb-4 text-white text-[18px] pl-[26px] pt-[25px]">
                Let's Discuss the Project.
              </div>
              <div className="p-3" onClick={onClose}>
                <AiFillCloseSquare
                  style={{
                    color: "white",
                    background: "black",
                    fontSize: "25px",
                    top: "-40px",
                  }}
                />
              </div>
            </div>
            {/* Form for entering user details */}
            <form>
              <div className="mb-[3px] flex space-x-[3px]">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="First Name"
                  className="w-full  p-2 bg-[#393943] "
                />
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Last Name"
                  className="w-full bg-[#393943]  p-2"
                />
              </div>

              <div className="mb-4">
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Company"
                  className="w-full bg-[#393943]  p-2 mb-[3px]"
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Official Email Id"
                  className="w-full bg-[#393943] mb-[3px]  p-2"
                />
                <input
                  type="text"
                  id="city"
                  name="city"
                  placeholder="Which City You Want to Create The Video"
                  className="w-full bg-[#393943]  p-2 mb-[3px]"
                />

                <textarea
                  type="text"
                  id="brief"
                  name="brief"
                  rows="4"
                  placeholder="Write The Brief"
                  className="w-full bg-[#393943]  p-2 mb-[3px]"
                />
              </div>
              <div className="flex justify-between w-[200px]">
                <button
                  type="submit"
                  className="px-[12px] py-[16px] bg-gradient-to-r from-[#03256c] to-green-500 hover:bg-gradient-to-r hover:from-green-500 hover:to-[#03256c] text-white font-barlow font-bold  w-full flex justify-between items-center"
                >
                  SUBMIT
                  <HiOutlineArrowNarrowRight />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
