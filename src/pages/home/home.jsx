import Header from "../../components/Header/Header";
import video from "../../assets/home/banner.mp4";
import man from '../../assets/home/man.png'
// import { motion } from 'framer-motion'
import '../../css/glitch.scss'
import '../../css/glitch2.scss'


const Home = () => {
  return (
    <main>
      <div className="">
        <Header />
        <div className="absolute top-0 left-0 w-full h-full z-2 overflow-hidden">
          <video
            src={video}
            autoPlay
            loop
            muted
            className="absolute top-0 left-0 min-w-full min-h-full object-cover"
          ></video>
          <div className="absolute bottom-0 left-0 min-h-[200px] w-full ">
            <img src={man} alt="" className="absolute scale-[2.5] bottom-[70%] md:scale-[1.5] md:bottom-[50%] lg:scale-[1] lg:bottom-[0%]" style={{ transform: "" }} />
            <div className="w-full">
              <div className="glitch text-center text-[50px] ps-[10px] mt-[-30%]  sm:text-[50px] sm:ps-[10px] sm:mt-[-30%] md:text-[50px] md:ps-[10px] md:mt-[-23%]  lg:text-[50px] lg:ps-[10px] lg:mt-[-18%] w-full " data-glitch="TECKZITE" style={{}}>TECKZITE</div>
            </div>
{/*             <div className="w-full ">
              <div className="glitch fixed bottom w-full text-center text-[30px] bottom-[10%] " data-glitch="META VERSE" style={{}}>META VERSE</div>
            </div> */}
          </div>  
        </div>
        
      </div>


    </main>
  );
};

export default Home;
