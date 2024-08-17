import React from 'react'
import Navbar from '../Components/Navbar About'
import img1 from '../Assest/Prajagopal.jpeg';
import img2 from '../Assest/Mam.jpeg';
import img3 from '../Assest/student.jpeg';

const Aboutus = () => {
  return (
    <div>
        <Navbar/>
    <div>
    <div className="p-4 max-w-xl mx-auto  space-y-4  mt-16">
            <div className="text-center">
              <h1 className="text-2xl font-bold font-lora">
                The{" "}
                <span className="text-green-500">
                  1<sup>st</sup> Pre-Incubator
                </span>{" "}
                On A College Campus In India
              </h1>
              <p className="mt-4 text-gray-600 font-dmsans text-justify mb-10">
                Nirmaan, The Pre-incubator of IIT Madras, is the first of its kind dedicated
                pre-incubator on a college campus in the country.It provides technical support 
                and business guidance/mentorship to enterprising student teamsto work on their
                business ideas and make them technically sound and economically viable.
              </p>
              
              
              <div><p className="mt-4 text-gray-600 font-dmsans text-justify ">
                Besides providing a well-equipped, collabrative workspace, supportive and encouraging 
                environment, and much-needed financial assistance, 'The Pre-incubator' connects fledgling
                startups with expirenced mentors, who provide specialized technical and business guidance 
                that is immensely valuable in transforming ideas into practical businesses.Nirmaan's Executive body 
                has an effective mix of faculty, staff and student representatives and has successfully driven this program 
                to its program to its present state.Nirmaan ensures quality right from the selection of ideas for 
                incubation till it's graduation as a startup.
              </p></div>
                <div>
                <p className="mt-9 text-gray-600 font-dmsans text-justify ">
                    Nirmaan startups have successfully attracted angel and VC funding from multiple organizations.
                    Since its inception in october 2015,Nirmaan has selected and mentored over 140 start-up teams of 
                    which serveral have gone on to becomesucessful businesses.At Nirmaan, students are encouraged and 
                    supported to work in different sectors like Ed-tech,Agri-tech and Fin-tech.In all,Nirmaan has 24 startups 
                    that have graduated, and 90 active startups at the 'Sudha Shankar Innovation Hub'.
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
                            <div className="p-6 max-w-xl mx-auto bg-white rounded-xl space-y-4 bg-gray-50 mt-10">
                              <img src={img1} /> Advisor
                            </div>
                            <div className="p-6 max-w-xl mx-auto bg-white rounded-xl space-y-4 bg-gray-50 mt-10">
                              <img src={img2} className='height: 987 px width: 721 px' /> Manager
                            </div>
                            <div className="p-6 max-w-xl mx-auto bg-white rounded-xl space-y-4 bg-gray-50 mt-10">
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