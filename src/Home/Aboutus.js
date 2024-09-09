import React from 'react'
import Navbar from '../Components/Navbar About'
import img1 from '../Assets/Prajagopal.jpeg';
import img2 from '../Assets/Mam.jpeg';
import img3 from '../Assets/student.jpeg';

const Aboutus = () => {
  return (
    <div>
        <Navbar/>
    <div>
    <div className="p-4 max-w-xl mx-auto  space-y-10  mt-16">
            <div className="text-center">
              <h1 className="text-2xl font-bold font-lora">
                The{" "}
                <span className="text-green-500">
                  1<sup>st</sup> Pre-Incubator
                </span>{" "}
                On A College Campus In India
              </h1>
              <p className="mt-4 text-gray-600 font-dmsans text-justify mb-10">
              Nirmaan started its journey on 31st October, 2015, funded by the IITM batch of 1992. 
              At Nirmaan, we are dedicated to delivering a rich entrepreneurial experience to our students,
               by providing a range of vital resources, including workspace, cutting-edge tools, expert mentorship,
                interactive workshops, funding opportunities, and valuable networking connections. 
                Our mission is to empower students to go beyond traditional career routes and cultivate their
                 innovative ideas into thriving businesses. Through our strategic collaboration with the 
                 IITM Research Park's Incubation Cell, we create a seamless pipeline that connects students with 
                 real-world entrepreneurial resources and support, helping them turn their visions into viable enterprises. 
                Nirmaan is currently offering two programs for aspiring entrepreneurs; Pratham and Akshar.
                 The Pratham program, named after the Sanskrit word for "first," offers an 8-week immersive training experience 
                 designed to equip aspiring entrepreneurs with the foundational knowledge and skills necessary for start-up success. This phase covers essential start-up principles, helping participants to understand start-up basics and nuances. 

              </p>
              
              
              <div><p className="mt-4 text-gray-600 font-dmsans text-justify ">
              At the conclusion of the Pratham phase, teams that excel will advance to the Akshar phase.
               In this subsequent phase, participants will focus on developing their Minimum Viable Product (MVP) 
               while delving into advanced business concepts such as pricing strategies, sales tactics, and marketing 
               techniques
              </p></div>
                <div>
                <p className="mt-9 text-gray-600 font-dmsans text-justify ">
                In both the Pratham and Akshar phases, Nirmaan fuels the entrepreneurial journey of the student teams with funding, empowering them to cover expenses and craft their first Minimum Viable Products. 
                </p>
                </div>
                      <div>
                        <h1 className='text-2xl font-bold font-lora text-left mb-6 mt-4'>
                          Message from Director
                        </h1>
                      </div>
                      <div>
                        <h1 className='text-2xl font-bold font-lora text-left mb-6'>
                          Message from Faculty Advisor
                        </h1>
                      </div>
                      <div>
                        <h1 className='text-2xl font-bold font-lora text-left mb-6'>
                          Message from Manager
                        </h1>
                      </div>
                      <div>
                        <h1 className='text-2xl font-bold font-lora text-left mb-6'>
                          What is UGFIR PGFIR ?
                        </h1>
                      </div>
                      <div>
                      <div class="grid grid-cols-3 gap-4">
                            <div className="p-6 max-w-xl mx-auto bg-white rounded-xl space-y-4 bg-gray-50 mt-10 font-semibold">
                              <img src={img1} /> Advisor
                            </div>
                            <div className="p-6 max-w-xl mx-auto bg-white rounded-xl space-y-4 bg-gray-50 mt-10 font-semibold">
                              <img src={img2} className='height: 987 px width: 721 px' /> Manager
                            </div>
                            <div className="p-6 max-w-xl mx-auto bg-white rounded-xl space-y-4 bg-gray-50 mt-10 font-semibold">
                              <img src={img3} className='height: 987 px width: 721 px' /> Student Head 
                            </div>
                      </div>
                      </div>
              </div>
          </div>
        
    </div>
    
    
    </div>
  )
}

export default Aboutus