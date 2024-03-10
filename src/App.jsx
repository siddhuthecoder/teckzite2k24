import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import {
  CoreTeam,
  Events,
  Home,
  Register,
  WebTeam,
  Workshops,
  // EventUpdates,
  // WorkshopsDetails,
  // EventDetails,
  // Profile,
  // Referrals,
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
        <>
          <Toaster />
          <main className="animate-show">
            <GoUpBtn />
            <BackgroundGIF />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/events" element={<Events />} />
              <Route path="/workshops" element={<Workshops />} />
              <Route path="/coreteam" element={<CoreTeam />} />
              <Route path="/webteam" element={<WebTeam />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </main>
        </>
      )}
    </>
  );
}

export default App;
