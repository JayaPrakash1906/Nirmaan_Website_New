import React from 'react'
import Navbar from '../Components/Navbar'
import { FaArrowAltCircleRight } from 'react-icons/fa'

function ScholarShip() {
  return (
    <div>
        <Navbar />
        <div className="mt-[88px;]">
                <div className="md:bg-green-100">
                        <div className="p-5 flex"><span><a href="/" className="text-gray-500 font-semibold hover:underline">Home</a></span> <span className="p-2 text-gray-500"><FaArrowAltCircleRight size={12}/></span> <span className="text-black font-semibold">Events</span></div>
                        <h2 className="md:text-5xl font-semibold text-gray-500 p-20 text-center pb-10 sm:text-3xl">Scholarships</h2>
                        {/* <div className="text-center pt-3 pb-3"> Nirmaan </div> */}
                </div>
                <div className="">
                        <div>sjdh</div>
                </div>
        </div>
    </div>
  )
}

export default ScholarShip
