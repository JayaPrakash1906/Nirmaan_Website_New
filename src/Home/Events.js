import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { FaArrowAltCircleRight, FaArrowRight, FaCalendar, FaClock } from "react-icons/fa";
import { FaArrowRightLong, FaLocationPin } from "react-icons/fa6";
import demo from '../Assets/DemoDay2024.png';
function Events(){
    return (
        <div>
            <Navbar />
            <div className="mt-[88px] font-dmsans">
                 <div className="md:bg-green-100">
                        <div className="p-5 flex"><span><a href="/" className="text-gray-500 font-semibold hover:underline">Home</a></span> <span className="p-2 text-gray-500"><FaArrowAltCircleRight size={12}/></span> <span className="text-black font-semibold">Events</span></div>
                        <h2 className="md:text-5xl font-semibold text-gray-500 pt-20 text-center pb-10 sm:text-3xl">Upcoming Events</h2>
                        {/* <div className="text-center pt-3 pb-3"> Nirmaan </div> */}
                </div>
                <div className="grid md:grid-cols-2 px-10 mt-10 gap-14">
                        <div className="flex justify-end items-center"><img src={demo} className="md:h-[250px] md:shadow-lg border "/></div>
                        <div className="">
                                <div className="font-semibold text-3xl text-green-600 flex ">Nirmaan Demo Day 2024</div>
                                <div className="flex"><span className="mt-1 font-semibold">Sept 27 2024</span></div>
                                <div className="flex"><FaClock size={24} className="pt-2 text-green-500"/> <span className="mt-1">09:00 AM to 6:00 PM</span></div>
                                <div className="flex"><FaLocationPin size={24} className="pt-2 text-green-500"/> <span className="mt-1">Sudha & Shankar Innovation Hub</span></div>
                        </div>
                </div>
            </div>
            <div className="mb-[100]">
                <Footer />
            </div>
        </div>
    )
}
export default Events;