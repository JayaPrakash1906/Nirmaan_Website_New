import React from 'react'
import Navbar from '../Components/Navbar'
import { FaArrowAltCircleRight } from 'react-icons/fa'
import { FaGraduationCap, FaRegClock } from 'react-icons/fa6'
import Footer from '../Components/Footer'
function Kgmg() {
  return (
    <div>
        <Navbar />
        <div className="mt-[88px] font-dmsans">
                <div className="md:bg-green-100">
                        <div className="p-5 flex"><span><a href="/" className="text-gray-500 font-semibold hover:underline">Home</a></span> <span className="p-2 text-gray-500"><FaArrowAltCircleRight size={12}/></span> <a className="text-black font-semibold" href="/scholarship">Scholarship</a> <span className="p-2 text-gray-500"><FaArrowAltCircleRight size={12}/></span> <span className="text-black font-semibold">KGMG</span></div>
                        <h2 className="md:text-5xl font-semibold text-gray-500 pt-20 text-center sm:text-3xl">KGMG</h2>
                        <div className="text-center pt-2 pb-3">Scholarship for Entrepreneurship Development</div>
                </div> 
                <div className="mt-10 px-20" id="content">
                           <div>KGMG: The K. Ganesh and Meena Ganesh Scholarship for Entrepreneurship Development (famously known as KGMG) aims to inspire postgraduate students to think entrepreneurially. At IIT Madras, there are thousands of postgraduate students with research that could make a real difference if turned into a business. This scholarship helps students turn their thesis or project work into viable start-up ideas, providing support to bridge the gap from research to a successful business.</div>
                           <div className="mt-14">    
                                    <h2 className="md:text-2xl font-semibold text-gray-500 text-center sm:text-3xl">Impact Over the years</h2>
                                    {/* grid */}
                                    <div className="grid grid-cols-4 gap-10 mt-7 mb-2">
                                            <div className="border border-t-4 border-green-400">
                                                    <div className="px-3 py-2">
                                                            <div className="m-1 text-sm">Year: 2020</div>   
                                                            <div className="text-5xl flex justify-center items-center text-gray-500 font-semibold py-5">6</div>
                                                            <div className="text-sm font-semibold text-gray-500">
                                                                            Students supported by KGMG
                                                            </div>
                                                    </div>
                                            </div>
                                            <div className="border border-t-4 border-green-400">
                                                    <div className="px-3 py-2">
                                                            <div className="m-1 text-sm">Year: 2021</div>   
                                                            <div className="text-5xl flex justify-center items-center text-gray-500 font-semibold py-5">3</div>
                                                            <div className="text-sm font-semibold text-gray-500">
                                                                            Students supported by KGMG
                                                            </div>
                                                    </div>
                                            </div>
                                            <div className="border border-t-4 border-green-400">
                                                    <div className="px-3 py-2">
                                                            <div className="m-1 text-sm">Year: 2022</div>   
                                                            <div className="text-5xl flex justify-center items-center text-gray-500 font-semibold py-5">3</div>
                                                            <div className="text-sm font-semibold text-gray-500">
                                                                            Students supported by KGMG
                                                            </div>
                                                    </div>
                                            </div>
                                            <div className="border border-t-4 border-green-400">
                                                    <div className="px-3 py-2">
                                                            <div className="m-1 text-sm">Year: 2023</div>   
                                                            <div className="text-5xl flex justify-center items-center text-gray-500 font-semibold py-5">5</div>
                                                            <div className="text-sm font-semibold text-gray-500">
                                                                            Students supported by KGMG
                                                            </div>
                                                    </div>
                                            </div>
                                            <div className="border border-t-4 border-green-400">
                                                    <div className="px-3 py-2">
                                                            <div className="m-1 text-sm">Year: 2024</div>   
                                                            <div className="text-5xl flex justify-center items-center text-gray-500 font-semibold py-5">1</div>
                                                            <div className="text-sm font-semibold text-gray-500">
                                                                            Students supported by KGMG
                                                            </div>
                                                    </div>
                                            </div>
                                    </div>
                                    {/* jhdk */}

                                    <div className="mt-20 mb-10" id="ugfir">
                                                <h2 className="md:text-2xl font-semibold text-gray-500 text-center sm:text-3xl">Stipend Details & Duration</h2>
                                                <div className="grid grid-cols-3 gap-5 mt-10">
                                                    <center>
                                                            <div className="">
                                                                <div className="border h-[140px] w-[140px] rounded-full bg-gray-100">
                                                                        <div className="flex justify-center items-center pt-[33px]" style={{color: '#66bb6a'}}><FaGraduationCap size={70}/></div>
                                                                </div>
                                                                <div className="pt-2 text-xl font-semibold">MS Scholar</div>
                                                                <div className="text-md">₹20,000</div>
                                                        </div>
                                                    </center>
                                                    <center>
                                                            <div className="">
                                                                <div className="border h-[140px] w-[140px] rounded-full bg-gray-100">
                                                                        <div className="flex justify-center items-center pt-[33px]" style={{color: '#66bb6a'}}><FaGraduationCap size={70}/></div>
                                                                </div>
                                                                <div className="text-xl pt-2 font-semibold">Phd Scholar</div>
                                                                <div className="text-md">₹30,000</div>
                                                        </div>
                                                    </center>
                                                    <center>
                                                            <div className="">
                                                                <div className="border h-[140px] w-[140px] rounded-full bg-gray-100">
                                                                        <div className="flex justify-center items-center pt-[33px]" style={{color: '#66bb6a'}}><FaRegClock size={70}/></div>
                                                                </div>
                                                                <div className="text-xl pt-2 font-semibold">Period</div>
                                                                <div className="text-md">6 Months</div>
                                                        </div>
                                                    </center>
                                                </div>
                                    </div>
                           </div>
                </div>

        </div>
        <Footer />
    </div>
  )
}

export default Kgmg
