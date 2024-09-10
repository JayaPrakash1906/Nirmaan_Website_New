// import React from 'react'
// import Image from '../Assets/iitm logo.png'
// import Image2 from '../Assets/nirmaan logo.png'
// import Image3 from '../Assets/OIE Logo.png'

// const Navbar = () => {
//   return (
//     <div className="fixed top-0 left-0 w-full shadow-xl text-black p-4 z-50" style={{ backgroundColor: '#83d687' }}> 
//       <div className="flex items-center justify-between ml-8 mt-2">
//         <div className="flex items-center">
//           <img src={Image} className="w-22 h-12" alt="Image1" />
//           <img src={Image3} className="w-22 h-14" alt="Image2" />
//           <img src={Image2} className="w-18 h-12 mr-3.5" alt="Image3" />
//           <div className="font-dmsans font-bold text-xl ml-5">
//             <span>N I R M A A N</span>
//           </div>
//         </div>
//         <div className="flex gap-10 mr-12 font-dmsans font-semibold text-sm">
//           <button type="button" onClick={() => (window.location.href = "/")}
//             className="active:scale-[.90] active:duration-70 hover:scale-[1.02] transition-all ease-in-out md">
//             <span>HOME</span>
//           </button>
//           <button type="button" onClick={() => (window.location.href = "/About_us")}
//             className="active:scale-[.90] active:duration-70 hover:scale-[1.02] transition-all ease-in-out md">
//             <span>ABOUT</span>
//           </button>
//           <button type="button" onClick={() => (window.location.href = "/programs")}
//             className="active:scale-[.90] active:duration-70 hover:scale-[1.02] transition-all ease-in-out md">
//             <span>PROGRAMS</span>
//           </button>
          
//           <button><span>EVENTS</span></button>
//           <button><span>TEAMS</span></button>
//           <button><span>MEDIA</span></button>
//           <button onClick={() => (window.location.href = "/contact-us")}><span>CONTACT</span></button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Navbar

import React from 'react'
import Image from '../Assets/iitm logo.png'
import Image2 from '../Assets/nirmaan logo.png'
import Image3 from '../Assets/OIE Logo.png'

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full shadow-md text-black p-4 z-50" style={{ backgroundColor: '#83d687' }}> 
      <div className="flex items-center justify-between ml-8">
        <div className="flex items-center">
          <img src={Image} className="w-22 h-12" alt="Image1" />
          <img src={Image3} className="w-22 h-14" alt="Image2" />
          <img src={Image2} className="w-18 h-12 mr-3.5" alt="Image3" />
          <div className="font-dmsans font-bold text-xl ml-5">
            <span>N I R M A A N</span>
          </div>
        </div>
        <div className="flex gap-10 mr-12 font-dmsans font-semibold text-sm">
          <button type="button" onClick={() => (window.location.href = "/")}
            className="active:scale-[.90] active:duration-70 hover:scale-[1.02] transition-all ease-in-out md">
            <span>HOME</span>
          </button>
          <button type="button" onClick={() => (window.location.href = "/About_us")}
            className="active:scale-[.90] active:duration-70 hover:scale-[1.02] transition-all ease-in-out md">
            <span>ABOUT</span>
          </button>
          <div className="relative group">
            <button type="button"
              className="active:scale-[.90] active:duration-70 hover:scale-[1.02] transition-all ease-in-out md">
              <span>PROGRAMS</span>
            </button>
            <div className="absolute hidden bg-white text-black mt-8 shadow-lg rounded-sm group-hover:block right-[-39px] border-t-4 border-green-700">
              <button
                className="block px-4 py-2 text-sm hover:bg-gray-200 w-full text-left"
                onClick={() => (window.location.href = "/incubation")}
              >
                INCUBATION 
              </button>
              <button
                className="block px-4 py-2 text-sm hover:bg-gray-200 w-full text-left"
                onClick={() => (window.location.href = "/pratham")}
              >
                SCHOLARSHIP
              </button>
            </div>
          </div>
          <button ><span>EVENTS</span></button>
          <button onClick={() => (window.location.href = "/teams")}><span>TEAMS</span></button>
          <button><span>MEDIA</span></button>
          <button onClick={() => (window.location.href = "/contact-us")}><span>CONTACT</span></button>
        </div>
      </div>
    </div>
  )
}

export default Navbar;

