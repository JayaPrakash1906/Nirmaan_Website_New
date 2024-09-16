import React from 'react';
import Navbar from '../Components/Navbar';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import Img9 from '../Assets/scholarship-image.png';
import Footer from '../Components/Footer';

function ScholarShip() {
  return (
    <div>
      <Navbar />
      <div className="mt-[88px] font-dmsans">
                <div className="md:bg-green-100">
                        <div className="p-5 flex"><span><a href="/" className="text-gray-500 font-semibold hover:underline">Home</a></span> <span className="p-2 text-gray-500"><FaArrowAltCircleRight size={12}/></span> <span className="text-black font-semibold">Scholarship</span></div>
                        <h2 className="md:text-5xl font-semibold text-green-600 pt-8 pb-3 text-center sm:text-3xl">Scholarship</h2>
                        
                </div>
                <div className="mt-10">
                           <div className="grid md:grid-cols-2 gap-24 mx-24">
                                    <div className="border pt-2 pb-4 mb-2 border-t-2 border-green-300">
                                                <h2 className="text-center text-3xl font-semibold text-green-600 mt-4 mb-4">UGFIR</h2>
                                                <div className='mt-3 mb-3 px-10'>UGFIR provides housing and a stipend, allowing undergraduate students to fully focus on their startup ventures while in college..</div>
                                                <center><a className="px-5 py-1 rounded-full mt-1 text-white" href="/scholarship/ugfir" style={{backgroundColor: '#66bb6a'}}>View More</a></center>
                                    </div>
                                    <div className="border pt-2 pb-2 mb-2 border-t-2 border-green-300">
                                                <h2 className="text-center text-3xl font-semibold text-green-600 mt-4 mb-4">KGMG</h2>
                                                <div className='mt-3 mb-3 px-10'>KGMG helps postgraduate students turn their research into startup ideas, bridging the gap from thesis to successful business.</div>
                                                <center><a className="bg-green-400 px-5 py-1 rounded-full mt-1 text-white" href="/scholarship/kgmg" style={{backgroundColor: '#66bb6a'}}>View More</a></center>
                                    </div>
                           </div>
                </div>
      </div>
      <Footer />
    </div>
  );
}

export default ScholarShip;