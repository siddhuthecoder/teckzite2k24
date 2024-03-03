import React, { useRef, useState } from 'react'

const EventsCards = () => {
  const [isHover,setIsHover] = useState(false)
  return (
    <div className="relative mt-5 w-64 cursor-pointer" onMouseLeave={()=>{setIsHover(false)}}>
    <img src="./events_card.png" width="100%" onMouseEnter={()=>setIsHover(true)} className={`bg-[url("./sid.png")] overflow-clip`} />
    <div className="absolute bottom-12 w-full text-left">
        <h2 className="font-bold text-2xl w-[88%] m-auto">eventname</h2>
        <p className="text-base w-[88%] m-auto">about event</p>
        <div className="relative min-h-[30px] text-center flex w-full">
            <button className={`absolute border-2 p-1 rounded-xl hover:bg-[#1f22e4] border-[#4c4ff4] left-8 ${isHover?"visible -bottom-5 ease-in duration-200":"hidden -bottom-6"} `}>Button 1</button>
            <button className={`absolute border-2 p-1 rounded-xl hover:bg-[#1f22e4] border-[#4c4ff4] right-9 ${isHover?"visible -bottom-5 ease-in duration-200":"hidden -bottom-6"}`}> Button 2 </button>
        </div>
    </div>
    </div>
  )
}

export default EventsCards