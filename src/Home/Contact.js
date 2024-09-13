import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Contact(){
    return(
    <div className="">
            <Navbar />
            <div className="mt-24 px-24 font-dmsans"><br></br>
                <h2 className="text-center text-5xl font-semibold text-gray-500">Contact Us</h2><br></br><br></br>
                <div id="form-input" className="grid grid-cols-2 gap-10 px-[200px]">
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