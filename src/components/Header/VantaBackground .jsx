import { useEffect, useRef } from "react";
import * as THREE from "three";
import DOTS from "vanta/dist/vanta.dots.min";

const VantaBackground = () => {
  const ringsRef = useRef(null);

  useEffect(() => {
    if (ringsRef.current) {
      // Initialize Vanta.js rings effect
      const vantaEffect = DOTS({
        el: ringsRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0xf120ff,
        showLines: false,
      });

      // Clean up function
      return () => {
        if (vantaEffect) vantaEffect.destroy();
      };
    }
  }, []);

  return (
    <div
      ref={ringsRef}
      className="rings-container w-full h-full absolute z-0 top-0 left-0"
    ></div>
  );
};

export default VantaBackground;
