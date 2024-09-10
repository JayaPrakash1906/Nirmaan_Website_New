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
import Footer from '../Components/Footer';

const Team = () => {
  const teamMembers = [
    {
      name: "Dr. Boby George",
      title: "Professor,",
      organisation: 'IIT Madras',
      image: img2
    },
    {
      name: "Dr. Satyanarayanan Seshadri",
      title: "Associate Professor,",
      organisation: 'IIT Madras',
      image: img3,
    },
    {
      name: "Dr. Tamaswati Ghosh",
      title: "Chief Executive Officer,",
      organisation: 'IITM Incubation Cell',
      image: img4
    },
    {
      name: "Chirag Gupta",
      title: "Managing Partner,",
      organisation: ' 8X Ventures',
      image: img5
    },
    {
      name: "Member 5",
      title: "Role and Organization",
      organisation: ' 8X Ventures',
      image: img6,
    },
    {
      name: "Dr. Prabhu Rajagopal",
      title: "Professor & Faculty Advisor",
      organisation: ' 8X Ventures',
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
      <h2 className='text-center text-2xl mt-2 mb-4 text-dmsans font-bold'>Advisory Board Members</h2>
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
        <h2 className='text-center text-2xl mt-1 mb-3 text-dmsans font-bold'>Executive Team</h2>

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
              <p className="text-gray-600">{member.title}</p>
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
    
        <div className='text-center font-roboto text-2xl font-bold mt-32 '>What we do?</div>        
        <div className='text-dmsans text-md mt-4 text-justify mr-16 ml-16 mb-6'>
Nirmaan started its journey on 31st October, 2015, funded by the IITM batch of 1992. At Nirmaan, we are dedicated to delivering a rich entrepreneurial experience to our students, by providing a range of vital resources, including workspace, cutting-edge tools, expert mentorship, interactive workshops, funding opportunities, and valuable networking connections. 
Our goal
With a commitment of “Bringing Ideas to Life” our goal is to empower students to go beyond traditional career routes and cultivate their innovative ideas into thriving businesses. Through our strategic collaboration with the IITM Research Park's Incubation Cell, we create a seamless pipeline that connects students with real-world entrepreneurial resources and support, helping them turn their visions into viable enterprises. 
Our mission and vision
Vision: To catalyze entrepreneurship culture and develop a strong ecosystem to transform creative ideas into successful startups in India.
Mission: To provide infrastructure, mentorship, funding, workspace, workshops, and network to IITM students to help them turn their creative ideas into viable enterprises. 
Our Programs
Nirmaan is currently offering two programs for aspiring entrepreneurs; Pratham and Akshar. The Pratham program, named after the Sanskrit word for "first," offers an 8-week immersive training experience designed to equip aspiring entrepreneurs with the foundational knowledge and skills necessary for start-up success. This phase covers essential start-up principles, helping participants to understand start-up basics and nuances. 
At the conclusion of the Pratham phase, teams that excel will advance to the Akshar phase. In this subsequent phase, participants will focus on developing their Minimum Viable Product (MVP) while delving into advanced business concepts such as pricing strategies, sales tactics, and marketing techniques.
In both the Pratham and Akshar phases, Nirmaan fuels the entrepreneurial journey of the student teams with funding, empowering them to cover expenses and craft their first Minimum Viable Products.<br/>
        </div>  
        
    </div>
    <Team/>
    <Footer/>
    </div>
  )
}

export default Aboutus