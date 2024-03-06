import { Routes, Route } from "react-router-dom";
import "./App.css";
import {
  CoreTeam,
  Events,
  Home,
  WebTeam,
  Workshops,
  // Events,
  // Workshops,
  // EventUpdates,
  // WorkshopsDetails,
  // EventDetails,
  // Profile,
  // Referrals,
  // Register,
  // CoreTeam,
  // WebTeam,
  // Speakers,
  // Sponsors,
  // Schedule,
  // About,
} from "./pages";
// import { NavBar, Footer } from "./components";
// import { useEffect, useRef, useState } from "react";
import AnimatedCursor from "react-animated-cursor";
function App() {
  // const [count, setCount] = useState(0)
  // const vidRef = useRef(null);
  // const [isPlaying, setIsPlaying] = useState(false);

  // useEffect(() => {
  //   setIsPlaying(true);
  // }, []);
  return (
    <>
      {/* <div className="fixed top-0 left-0 w-screen h-screen z-[-1]">
  <video ref={vidRef} autoPlay muted loop className="object-cover">
    <source src="./test.mov" />
    Your browser does not support the video tag.
  </video>
</div>
  {isPlaying && <>
    <h1 className="text-3xl text-blue-800 a font-serif font-bold underline">
      Hi this is siddhu from srikakulam💙💘
    </h1>
      <NavBar />
      <Home/>
      <Footer />
  </>} */}

      {/* <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        showSystemCursor={true}
        innerStyle={{
          backgroundColor: "red",
        }}
        outerStyle={{
          border: "3px solid red",
        }}
      /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/workshops" element={<Workshops />} />
        <Route path="/coreteam" element={<CoreTeam />} />
        <Route path="/webteam" element={<WebTeam />} />
      </Routes>
    </>
  );
}

export default App;
