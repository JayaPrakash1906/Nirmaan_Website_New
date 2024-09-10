import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Contact(){
    return(
    <div className="">
            <Navbar />
            <div className="mt-24"><br></br>
                <div id="form-input" className="grid grid-cols-2 gap-10 px-10">
                    <input type="text" placeholder="First Name" className="p-2 border border-gray-300 rounded-md" />
                    <input type="text" placeholder="Last Name" className="p-2 border border-gray-300 rounded-md" />
                    <input type="email" placeholder="Email Address" className="p-2 border border-gray-300 rounded-md" />
                    <input type="text" placeholder="Contact Number" className="p-2 border border-gray-300 rounded-md" />
                    <div className="col-span-2">
                        <textarea placeholder="Your Message" rows="4" className="w-full p-2 border border-gray-300 rounded-md"></textarea>
                    </div>
                </div>
            </div>
            <Footer />
    </div>
    )
}
export default Contact;