// import React from "react";
// import Navbar from "../Components/Navbar";

// function Incubation(){
//     return (
//         <div>
//             <Navbar />

//             <div className="mt-[100px]">
//                    <div className="text-center font-semibold">Stages of Pre-Incubation</div>

//                    <div className="grid grid-cols-5 gap-10 px-10 mt-10">
//                         <div className="border">
//                             <div className="grid grid-cols-2">
//                                     <div></div>
//                                     <div></div>
//                             </div>
//                         </div>
//                         <div className="border">skfh</div>
//                         <div className="border">skfh</div>
//                         <div className="border">skfh</div>
//                         <div className="border">skfh</div>
//                    </div>
//             </div>
//         </div>
//     )
// }
//export default Incubation;

import React from "react";
import WhatWeOffer from "../Components/Eligibility";
import ApplicationProcess from "../Components/ApplicationProcess";
import Eligibility from "../Components/Eligibility";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Incubation() {
  return (
    <div className="font-dmsans">
      <Navbar />

      {/* Main Content */}
      <section className="mb-16 bg-white  p-8 mt-[100px]">
        <h2 className="text-center text-4xl font-bold text-gray-800 mb-8 font-dmsans">
          Pre-Incubation
        </h2>
        <p className="mr-16 ml-16 font-dmsans ">
          {" "}
          Nirmaan offers two exciting programs for student teams ready to embark
          on their entrepreneurial journey: Pratham and Akshar. Pratham gives
          you the core skills and knowledge to build a successful startup from
          the ground up. Akshar, on the other hand, focuses on helping you
          create a Minimum Viable Product (MVP) to test and refine your business
          idea. With Pratham’s foundational training and Akshar’s MVP
          development support, you’ll have everything you need to turn your
          entrepreneurial vision into reality
        </p>{" "}
      </section>
      {/* What We Offer Section */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-24 px-10">
        <div className="text-center border mt-4 rounded-lg p-6 border border-green-500">
          <h3 className="text-2xl font-semibold mb-4 text-black">
            Pratham - 8 Week Program
          </h3>
          <p className="text-gray-900 mb-6 leading-relaxed">
            Jumpstart your entrepreneurial journey with our 8-Week
            Program, Pratham, named after the Sanskrit word for "first.” This
            intensive program will guide student teams through the basics of
            business, finance, and market strategy, helping them turn their
            ideas into real possibilities. Here, each selected team will be
            equipped with a seed grant of ₹2 Lakhs, empowering them to conduct
            in-depth market research and develop prototypes.
          </p>
        </div>

        {/* Akshar Card */}
        <div className="text-center border mt-4 rounded-lg p-6 border border-green-500">
          <h3 className="text-2xl font-semibold mb-4 text-black">
            Akshar - 6 Month MVP Development
          </h3>
          <p className="text-gray-900 mb-6 leading-relaxed">
            Teams that shine in the Pratham phase will advance to the Akshar
            phase—a 6-month program designed to elevate your project. Here,
            you'll focus on developing your Minimum Viable Product (MVP) and
            mastering advanced business strategies like pricing, sales, and
            marketing. Each team will be granted ₹5 Lakhs to support MVP
            creation, in-depth market research, and connections with industry
            professionals. This is your opportunity to refine your project and
            make a lasting impact!
          </p>
        </div>
      </div>
      <section className="mb-16 bg-white shadow-md rounded-lg p-8 mt-[100px]">
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-8">
          What We Offer
        </h2>
        <WhatWeOffer />
      </section>
      <section className="mb-16 bg-gradient-to-r from-green-100 via-white to-green-200 shadow-md rounded-lg p-8">
        <h2 className="text-center text-3xl font-bold font-dmsans text-gray-800 mb-8">
          Application Process
        </h2>
        <ApplicationProcess />
      </section>
      <Footer />
    </div>
  );
}

export default Incubation;
