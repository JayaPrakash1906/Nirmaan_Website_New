import React from 'react';
import { FaUniversity, FaLightbulb, FaUsers } from 'react-icons/fa'; 
const Eligibility = () => {
  return (
    <section className="mb-12 rounded-lg shadow-lg p-8" style={{backgroundColor: '#83d687'}}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6 text-center transform transition-transform hover:scale-105">
          <div className="mb-4">
            <FaUniversity size={40} className="text-green-600 mx-auto" />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Recognized Institutions</h3>
          <p className="text-gray-600">Open to student teams from recognized institutions.</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center transform transition-transform hover:scale-105">
          <div className="mb-4">
            <FaLightbulb size={40} className="text-green-600 mx-auto" />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Innovative Business Idea</h3>
          <p className="text-gray-600">Teams should have an innovative business idea.</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center transform transition-transform hover:scale-105">
          <div className="mb-4">
            <FaUsers size={40} className="text-green-600 mx-auto" />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Team Size</h3>
          <p className="text-gray-600">A minimum of 2 and a maximum of 5 members in each team.</p>
        </div>
      </div>
    </section>
  );
};

export default Eligibility;