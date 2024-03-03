import React, { useState } from "react";
import FmdGoodIcon from '@mui/icons-material/FmdGood';

const EventDetailsCard = () => {
  const [navBar, setNavBar] = useState("description");

  return (
    <>
      <div className="border-x-2 w-[80%] m-auto">
        <div className="flex mt-[20px]">
          <h1 className="font-bold cursor-pointer text-2xl w-[25%]">Titile</h1>
          <nav className="flex justify-between w-[65%]">
            <h3 className={`cursor-pointer ${navBar=="description" ? "border-b-2" : ""}`} onClick={() => setNavBar("description")}>Description</h3>
            <h3 className={`cursor-pointer ${navBar=="judging" ? "border-b-2" : ""}`} onClick={() => setNavBar("judging")}>Judging Criteria</h3>
            <h3 className={`cursor-pointer ${navBar=="rules" ? "border-b-2" : ""}`} onClick={() => setNavBar("rules")}>Rules</h3>
            <h3 className={`cursor-pointer ${navBar=="contact" ? "border-b-2" : ""}`} onClick={() => setNavBar("contact")}>Contact</h3>
          </nav>
        </div>
        <div className="flex mt-[20px] w-[95%] m-auto">
          <img src="./sid.png" className="w-[20%] m-auto" />
          <div className="w-[80%]">
          {navBar == "description" ? (
            <div>Description</div>
          ) : navBar == "judging" ? (
            <div>Judging Criteria</div>
          ) : (
            navBar == "rules"?<div>Rules</div>:<div>Contact</div>
          )}
        </div>
        </div>
        <div className="flex justify-between w-[90%] m-auto mt-[30px]">
            <div className="flex items-center ml-[20px]">
                <FmdGoodIcon fontSize="medium" />
                <p className="text-xl font-semibold">Offline</p>
            </div>
            <div className="w-[150px] rotate-180 h-[50px] [clip-path:polygon(0_0,_100%_0,_84%_41%,_16%_41%)] mb-[20px] bg-slate-600">
                <p className="rotate-180 ">Register</p>
            </div>
            <div className="items-center text-center">
                <p className="font-semibold text-xl mt-[20px]">Prize Money</p>
            </div>
        </div>
      </div>
    </>
  );
};

export default EventDetailsCard;
