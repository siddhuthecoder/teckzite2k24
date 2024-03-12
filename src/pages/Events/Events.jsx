import ETWSCard from "../../components/Shared/ETWSCard";
import Style from "./Events.module.css";
import { useState } from 'react'
import Header from '../../components/Header/Header'
import EventsBanner from "./EventsBanner";
import '../../css/events.css'
import useSound from "use-sound";
const Events = () => {
  const [tab, setTab] = useState("ALL")
  const [play] = useSound("./click.wav");
  return (
    <main>
      <Header />
      <EventsBanner />
      <div className="w-100 flex flex-col h-[100vh] overflow-y-scroll sticky pt-[10%]  " >
        <div className="w-full flex items-center justify-center flex-wrap  " >
          <button className={`tab  w-[100px] h-[30px] mx-[10px] mt-[12px] ${tab == "ALL" ? "active-tab" : ""}`} onClick={() => { setTab("ALL"); play() }}>ALL</button>
          <button className={`tab  w-[100px] h-[30px] mx-[10px] mt-[12px] ${tab == "CSE" ? "active-tab" : ""}`} onClick={() => { setTab("CSE"); play() }}>CSE</button>
          <button className={`tab  w-[100px] h-[30px] mx-[10px] mt-[12px] ${tab == "ECE" ? "active-tab" : ""}`} onClick={() => { setTab("ECE"); play() }}>ECE</button>
          <button className={`tab  w-[100px] h-[30px] mx-[10px] mt-[12px] ${tab == "MME" ? "active-tab" : ""}`} onClick={() => { setTab("MME"); play() }}>MME</button>
          <button className={`tab  w-[100px] h-[30px] mx-[10px] mt-[12px] ${tab == "MECH" ? "active-tab" : ""}`} onClick={() => { setTab("MECH"); play() }}>MECH</button>
          <button className={`tab  w-[100px] h-[30px] mx-[10px] mt-[12px] ${tab == "CHEM" ? "active-tab" : ""}`} onClick={() => { setTab("CHEM"); play() }}>CHEM</button>
          <button className={`tab  w-[100px] h-[30px] mx-[10px] mt-[12px] ${tab == "CIVIL" ? "active-tab" : ""}`} onClick={() => { setTab("CIVIL"); play() }}>CIVIL</button>
        </div>
        <div className="w-full  "  >
          {tab == "ALL" && (
            <>
              <div className="w-full flex items-center justify-around gap-4 flex-wrap"  >
                <ETWSCard className="mx-4" />
                <ETWSCard className="mx-4" />
                <ETWSCard className="mx-4" />

              </div>
            </>
          )}
        </div>
      </div>
    </main>
  );
};

export default Events;
