import React from "react";

const Modal = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className=" bg-[#0f0e11] p-2 w-[50%]">
            <h2 className="text-xl font-bold mb-4 text-white">
              Let's discuss the Project
            </h2>
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
              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-gray-500 text-white px-4 py-2 rounded-md mr-2"
                  onClick={onClose}
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                  Submit
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
