import React from 'react'
import Navbar from '../Components/Navbar'
import img1 from '../Assets/download (1).jpg';
import img2 from '../Assets/BobyGeorge.jpg';
import img3 from '../Assets/satyaseshadri.png';
import img4 from '../Assets/u3ryrzl7506qix6ydqph.webp';
import img5 from '../Assets/chirag.png';
import img6 from '../Assets/Prajagopal.jpeg';
import img7 from '../Assets/Nandhini.jpeg';
import img8 from '../Assets/student.jpeg';
import img9 from '../Assets/vishy.jpg'
import Footer from '../Components/Footer';
import { FaLightbulb, FaNetworkWired, FaHandsHelping, FaChartLine, FaArrowAltCircleRight } from 'react-icons/fa';
const Team = () => {
  const teamMembers = [
    {
      name: "Dr. Boby George",
      title: "Professor",
      organisation: 'IIT Madras',
      image: img2
    },
    {
      name: "Dr. Satyanarayanan Seshadri",
      title: "Associate Professor",
      organisation: 'IIT Madras',
      image: img3,
    },
    {
      name: "Dr. Tamaswati Ghosh",
      title: "Chief Executive Officer",
      organisation: 'IITM Incubation Cell',
      image: img4
    },
    {
      name: "Mr. Chirag Gupta",
      title: "Managing Partner",
      organisation: ' 8X Ventures',
      image: img5
    },
    {
      name: "Mr. Srinivasan Viswanathan ",
      title: "Co-Founder",
      organisation:'Ultimate Business Advisors LLP',
      image: img9,
    },
    {
      name: "Dr. Prabhu Rajagopal",
      title: "Faculty Advisor",
      organisation: 'Office of Innovation & Entrepreneurship ',
      image: img6,
    },
    {
      name: "Nandhini K S",
      title: `Manager`,
      organisation: 'Office of Innovation & Entrepreneurship',
      image: img7
    },
    {
      name: "Yuvraj Thakur",
      title: "Student Executive Head",
      organisation: 'Nirmaan',
      image: img8
    }
  ];

  return (
    <div className="bg-gray-200 py-8 px-4">
      <h2 className='text-center text-2xl mt-2 mb-4 text-dmsans font-bold text-green-600'>Advisory Board Members</h2>
      <div className="max-w-7xl mx-auto space-y-8">
        {/* First row with 4 members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
          
              {teamMembers.slice(0, 5).map((member, index) => (
                <div key={index} className="text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="mx-auto w-40 h-40 rounded-full object-cover mb-4"
                  />
                  <h3 className="text-md font-semibold text-green-600">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 font-semibold">{member.title}</p>
                  <p className="text-gray-600">{member.organisation}</p>
                </div>
              ))}
        </div>


        {/* Second row with 3 members */}
        <h2 className='text-center text-2xl mt-1 mb-3 text-dmsans font-bold text-green-600'>Executive Team</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-14">
          {teamMembers.slice(5, 8).map((member, index) => (
            <div key={index} className="text-center">
              <img
                src={member.image}
                alt={member.name}
                className="mx-auto w-40 h-40 rounded-full object-cover mb-4 object-top"
              />
              <h3 className="text-xl font-semibold text-green-600">
                {member.name}
              </h3>
              <p className="text-gray-600 font-semibold">{member.title}</p>
              <p className="text-gray-600">{member.organisation}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Aboutus = () => {
  return (
    <div>
        <Navbar/>
    <div >
    
         
        

    <div className="mt-[88px] font-dmsans">
                <div className="bg-green-100">
                        <div className="p-5 flex"><span><a href="/" className="text-gray-500 font-semibold hover:underline">Home</a></span> <span className="p-2 text-gray-500"><FaArrowAltCircleRight size={12}/></span> <span className="text-black font-semibold">About</span></div>
                        <h2 className="text-5xl font-semibold text-green-600  text-center pt-8 pb-2 ">About Us</h2>
                        {/* <div className="text-center pt-3 pb-3"> Nirmaan </div> */}
                </div>
      <div className="max-w-7xl mx-auto mt-10">
        {/* Section Header with Gradient */}
        

        {/* What We Do Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-green-600 text-center font-dmsans">
            What We Do
          </h3>
          <p className="mt-4 text-md text-gray-600 max-w-3xl mx-auto text-center font-dmsans">
            Nirmaan, the pre-incubator, started its journey on 31st October 2015, funded by the IITM batch of 1992. At Nirmaan, we are dedicated to delivering a rich entrepreneurial experience to our students by providing essential resources such as workspace, cutting-edge tools, expert mentorship, interactive workshops, funding opportunities, and valuable networking connections.
          </p>
        </div>

        {/* Our Goal Section */}
        <div className="mt-16">
          
          <h3 className="text-2xl font-bold text-green-600 text-center font-dmsans">
            Our Goal
          </h3>
          <p className="mt-4 text-md text-gray-900 max-w-3xl mx-auto text-center font-dmsans">
            With a commitment to “Bringing Ideas to Life,” our goal is to empower students to go beyond traditional career routes and cultivate their innovative ideas into thriving businesses. Through strategic collaboration with the IITM Research Park's Incubation Cell, we connect students with real-world entrepreneurial resources and support to help them turn their visions into viable enterprises.
          </p>
        </div>

        

        {/* Mission and Vision Section */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 px-20 mb-10">
          {/* Vision */}
          <div className="relative bg-green-50 p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105">
            <h4 className="text-md font-bold text-green-600 mb-4 font-dmsans">Vision</h4>
            <p className="text-gray-700 font-dmsans">
              Catalyzing entrepreneurship culture by developing a strong ecosystem that transforms creative ideas into successful startups in India.
            </p>
          </div>

          {/* Mission */}
          <div className="relative bg-green-50 p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105">
            <h4 className="text-md font-bold text-green-600 mb-4">Mission</h4>
            <p className="text-gray-700">
              Providing infrastructure, mentorship, funding, and workspace to help IITM students turn their innovative ideas into thriving enterprises.
            </p>
          </div>
        </div>

        
      </div>
    </div></div>
    
    <Team/>
    <Footer/>
    </div>
  )
}

export default Aboutus