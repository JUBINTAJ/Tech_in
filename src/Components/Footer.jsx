import React from 'react';
import { FaInstagram, FaWhatsapp, FaPhone } from 'react-icons/fa';
import logo from '../assets/logo.jpg';

function Footer() {
  return (
    <>
      <footer className="bg-black text-white py-10">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">
          <div className="text-center md:text-left">
            <img src={logo} alt="Logo" className="w-44 mx-auto md:mx-0 mb-2" />
          </div>
          <div className="text-center text-sm xl:mr-10 text-gray-300">
            No Cash on Delivery. Pay via Card, UPI, or Net Banking.
          </div>
          <div className="flex flex-col items-center md:items-start space-y-3">
            <a
              href="https://www.instagram.com/in_tech_in?igsh=MTl2cWVpdjk5N2Nydw=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm hover:text-pink-500"
            >
              <FaInstagram /> Instagram
            </a>
            <a
              href="https://wa.me/6238383789"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm hover:text-green-500"
            >
              <FaWhatsapp /> WhatsApp
            </a>
            <a
              href="tel:+916238383789"
              className="flex items-center gap-2 text-sm hover:text-blue-500"
            >
              <FaPhone /> 6238383789
            </a>
          </div>
        </div>
        <div className="text-center text-xs text-gray-500 mt-8">
          © {new Date().getFullYear()} In_Tech_in All rights reserved.
        </div>
      </footer>
      <div className="fixed bottom-4 right-4 flex flex-col space-y-3 z-50">
        <a
          href="https://www.instagram.com/in_tech_in?igsh=MTl2cWVpdjk5N2Nydw=="
          target="_blank"
          rel="noopener noreferrer"
          className="bg-pink-500 hover:bg-pink-600 text-white p-3 rounded-full shadow-lg transition-colors duration-300"
        >
          <FaInstagram size={20} />
        </a>
        <a
          href="tel:+916238383789"
          className="bg-green-600 hover:bg-green-500 text-white p-3 rounded-full shadow-lg transition-colors duration-300"
        >
          <FaPhone size={20} />
        </a>
      </div>
    </>
  );
}

export default Footer;