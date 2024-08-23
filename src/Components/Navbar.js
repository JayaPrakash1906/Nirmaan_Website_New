import React from 'react'
import Image from '../Assest/iitm.png'
import Image2 from '../Assest/Nirmaan.png'
import Image3 from '../Assest/oie.jpg'
const Navbar = () => {
  return (
    <div>
    <div className="flex items-center justify-between ml-10 mt-4">
  <div className="flex items-center">
  <img src={Image} className="w-22 h-12 " alt="Image1" />
  <img src={Image3} className="w-22 h-14 " alt="Image2" />
  <img src={Image2} className="w-18 h-10 mr-3.5" alt="Image3" />
    <div className="font-dmsans font-bold text-md ml-5"><span>N I R M A A N</span></div>
  </div>
  <div className="flex gap-10 mr-12 font-dmsans font-bold text-sm">
  <button type="button" onClick={() =>(window.location.href ="/About_us")}
  className="active:scale-[.90] active:duration-70 hover:scale-[1.02] transition-all ease-in-out md">
            <span>Home</span>
          </button>
          <button type="button" onClick={() =>(window.location.href ="/About_us")}
  className="active:scale-[.90] active:duration-70 hover:scale-[1.02] transition-all ease-in-out md">
            <span>About</span>
          </button>
          <button type="button" onClick={() =>(window.location.href ="/About_us")}
  className="active:scale-[.90] active:duration-70 hover:scale-[1.02] transition-all ease-in-out md">
            <span>Startup</span>
          </button>
  <button type="button" onClick={() =>(window.location.href ="/About_us")}
  className="active:scale-[.90] active:duration-70 hover:scale-[1.02] transition-all ease-in-out md">
            <span>Events</span>
          </button>
    <button><span>Media</span></button>
    <button><span>Careers</span></button>
    <button><span>Contact us</span></button>
  </div>
</div>

</div>


  )
}

export default Navbar