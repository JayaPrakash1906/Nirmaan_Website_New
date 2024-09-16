import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import axios from "axios";
import Footer from "../Components/Footer";
import Popover from "../Components/Popover";
import { FaLinkedin } from "react-icons/fa6";
import { FaArrowAltCircleRight } from "react-icons/fa";
function Teams() {
    const [data, setData] = useState([]);
    const [selectedTeam, setSelectedTeam] = useState(null); 
    const [openEstablishPopUp, setOpenEstablishPopUp] = useState(false);
    const handleEstablish = (team) => {
        setSelectedTeam(team);
        setOpenEstablishPopUp(true);
    }
    const url = 'https://nirmaan.iitm.ac.in:8000/api/images/'
    const fetchTeamsData = async () => {
        try {
            const result = await axios.get('https://nirmaan.iitm.ac.in:8000/api/projects');
            setData(result.data); // Fix the state update to use result.data
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        fetchTeamsData();
    }, []);

    return (
        <div>
            <Navbar />
            <div className="mt-[88px]">
                <div className="bg-green-100">
                        <div className="p-5 flex"><span><a href="/" className="text-gray-500 font-semibold hover:underline">Home</a></span> <span className="p-2 text-gray-500"><FaArrowAltCircleRight size={12}/></span> <span className="text-black font-semibold">Teams</span></div>
                        <h2 className="md:text-5xl font-semibold text-gray-500 pt-8 pb-10 text-center sm:text-3xl">All Startups</h2>
                </div>                
                <div className="grid grid-cols-4 gap-10 mt-10 px-10">
                    {data.map((item, index) => (
                        <div>
                            <div key={index} className="flex flex-col justify-center items-center p-4" onClick={() => handleEstablish(item)}>
                                    <img src={url+item.profile_photo || "default-image.png"} alt={item.name} className="w-[90px] h-[70px]" /><br></br>
                                    <div className="pt-5">{item.project_name || "No Name"}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
            <Popover  isVisible={openEstablishPopUp} onClose={()=>setOpenEstablishPopUp(false)}>
                {selectedTeam && (
                    <Popover isVisible={openEstablishPopUp} onClose={() => setOpenEstablishPopUp(false)}>
                        <div>
                            <div className="flex gap-10">
                                <div><h2 className="text-2xl font-bold mb-4 mt-2">{selectedTeam.project_name}</h2></div>
                                <div><img src={url + selectedTeam.profile_photo || "default-image.png"} alt={selectedTeam.name} className="w-[50px] h-auto" /></div>
                            </div>
                            <div className="grid grid-cols-2">
                                    <div className="font-semibold">Founder: {selectedTeam.members_name || "-"}</div>
                                    <div className="md:ms-[220px]">
                                            <p className="mt-2"><strong>Stage:</strong> {selectedTeam.start_up_name || "No team lead"}</p>
                                            <p className="mt-2"><strong>Cohort:</strong> {selectedTeam.incubation_year || "Unknown"}</p>
                                    </div>
                            </div>
                            <p className="mt-4"><strong>Description:</strong> {selectedTeam.description || "No description available"}</p>
                            <p className=" flex mt-2"><strong className="mt-[2px;]">Social Media:</strong><a href={selectedTeam.members_linkedin || "No description available"} className="m-[5px] text-green-600"><FaLinkedin  size={20}/></a></p>
                        </div>
                    </Popover>
                )}
            </Popover>
        </div>
    );
}

export default Teams;
