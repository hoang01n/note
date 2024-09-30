import React from 'react'
import { FaFacebook, FaGithub } from 'react-icons/fa'
 const Footer = () => {
  return (

    <footer className="bg-slate-50 text-black-500 py-2 fixed bottom-0 left-0 right-0">
    <div className="container mx-auto flex flex-col items-center">
      <p className="text-lg font-semibold mb-2">Hoang Lê</p>
      <div className="flex space-x-4">
        <a href="https://www.facebook.com/lehoang13.11/" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="text-2xl hover:text-blue-200" />
        </a>
        <a href="https://github.com/hoang01n" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-2xl hover:text-gray-300" />
        </a>
      </div>
    </div>
  </footer>
  )
}
export default Footer;

