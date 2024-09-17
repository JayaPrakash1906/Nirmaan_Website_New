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
                        <div className="pt-5 pl-5 flex"><span><a href="/" className="text-gray-500 font-semibold hover:underline">Home</a></span> <span className="p-2 text-gray-500"><FaArrowAltCircleRight size={12}/></span> <span className="text-black font-semibold">Events</span></div>
                        <h2 className="md:text-5xl font-semibold text-green-600  text-center pt-7 pb-6 sm:text-3xl">Upcoming Events</h2>
                        {/* <div className="text-center pt-3 pb-3"> Nirmaan </div> */}
                </div>
                <div className="grid md:grid-cols-7 px-10 mt-10 gap-14">
                        <div className="col-span-2 flex justify-end items-center"><img src={demo} className="md:h-[300px] md:shadow-lg border "/></div>
                        <div className="col-span-5">
                                <div className="font-semibold text-3xl text-green-600 flex "> Demo Day 2024</div>
                                <div className="flex"><span className="mt-1 font-semibold">27 September 2024</span></div>
                                <div className="flex"><FaClock size={24} className="pt-2 text-green-500"/> <span className="mt-1">09:00 AM to 6:00 PM</span></div>
                                <div className="flex"><FaLocationPin size={24} className="pt-2 text-green-500"/> <span className="mt-1">Sudha & Shankar Innovation Hub</span></div>
                                <div className="flex pt-2 text-black text-justify"> <span className="mt-1">Get ready for the inaugural “Demo Day” by Nirmaan: Pre-Incubator, where innovation meets its moment in the spotlight. Since its launch on October 31, 2015, Nirmaan has been the silent catalyst behind some of the IITM’s most exciting startups, transforming bold ideas into feasible ventures.
Now, on September 27, 2024, Nirmaan steps into the limelight, showcasing a new wave of IITM entrepreneurs and their cutting-edge innovations that are set to disrupt over nine industries.
This landmark event will also celebrate the achievements of our “Graduated teams.” Join us for an evening of inspiration, where industry leaders, investors, alumni, faculty, and students converge to connect, learn, and ignite the future.
</span></div>
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