import React, { useState, useEffect } from 'react';
import Image from '../Assets/iitm logo.png';
import Image2 from '../Assets/nirmaan logo.png';
import Image3 from '../Assets/OIE Logo.png';

const Navbar = () => {
  const [activePage, setActivePage] = useState("");

  useEffect(() => {
    // Set the active page based on the current URL
    const currentPath = window.location.pathname;
    setActivePage(currentPath);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full shadow-md text-black p-4 z-50" style={{ backgroundColor: '#83d687' }} >
      <div className="flex items-center justify-between ml-8">
        < a className="flex items-center" onClick={() => (window.location.href = "/")}>
          <img src={Image} className="w-22 h-12 mr-2" alt="Image1" />
          <img src={Image3} className="w-22 h-14 mr-2" alt="Image2" />
          <img src={Image2} className="w-18 h-12 mr-3.5" alt="Image3" />
          <div className="font-dmsans font-bold text-2xl ml-5">
            <span>N I R M A A N</span>
            <div className="text-base">
              The Pre-Incubator
            </div>
          </div>
        </a>
        <div className="flex gap-10 mr-12 font-dmsans font-semibold text-sm">
          <button
            type="button"
            onClick={() => (window.location.href = "/")}
            className={`active:scale-[.90] active:duration-70 hover:scale-[1.02] transition-all ease-in-out md pt-4 ${activePage === '/' ? 'border-b-2 border-green-800 text-green-800' : ''}`}
          >
            <span>HOME</span>
          </button>
          <button
            type="button"
            onClick={() => (window.location.href = "/About_us")}
            className={`active:scale-[.90] active:duration-70 hover:scale-[1.02] transition-all ease-in-out md pt-4 ${activePage === '/About_us' ? 'border-b-2 border-green-800 text-green-800' : ''}`}
          >
            <span>ABOUT</span>
          </button>
          <div className="relative group">
            <button
              type="button"
              className={`active:scale-[.90] active:duration-70 hover:scale-[1.02] transition-all ease-in-out md pt-4 ${activePage.includes('incubation') || activePage.includes('scholarship') ? 'border-b-2 border-green-800 text-green-800' : ''}`}
            >
              <span>PROGRAMS</span>
            </button>
            <div className="absolute hidden bg-white text-black mt-1 shadow-lg rounded-sm group-hover:block right-[-39px] border-t-4 border-green-700">
              <button
                className="block px-1 py-2 text-sm hover:bg-gray-200 w-full text-left"
                onClick={() => (window.location.href = "/incubation")}
              >
                PRE-INCUBATION
              </button>
              <button
                className="block  py-2 text-sm hover:bg-gray-200 w-full text-left mr-8 ml-1"
                onClick={() => (window.location.href = "/scholarship")}
              >
                SCHOLARSHIP
              </button>
            </div>
          </div>
          <button
            onClick={() => (window.location.href = "/events")}
            className={`pt-4 ${activePage === '/events' ? 'border-b-2 border-green-800 text-green-800' : ''}`}
          >
            <span>EVENTS</span>
          </button>
          <button
            onClick={() => (window.location.href = "/teams")}
            className={`pt-4 ${activePage === '/teams' ? 'border-b-2 border-green-800 text-green-800' : ''}`}
          >
            <span>TEAMS</span>
          </button>
          <button
            onClick={() => (window.location.href = "/mentor")}
            className={`pt-4 ${activePage === '/mentor' ? 'border-b-2 border-green-800 text-green-800' : ''}`}
          >
            <span>MENTORS</span>
          </button>
          <button
            onClick={() => (window.location.href = "/media")}
            className={`pt-4 ${activePage === '/media' ? 'border-b-2 border-green-800 text-green-800' : ''}`}
          >
            <span>MEDIA</span>
          </button>
          <button
            onClick={() => (window.location.href = "/contact-us")}
            className={`pt-4 ${activePage === '/contact-us' ? 'border-b-2 border-green-800 text-green-800' : ''}`}
          >
            <span>CONTACT</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
