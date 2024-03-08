import { Routes, Route } from "react-router-dom";
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

import { GoUpBtn, BackgroundGIF, Preloader } from "./components";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(false), 5000);
  }, []);

  return (
    <>
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
      {loading ? (
        <Preloader />
      ) : (
        <main className="animate-show">
          <GoUpBtn />
          <BackgroundGIF />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/workshops" element={<Workshops />} />
            <Route path="/coreteam" element={<CoreTeam />} />
            <Route path="/webteam" element={<WebTeam />} />
          </Routes>
        </main>
      )}
    </>
  );
}

export default App;
