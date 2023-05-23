import React from 'react';

const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <div className="flex items-center">
          <h1 className='font-bold text-white text-4xl px-5 '>EduToy</h1>
        </div>
        <div className="flex mt-4 md:mt-0 text-white">
          <a href="#" className="text-white-400 hover:text-white mx-3">Home</a>
          <a href="#" className="text-white-400 hover:text-white mx-3">About</a>
          <a href="#" className="text-white-400 hover:text-white mx-3">Services</a>
          <a href="#" className="text-white-400 hover:text-white mx-3">Contact</a>
        </div>
      </div>
      <div className="container mx-auto mt-4">
        <div className="flex justify-center">
          <a href="#" className="text-white-400 hover:text-white mx-2">
            <svg className="h-5 w-5" viewBox="0 0 24 24">
              <path fill="currentColor" d="M19 2H5C3.9 2 3 2.9 3 4V20C3 21.1 3.9 22 5 22H19C20.1 22 21 21.1 21 20V4C21 2.9 20.1 2 19 2ZM17.5 10.5H16C15.4 10.5 15 10.9 15 11.5V13.5H17.5V17.5H15V22H11V17.5H8.5V13.5H11V11.5C11 9.8 12.3 8.5 14 8.5H17.5V10.5Z" />
            </svg>
          </a>
          <a href="#" className="text-white-400 hover:text-white mx-2">
            <svg className="h-5 w-5" viewBox="0 0 24 24">
              <path fill="currentColor" d="M14.5 22H9.5C6.5 22 4 19.5 4 16.5V9.5C4 6.5 6.5 4 9.5 4H14.5C17.5 4 20 6.5 20 9.5V16.5C20 19.5 17.5 22 14.5 22ZM16 9.5C16 8.7 15.3 8 14.5 8H9.5C8.7 8 8 8.7 8 9.5V14.5C8 15.3 8.7 16 9.5 16H14.5C15.3 16 16 15.3 16 14.5V9.5ZM17.5 6H6.5C3.5 6 1 8.5 1 11.5V16.5C1 19.5 3.5 22 6.5 22H17.5C20.5 22 23 19.5 23 16.5V11.5C23 8.5 20.5 6 17.5 6Z" />
            </svg>
          </a>
          <a href="#" className="text-white-400 hover:text-white mx-2">
            <svg className="h-5 w-5" viewBox="0 0 24 24">
              <path fill="currentColor" d="M21 5.3C20.2 5.6 19.4 5.8 18.5 6C19.4 5.4 20.1 4.6 20.5 3.7C19.7 4.2 18.9 4.6 18 4.9C17.2 4.1 16.2 3.7 15 3.7C12.3 3.7 10.1 5.9 10.1 8.6C10.1 9.1 10.2 9.5 10.3 10C6.8 10 4 7.2 4 3.7C4 3.3 4.1 2.9 4.3 2.6C3.6 3.1 3 3.9 3 4.9C3 6.2 3.8 7.3 5 7.8C4.3 7.8 3.7 7.6 3.2 7.3C3.2 7.3 3.2 7.3 3.2 7.4C3.2 9.4 4.8 11.1 6.8 11.4C6.5 11.5 6.2 11.5 5.9 11.5C5.6 11.5 5.4 11.4 5.1 11.3C5.6 13 7.1 14.3 8.9 14.4C7.8 15 6.4 15.4 5 15.4C4.6 15.4 4.2 15.3 3.8 15.2C5.6 16.6 7.7 17.4 10 17.4C15 17.4 18.7 13.7 18.7 9C18.7 8.8 18.7 8.7 18.7 8.5C19.5 7.8 20.2 7 21 6.1L21 5.3Z" />
            </svg>
          </a>
        </div>
        <div className="flex justify-center mt-4">
          <span className="text-white-400">&copy; 2023 Edu Toy. All rights reserved.</span>
        </div>
        <div className="flex justify-center mt-2">
          <span className="text-white-400">123 Main Street, City, Country</span>
        </div>
        <div className="flex justify-center mt-2">
          <span className="text-white-400">Phone: 123-456-7890</span>
        </div>
      </div>
    </footer>
    );
};

export default Footer;