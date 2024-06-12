import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white p-4">
      <div className='flex flex-row justify-center items-center my-4 gap-4 border-b-gray-500'>
        <h2>Contate-me:</h2>
        <FaFacebook className='w-8 h-8 hover:text-yellow-500 ease-in-out duration-300'></FaFacebook>
        <FaInstagram className='w-8 h-8 hover:text-yellow-500 ease-in-out duration-300'></FaInstagram>
        <FaLinkedin className='w-8 h-8 hover:text-yellow-500 ease-in-out duration-300'></FaLinkedin>
        <FaWhatsapp className='w-8 h-8 hover:text-yellow-500 ease-in-out duration-300'></FaWhatsapp>
      </div>
      <div className="text-center text-gray-400">
        <p>&copy; 2024 Project Manager. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
