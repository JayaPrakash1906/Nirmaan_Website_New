import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import axios from "axios";
import Footer from "../Components/Footer";

function Teams() {
    const [data, setData] = useState([]);
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
            <div className="mt-[130px] font-dmsans">
                <h2 className="text-center text-3xl font-semibold">All Startups</h2>
                <div className="grid grid-cols-4 gap-10 mt-10 px-10">
                    {data.map((item, index) => (
                        <div>
                            <div key={index} className="flex flex-col justify-center items-center p-4">
                                    <img src={url+item.profile_photo || "default-image.png"} alt={item.name} className="w-[100px] h-[70px]" /><br></br>
                                    <div className="pt-5">{item.project_name || "No Name"}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Teams;
