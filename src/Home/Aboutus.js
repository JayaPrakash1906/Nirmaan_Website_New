import React from 'react'
import Navbar from '../Components/Navbar'
import img1 from '../Assets/download (1).jpg';
import img2 from '../Assets/Mam.jpeg';
import img3 from '../Assets/student.jpeg';
import Footer from '../Components/Footer';

const Team = () => {
  const teamMembers = [
    {
      name: "Suresh Bhagavatula",
      title: "Professor – Entrepreneurship, IIM Bangalore",
      image: "https://via.placeholder.com/200",
    },
    {
      name: "Member 5",
      title: "Role and Organization",
      image: "https://via.placeholder.com/200",
    },
    {
      name: "Rajiv Sawhney",
      title: "Ex-COO, NSRCEL, with extensive experience in telecom and consumer goods industries",
      image: "https://via.placeholder.com/200",
    },
    {
      name: "Malavika R Harita",
      title: "Founder and CEO, Brand Circle",
      image: "https://via.placeholder.com/200",
    },
    
   
    {
      name: "Member 5",
      title: "Role and Organization",
      image: img1,
    },
    {
      name: "Member 6",
      title: "Role and Organization",
      image: "https://via.placeholder.com/200",
    },
    {
      name: "Member 7",
      title: "Role and Organization",
      image: "https://via.placeholder.com/200",
    },
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
      <h3 className="text-xl font-semibold text-red-600">
        {member.name}
      </h3>
      <p className="text-gray-600">{member.title}</p>
    </div>
  ))}
</div>


        {/* Second row with 3 members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.slice(4).map((member, index) => (
            <div key={index} className="text-center">
              <img
                src={member.image}
                alt={member.name}
                className="mx-auto w-40 h-40 rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-red-600">
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
    
        <div className='text-center font-roboto text-2xl font-bold mt-32 '>Our Story</div>        
        <div className='text-dmsans text-md mt-4 text-justify mr-16 ml-16 mb-6'>Nirmaan started its journey on 31st October, 2015, funded by the IITM batch of 1992. At Nirmaan, we are dedicated to delivering a rich entrepreneurial experience to our students, by providing a range of vital resources, including workspace, cutting-edge tools, expert mentorship, interactive workshops, funding opportunities, and valuable networking connections. With a commitment of “Bringing Ideas to Life” our mission is to empower students to go beyond traditional career routes and cultivate their innovative ideas into thriving businesses. Through our strategic collaboration with the IITM Research Park's Incubation Cell, we create a seamless pipeline that connects students with real-world entrepreneurial resources and support, helping them turn their visions into viable enterprises. <br/>
Nirmaan is currently offering two programs for aspiring entrepreneurs; Pratham and Akshar. The Pratham program, named after the Sanskrit word for "first," offers an 8-week immersive training experience designed to equip aspiring entrepreneurs with the foundational knowledge and skills necessary for start-up success. This phase covers essential start-up principles, helping participants to understand start-up basics and nuances. <br/>
At the conclusion of the Pratham phase, teams that excel will advance to the Akshar phase. In this subsequent phase, participants will focus on developing their Minimum Viable Product (MVP) while delving into advanced business concepts such as pricing strategies, sales tactics, and marketing techniques.<br/>
In both the Pratham and Akshar phases, Nirmaan fuels the entrepreneurial journey of the student teams with funding, empowering them to cover expenses and craft their first Minimum Viable Products.  
</div>  
        
    </div>
    <Team/>
    <Footer/>
    </div>
  )
}

export default Aboutus