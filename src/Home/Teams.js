import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import axios from "axios";
function Teams(){

    const fetchTeamsData = async() => {
        try
        {
            const result = await axios.post('https://nirmaan.iitm.ac.in:8000/api/get-projects');
            console.log(result);      
        }
        catch(err)
        {
            console.log(err);
        }
    }
    useEffect(() =>{
        fetchTeamsData();
    }, [])
    return (
        <div>
            <Navbar />
            <div className="mt-[130px] font-dmsans">
                    <h2 className="text-center text-3xl font-semibold">All Startups</h2>
                    <div className="grid grid-cols-4 gap-10 mt-10 px-10">
                            <div className="flex justify-center items-center border">
                                <img src="sk" alt="" /><br></br>
                                <div>dijh</div>
                            </div>
                            <div className="flex justify-center items-center border">
                                    slkd
                            </div>
                            <div className="flex justify-center items-center border"> 
                                    slkd
                            </div>
                            <div className="flex justify-center items-center border">
                                    slkd
                            </div>
                            <div className="flex justify-center items-center border">
                                    slkd
                            </div>
                    </div>
            </div>
        </div>
    )
}
export default Teams;