import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";

const navLinks = [
  { to: "about", label: "About" },
  { to: "pricing", label: "Pricing" },
  { to: "contact", label: "Contact" },
];
function Navbar({ handleOpenLogin }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleMenuToggle = () => setIsOpen(!isOpen);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`p-4 md:p-6 md:pl-20 md:pr-20 sticky top-0 w-full z-50 bg-[#001220] md:mb-0 mb-10 ${
        scrolled ? "md:bg-opacity-40 md:backdrop-blur-sm " : "md:bg-opacity-0"
      } transition-opacity duration-3000`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="flex items-center"
        >
          <h1
            className={`text-white text-3xl font-semibold cursor-pointer ${
              scrolled ? "hover:text-gray-800" : "hover:text-gray-400"
            }`}
          >
            logo
          </h1>
        </Link>
        <div
          className={`hidden md:flex space-x-4 font-semibold transition-all duration-3000 ${
            scrolled ? "text-white" : "text-black"
          }`}
        >
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              smooth={true}
              duration={500}
              className={`px-3 rounded cursor-pointer ${
                scrolled ? "hover:text-gray-800" : "hover:text-gray-400"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={handleOpenLogin}
            className={`px-3 rounded  ${
              scrolled
                ? "border border-white hover:text-gray-800 hover:border-gray-800"
                : "border border-gray-800 hover:text-gray-400 hover:border-gray-400"
            }`}
          >
            Login
          </button>
        </div>
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={handleMenuToggle}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      <div
        className={`fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={handleMenuToggle}
      ></div>
      <div
        className={`fixed top-0 left-0 transition-transform duration-700 transform ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } w-full z-40 rounded-xl`}
      >
        <div className="p-6 m-6 rounded-2xl bg-[#001220]">
          <button
            onClick={handleMenuToggle}
            className="text-white flex w-full items-end justify-end"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="flex flex-col font-semibold text-sm text-white">
            {navLinks.map((link, index) => (
              <Link
                onClick={handleMenuToggle}
                key={index}
                to={link.to}
                smooth={true}
                duration={500}
                className={`mt-4 border-b-2 border-b-gray-600`}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => {
                handleOpenLogin();
                handleMenuToggle();
              }}
              className="text-white border border-white px-4 py-2 rounded"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
