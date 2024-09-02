import React, { useRef, useEffect } from "react";

const PopupLogin = ({ isOpen, onClose }) => {
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  if (!isOpen) return null;

  const handleSubmit = () => {
    alert("Login");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div
        ref={modalRef}
        className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full"
      >
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <form className="space-y-4">
          <div>
            <input
              id="email"
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <input
              id="password"
              type="password"
              placeholder="Password Anda"
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>
          <button
            onClick={handleSubmit}
            className="w-full py-3 px-6 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-500"
          >
            Masuk
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopupLogin;
