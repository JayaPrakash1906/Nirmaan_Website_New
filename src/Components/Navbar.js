import React from 'react'
import Image from '../Assets/iitm logo.png'
import Image2 from '../Assets/nirmaan logo.png'
import Image3 from '../Assets/OIE Logo.png'
const Navbar = () => {
  return (
    <div className="shadow-xl  text-black  p-4" style={{ backgroundColor: '#83d687' }}> 
    <div className="flex items-center justify-between ml-8 mt-4">
  <div className="flex items-center">
  <img src={Image} className="w-22 h-12 " alt="Image1" />
  <img src={Image3} className="w-22 h-14 " alt="Image2" />
  <img src={Image2} className="w-18 h-12 mr-3.5" alt="Image3" />
    <div className="font-dmsans font-bold text-xl ml-5"><span>N I R M A A N</span></div>
  </div>
  <div className="flex gap-10 mr-12 font-dmsans font-semibold text-sm">
  <button type="button" onClick={() =>(window.location.href ="/About_us")}
  className="active:scale-[.90] active:duration-70 hover:scale-[1.02] transition-all ease-in-out md">
            <span>Home</span>
          </button>
          <button type="button" onClick={() =>(window.location.href ="/About_us")}
  className="active:scale-[.90] active:duration-70 hover:scale-[1.02] transition-all ease-in-out md ">
            <span>Aboutus</span>
          </button>
          <button type="button" onClick={() =>(window.location.href ="/About_us")}
  className="active:scale-[.90] active:duration-70 hover:scale-[1.02] transition-all ease-in-out md">
            <span>Startup</span>
          </button>
  <button type="button" onClick={() =>(window.location.href ="/About_us")}
  className="active:scale-[.90] active:duration-70 hover:scale-[1.02] transition-all ease-in-out md">
            <span>Programs</span>
          </button>
    
    <button><span>Events</span></button>
    <button><span>Teams</span></button>
    <button><span>Media</span></button>
    <button><span>Contact us</span></button>
  </div>
</div>

</div>


  )
}

export default Navbar