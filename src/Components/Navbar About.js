import React from 'react';
import Image from '../Assest/image.png';

const Navbar = () => {
  return (
    <div>
      <div className="flex items-center justify-between ml-10 mt-4">
      <button onClick={() =>(window.location.href ="/")}>
        <div className="flex items-center">
          <img src={Image} className="w-12 h-12 mr-2.5" alt="Logo" />
          <div className="font-dmsans font-bold text-md">
            
            <span>N I R M A A N</span>
            <div className="font-dmsans text-xs mr-10">iitmadras</div>
          </div>
        </div>
        </button>
        <div className="flex gap-10 mr-12 font-dmsans font-bold text-sm">
          <button><span>About us</span></button>
          <button><span>Media</span></button>
          <button><span>Startup</span></button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
