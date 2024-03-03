import React, { useState } from 'react'
import "./WebTeam.module.css"

const WebTeamCard = () => {
  const [isHover,setIsHover] = useState(false)
  return (
    <>
    <div className="h-[800px] w-[300px]" onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)}>
    <div className="flex h-[500px] relative w-[300px]">
        <div className={`absolute ${isHover ? "-translate-y-16" : "translate-y-16" } duration-[500ms] bottom-0 opacity-90 z-[-2] right-5 w-[150px] h-[250px] -skew-x-3 [clip-path:polygon(0_0,_0_100%,_100%_100%,_100%_25%,_75%_0)] bg-blue-500`}></div>
        <div className={`absolute ${isHover ? "-translate-y-16" : "translate-y-16" } duration-[450ms] bottom-0 opacity-60 z-[-3] right-16 w-[150px] h-[320px] -skew-x-3 [clip-path:polygon(0_0,_0_100%,_100%_100%,_100%_18%,_60%_0)] bg-blue-500`}></div>
        <div className={`absolute ${isHover ? "-translate-y-20" : "translate-y-12" } duration-[400ms] bottom-0 opacity-50 z-[-4] right-24 w-[150px] h-[270px] -skew-x-3 [clip-path:polygon(0_0,_0_100%,_100%_100%,_100%_20%,_65%_0)] bg-blue-500`}></div>
        <div className={`absolute ${isHover ? "-translate-y-16" : "translate-y-16" } duration-[200ms] bottom-0 z-[-5] opacity-85 right-44 w-[100px] h-[150px] -skew-x-3 [clip-path:polygon(0_0,_0_100%,_100%_100%,_100%_25%,_75%_0)] bg-blue-500`}></div>      
        <img src="./sid.png" className="absolute w-[50%] h-[50%] left-[25%] -bottom-7 z-[-1]" />
    </div>
    <div className="relative w-[300px] mt-[6px] h-[80px]">
        <div className="absolute bottom-0 -left-8 w-[20px] z-[-2] opacity-80 bg-slate-100 h-[60px] -skew-x-[17deg]"></div>
        <div className="absolute bottom-0 -left-14 w-[20px] z-[-2] bg-slate-500 h-[60px] -skew-x-[17deg]"></div>
        <div className="absolute bottom-6 -left-4 w-[180px] bg-white z-[-1] h-[50px] -skew-x-[25deg]"></div>
        <div className="absolute bottom-0 -left-1 w-[280px] bg-red-500 z-[0] h-[60px] text-center items-center -skew-x-[23deg]"><h3 className="w-[90%] font-bold m-auto mt-3 text-2xl skew-x-[23deg]">Name</h3></div>
        <div className="absolute -bottom-4 left-[30px] w-[190px] bg-slate-500 z-[1] h-[30px] -skew-x-[25deg]"><p className="font-semibold w-[90%] m-auto skew-x-[25deg]">Role</p></div>
    </div>
    </div>
</>
  )
}

export default WebTeamCard