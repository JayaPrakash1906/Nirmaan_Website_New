import React from 'react';
import { FaUniversity, FaLightbulb, FaUsers, FaBuilding, FaTools, FaChalkboardTeacher, FaGlobe, FaChalkboard } from 'react-icons/fa'; 
import { FaMoneyBillTransfer } from 'react-icons/fa6';
const Eligibility = () => {
  return (
    <section className="mb-12 rounded-lg shadow-lg p-8" style={{backgroundColor: '#83d687'}}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6 text-center transform transition-transform hover:scale-105">
          <div className="mb-4">
            <FaBuilding size={40} className="text-green-600 mx-auto" />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Workspace</h3>
          <p className="text-gray-600">Nirmaan provides a workplace to interact, collaborate, and innovate; at the Sudha & Shankar Innovation Hub.</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center transform transition-transform hover:scale-105">
          <div className="mb-4">
            <FaTools size={40} className="text-green-600 mx-auto" />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Tools & Resources</h3>
          <p className="text-gray-600">At Nirmaan, you will find an extensive array of resources within our workspace, featuring advanced machining tools, sophisticated characterization equipment, and top-tier computing facilities.</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center transform transition-transform hover:scale-105">
          <div className="mb-4">
            <FaChalkboardTeacher size={40} className="text-green-600 mx-auto" />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Mentorship</h3>
          <p className="text-gray-600">Sector-specific mentors provide tailored guidance, helping student entrepreneurs  navigate problem identification, validate their ideas, and uncover customer insights.</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center transform transition-transform hover:scale-105">
          <div className="mb-4">
            <FaMoneyBillTransfer size={40} className="text-green-600 mx-auto" />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Funding</h3>
          <p className="text-gray-600">Nirmaan student teams receive INR.2 lakhs during Pratham phase and INR.5 lakhs during Akshar phase to manage their expenses and to build their first MVP.</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center transform transition-transform hover:scale-105">
          <div className="mb-4">
            <FaGlobe size={40} className="text-green-600 mx-auto" />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Networking</h3>
          <p className="text-gray-600"> Student teams have the opportunity to engage with a diverse array of industry experts and IITM alumni, allowing them to discuss and refine their startup ideas.</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center transform transition-transform hover:scale-105">
          <div className="mb-4">
            <FaChalkboard size={40} className="text-green-600 mx-auto" />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Workshops</h3>
          <p className="text-gray-600">Seasoned professionals and industry experts lead immersive workshops covering vital startup topics such as customer discovery, lean startup principles, business model canvas, pitching techniques, and design thinking.</p>
        </div>
      </div>
    </section>
  );
};

export default Eligibility;