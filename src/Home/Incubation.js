import React from "react";
import Navbar from "../Components/Navbar";


function Incubation(){
    return (
        <div>
            <Navbar />

            <div className="mt-[100px]">
                   <div className="text-center font-semibold">Stages of Pre-Incubation</div>

                   <div className="grid grid-cols-5 gap-10 px-10 mt-10">
                        <div className="border">
                            <div className="grid grid-cols-2"> 
                                    <div></div>
                                    <div></div>
                            </div>
                        </div>
                        <div className="border">skfh</div>
                        <div className="border">skfh</div>
                        <div className="border">skfh</div>
                        <div className="border">skfh</div>
                   </div>
            </div>
        </div>
    )
}
export default Incubation;