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
import { FaArrowAltCircleRight } from "react-icons/fa";
function Mentor(){
    return (
        <div>
            <Navbar />

            <div className="mt-[88px] font-dmsans">
                <div className="bg-green-100">
                        <div className="p-5 flex"><span><a href="/" className="text-gray-500 font-semibold hover:underline">Home</a></span> <span className="p-2 text-gray-500"><FaArrowAltCircleRight size={12}/></span> <span className="text-black font-semibold">Mentors</span></div>
                        <h2 className="text-5xl font-semibold text-gray-500 pt-24 text-center">Faculty Advisors</h2>
                        <div className="text-center pt-2 pb-3">Nirmaan</div>
                </div>
                <div className="mt-10">
                        <div className="grid grid-cols-4 gap-5 px-10 mb-8">
                               <div className="border py-3">
                                    <img src={img5} alt='' className="flex justify-center items-center mx-auto rounded-sm h-30 w-40 object-cover mb-4 hover:rounded-full transition-all duration-500" />  
                                    <h3 className="text-md font-semibold text-green-600 text-center">Dr. Satyanarayanan S</h3>   
                                    <p className="text-sm text-center">Co-Founder</p>      
                                    <p className="text-sm text-center font-semibold text-gray-500">Shakti</p>                                                
                               </div>
                               <div className="border py-3">
                                    <img src={img1} alt='' className="flex justify-center items-center mx-auto rounded-sm h-30 w-40 object-cover mb-4 hover:rounded-full transition-all duration-500" />  
                                    <h3 className="text-md font-semibold text-green-600 text-center">Prof. Prabhu Rajagopal</h3>   
                                    <p className="text-sm text-center">Advisor</p>      
                                    <p className="text-sm text-center font-semibold text-gray-500">Drop WaterTech</p>                                                
                               </div>
                               <div className="border py-3">
                                    <img src={img7} alt='' className="flex justify-center items-center mx-auto rounded-sm h-30 w-40 object-cover mb-4 hover:rounded-full transition-all duration-500" />  
                                    <h3 className="text-md font-semibold text-green-600 text-center">Prof. Parasuraman Swaminathan</h3>   
                                    <p className="text-sm text-center">Advisor</p>      
                                    <p className="text-sm text-center font-semibold text-gray-500">Uniscreen Solutions</p>                                                
                               </div>
                               <div className="border py-3">
                                    <img src={img8} alt='' className="flex justify-center items-center mx-auto rounded-sm h-30 w-40 object-cover mb-4 hover:rounded-full transition-all duration-500" />  
                                    <h3 className="text-md font-semibold text-green-600 text-center">Dr. Tiju Thomas</h3>   
                                    <p className="text-sm text-center">Advisor</p>      
                                    <p className="text-sm text-center font-semibold text-gray-500">Pestokart</p>                                                
                               </div>
                               <div className="border py-3">
                                    <img src={img2} alt='' className="flex justify-center items-center mx-auto rounded-sm h-[144px] w-[144px] object-cover mb-4 hover:rounded-full transition-all duration-500" />  
                                    <h3 className="text-md font-semibold text-green-600 text-center">Dr. Sivasrinivasu Devadula</h3>   
                                    <p className="text-sm text-center">Co-Founder & Advisor</p>      
                                    <p className="text-sm text-center font-semibold text-gray-500">MachIntell</p>                                                
                               </div>
                               <div className="border py-3">
                                    <img src={img3} alt='' className="flex justify-center items-center mx-auto rounded-sm h-[144px] w-[144px] object-cover mb-4 hover:rounded-full transition-all duration-500" />  
                                    <h3 className="text-md font-semibold text-green-600 text-center">Prof. Krishnan Balasubramaniam</h3>   
                                    <p className="text-sm text-center">Mentor & Advisor</p>      
                                    <p className="text-sm text-center font-semibold text-gray-500">iGenie</p>                                                
                               </div>
                               <div className="border py-3">
                                    <img src={img9} alt='' className="flex justify-center items-center mx-auto rounded-sm h-[144px] w-[144px] object-cover mb-4 hover:rounded-full transition-all duration-500" />  
                                    <h3 className="text-md font-semibold text-green-600 text-center">Prof. Shyama Prasad das</h3>   
                                    <p className="text-sm text-center">Advisor</p>      
                                    <p className="text-sm text-center font-semibold text-gray-500">Renerzies</p>                                                
                               </div>
                               <div className="border py-3">
                                    <img src={img10} alt='' className="flex justify-center items-center mx-auto rounded-sm h-[144px] w-[144px] object-cover mb-4 hover:rounded-full transition-all duration-500" />  
                                    <h3 className="text-md font-semibold text-green-600 text-center">Prof. Dhiman Chatterjee</h3>   
                                    <p className="text-sm text-center">Advisor</p>      
                                    <p className="text-sm text-center font-semibold text-gray-500">Renerzies</p>                                                
                               </div>
                               <div className="border py-3">
                                    <img src={img4} alt='' className="flex justify-center items-center mx-auto rounded-sm h-[144px] w-[144px] object-cover mb-4 hover:rounded-full transition-all duration-500 object-top" />  
                                    <h3 className="text-md font-semibold text-green-600 text-center">Dr. Satyesh Kumar Yadav</h3>   
                                    <p className="text-sm text-center">Co-Founder</p>      
                                    <p className="text-sm text-center font-semibold text-gray-500">MatLoad Solutions</p>                                                
                               </div>
                               <div className="border py-3">
                                    <img src={img6} alt='' className="flex justify-center items-center mx-auto rounded-sm h-[144px] w-[144px] object-cover mb-4 hover:rounded-full transition-all duration-500 object-top" />  
                                    <h3 className="text-md font-semibold text-green-600 text-center">Prof. Indumathi Manivannan Nambi</h3>   
                                    <p className="text-sm text-center">Advisor</p>      
                                    <p className="text-sm text-center font-semibold text-gray-500">EcoFarm</p>                                                
                               </div>
                               <div className="border py-3">
                                    <img src={img13} alt='' className="flex justify-center items-center mx-auto rounded-sm h-[144px] w-[144px] object-cover mb-4 hover:rounded-full transition-all duration-500 object-top" />  
                                    <h3 className="text-md font-semibold text-green-600 text-center">Prof. Sathiya N. Gummadi</h3>   
                                    <p className="text-sm text-center">Co-Founder</p>      
                                    <p className="text-sm text-center font-semibold text-gray-500">SSS Internation Drug Discovery & Development Research Pvt Ltd</p>                                                
                               </div>
                               <div className="border py-3">
                                    <img src={img12} alt='' className="flex justify-center items-center mx-auto rounded-sm h-[144px] w-[144px] object-cover mb-4 hover:rounded-full transition-all duration-500 object-top" />  
                                    <h3 className="text-md font-semibold text-green-600 text-center">Prof. P. Ramkumar</h3>   
                                    <p className="text-sm text-center">Advisor</p>      
                                    <p className="text-sm text-center font-semibold text-gray-500">Bhaskara Engineering Services</p>                                                
                               </div>
                               <div className="border py-3">
                                    <img src={img14} alt='' className="flex justify-center items-center mx-auto rounded-sm h-30 w-40 object-cover mb-4 hover:rounded-full transition-all duration-500" />  
                                    <h3 className="text-md font-semibold text-green-600 text-center">Dr. Sanjib Senapati</h3>   
                                    <p className="text-sm text-center">Advisor</p>      
                                    <p className="text-sm text-center font-semibold text-gray-500">Proidesol</p>                                                
                               </div>
                               <div className="border py-3">
                                    <img src={img11} alt='' className="flex justify-center items-center mx-auto rounded-sm h-[144px] w-[144px] object-cover mb-4 hover:rounded-full transition-all duration-500" />  
                                    <h3 className="text-md font-semibold text-green-600 text-center">Dr. Vidya Praveen Bhallamudi</h3>   
                                    <p className="text-sm text-center">Advisor</p>      
                                    <p className="text-sm text-center font-semibold text-gray-500">OptoMag Diagnostics</p>                                                
                               </div>
                               <div className="border py-3">
                                    <img src={img15} alt='' className="flex justify-center items-center mx-auto rounded-sm h-[144px] w-[144px] object-cover mb-4 hover:rounded-full transition-all duration-500" />  
                                    <h3 className="text-md font-semibold text-green-600 text-center">Prof. Abdus Samad</h3>   
                                    <p className="text-sm text-center">Co-Founder</p>      
                                    <p className="text-sm text-center font-semibold text-gray-500">Tarang</p>                                                
                               </div>
                        </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Mentor;