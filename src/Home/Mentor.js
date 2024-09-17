import React from "react";
import Navbar from "../Components/Navbar";
import img1 from '../Assets/pr.png';
import img2 from '../Assets/devadula.png';
import img3 from '../Assets/balas.png';
import img4 from "../Assets/Satyesh Kumar.jpg";
import img5 from "../Assets/satyaseshadri.png";
import img6 from "../Assets/IMN - Indumathi Nambi.jpg";
import img7 from "../Assets/PS.jpeg";
import img8 from "../Assets/tiju.png";
import img9 from "../Assets/spdas.png";
import img10 from "../Assets/dhiman.png";
import img11 from "../Assets/vidya.jpg";
import img12 from "../Assets/ramkumar.jpg";
import img13 from "../Assets/Sathyanarayana N.  Gummadi.jpg";
import img14 from "../Assets/Sanjib Senapati (1).jpg";
import img15 from "../Assets/samad-jan2021pic3-942x1024-1-276x300.jpg";
import Footer from "../Components/Footer";
import { FaArrowAltCircleRight, FaLinkedin } from "react-icons/fa";

function Mentor() {
    const mentors = [
        { img: img5, name: "Dr. Satyanarayanan S", role: "Co-Founder", company: "Shakti", link: "https://www.linkedin.com/in/satyaseshadri/" },
        { img: img1, name: "Prof. Prabhu Rajagopal", role: "Advisor", company: "Drop WaterTech",link:"https://www.linkedin.com/in/prabhu-rajagopal-041ab74/"},
        { img: img7, name: "Prof. Parasuraman Swaminathan", role: "Advisor", company: "Uniscreen Solutions", link: "https://www.linkedin.com/in/parasuraman-swaminathan-19032533/" },
        { img: img8, name: "Dr. Tiju Thomas", role: "Advisor", company: "Pestokart", link: "https://in.linkedin.com/in/tiju-thomas-4826198" },
        { img: img2, name: "Dr. Sivasrinivasu Devadula", role: "Co-Founder & Advisor", company: "MachIntell", link: "https://www.linkedin.com/in/your-profile" },
        { img: img3, name: "Prof. Krishnan Balasubramaniam", role: "Mentor & Advisor", company: "iGenie", link: "https://www.linkedin.com/in/your-profile" },
        { img: img9, name: "Prof. Shyama Prasad das", role: "Advisor", company: "Renerzies", link: "https://www.linkedin.com/in/your-profile" },
        { img: img10, name: "Prof. Dhiman Chatterjee", role: "Advisor", company: "Renerzies", link: "https://www.linkedin.com/in/your-profile" },
        { img: img4, name: "Dr. Satyesh Kumar Yadav", role: "Co-Founder", company: "MatLoad Solutions", link: "https://www.linkedin.com/in/your-profile" },
        { img: img6, name: "Prof. Indumathi Manivannan Nambi", role: "Advisor", company: "EcoFarm", link: "https://www.linkedin.com/in/your-profile" },
        { img: img13, name: "Prof. Sathiya N. Gummadi", role: "Co-Founder", company: "SSS Internation Drug Discovery & Development Research Pvt Ltd", link: "https://www.linkedin.com/in/your-profile" },
        { img: img12, name: "Prof. P. Ramkumar", role: "Advisor", company: "Bhaskara Engineering Services", link: "https://www.linkedin.com/in/your-profile" },
        { img: img14, name: "Dr. Sanjib Senapati", role: "Advisor", company: "Proidesol", link: "https://www.linkedin.com/in/your-profile" },
        { img: img11, name: "Dr. Vidya Praveen Bhallamudi", role: "Advisor", company: "OptoMag Diagnostics", link: "https://www.linkedin.com/in/your-profile" },
        { img: img15, name: "Prof. Abdus Samad", role: "Co-Founder", company: "Tarang", link: "https://www.linkedin.com/in/your-profile" }
    ];

    return (
        <div>
            <Navbar />
            <div className="mt-[88px] font-dmsans">
                <div className="bg-green-100">
                    <div className="pt-5 pl-5 flex">
                        <span><a href="/" className="text-gray-500 font-semibold hover:underline">Home</a></span>
                        <span className="p-2 text-gray-500"><FaArrowAltCircleRight size={12} /></span>
                        <span className="text-black font-semibold">Mentors</span>
                    </div>
                    <h2 className="text-5xl font-semibold text-green-600 pt-7 pb-6 text-center">Faculty Advisors</h2>
                    
                </div>
                <div className="mt-10">
                    <div className="grid grid-cols-4 gap-5 px-10 mb-8">
                        {mentors.map((mentor, index) => (
                            <div key={index} className="border py-3">
                                <div className="relative flex justify-center items-center mx-auto w-[144px] h-[144px] mb-4">
                                    <img 
                                        src={mentor.img} 
                                        alt={mentor.name} 
                                        className="rounded-sm w-full h-full object-cover transition-all duration-500 hover:rounded-full hover:filter hover:brightness-50 "
                                    />
                                    <a 
                                        href={mentor.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-500"
                                    >
                                        <FaLinkedin size={25} className="text-white text-3xl" />
                                    </a>
                                </div>
                                <h3 className="text-md font-semibold text-green-600 text-center">{mentor.name}</h3>
                                <p className="text-sm text-center">{mentor.role}</p>
                                <p className="text-sm text-center font-semibold text-gray-500">{mentor.company}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Mentor;
