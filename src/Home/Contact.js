import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { FaArrowAltCircleRight } from "react-icons/fa";

function Contact(){
    return(
    <div className="">
            <Navbar />
            <div className="mt-[88px] font-dmsans">
            <div className="md:bg-green-100">
                        <div className="p-5 flex"><span><a href="/" className="text-gray-500 font-semibold hover:underline">Home</a></span> <span className="p-2 text-gray-500"><FaArrowAltCircleRight size={12}/></span> <span className="text-black font-semibold">Contact us</span></div>
                        <h2 className="md:text-5xl font-semibold text-green-600 pt-8 text-center pb-10 sm:text-3xl">Contact us</h2>
                        {/* <div className="text-center pt-3 pb-3"> Nirmaan </div> */}
                </div>

                <div id="form-input" className="grid grid-cols-2 gap-10 px-[200px] px-24 py-6">
                    <input type="text" placeholder="First Name"   className="p-2 bg-gray-100 border-gray-300 rounded-md focus:ring-2 focus:ring-green-200 focus:outline-none" />
                    <input type="text" placeholder="Last Name" className="p-2 bg-gray-100 border-gray-300 rounded-md focus:ring-2 focus:ring-green-200 focus:outline-none" />
                    <input type="email" placeholder="Email Address" className="p-2 bg-gray-100 border-gray-300 rounded-md focus:ring-2 focus:ring-green-200 focus:outline-none" />
                    <input type="text" placeholder="Contact Number" className="p-2 bg-gray-100 border-gray-300 rounded-md focus:ring-2 focus:ring-green-200 focus:outline-none"/>
                    <div className="col-span-2">
                        <textarea placeholder="Your Message" rows="4" className="w-full p-2 bg-gray-100 border-gray-300 rounded-md resize-none focus:ring-2 focus:ring-green-200 focus:outline-none"></textarea>
                    </div>
                </div>
            </div>
            <Footer />
    </div>
    )
}
export default Contact;