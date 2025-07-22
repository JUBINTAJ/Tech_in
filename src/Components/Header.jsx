import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.jpg';

function Header() {
  const customers = [
    "2000+ Happy Customers",
    "Delivery all over india"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);


  const handlePrev = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? customers.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === customers.length - 1 ? 0 : prevIndex + 1
    );
  };



  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="relative bg-green-600 text-white overflow-hidden flex items-center justify-center">
        <div className="flex items-center space-x-4">
          <button onClick={handlePrev}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M12.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L8.414 10l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <div className="w-64 text-center text-lg font-semibold overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -50, opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                {customers[currentIndex]}
              </motion.div>
            </AnimatePresence>
          </div>

          <button onClick={handleNext}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M7.293 4.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L11.586 10 7.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="bg-black text-white">
        <div className="container mx-auto">
          <nav className="flex justify-between items-center p-4">
              <div className="flex justify-center items-center w-full sm:w-auto">
              <Link to="/">
                <img src={logo} alt="Logo" className="h-10" />
              </Link>
            </div>

            <ul className="hidden sm:flex sm:space-x-6">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `hover:text-gray-300 ${isActive ? 'font-bold border-b-2 border-white' : ''}`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/save"
                  className={({ isActive }) =>
                    `hover:text-gray-300 ${isActive ? 'font-bold border-b-2 border-white' : ''}`
                  }
                >
                  Save
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>

 
      <div className="fixed bottom-0 left-0 right-0 bg-black text-white z-50 sm:hidden">
        <nav className="flex justify-around items-center py-3 border-t border-gray-700">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex flex-col items-center space-y-1 px-4 py-2 rounded-lg transition-colors ${
                isActive ? 'text-green-400 font-bold' : 'hover:text-gray-300'
              }`
            }
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
            </svg>
            <span className="text-xs">Home</span>
          </NavLink>
          
          <NavLink
            to="/save"
            className={({ isActive }) =>
              `flex flex-col items-center space-y-1 px-4 py-2 rounded-lg transition-colors ${
                isActive ? 'text-green-400 font-bold' : 'hover:text-gray-300'
              }`
            }
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
              <path d="M7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6h5a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h5v5.586l-1.293-1.293zM9 4a1 1 0 012 0v2H9V4z"/>
            </svg>
            <span className="text-xs">Save</span>
          </NavLink>
        </nav>
        </div>
      </div>
   
  );
}

export default Header;