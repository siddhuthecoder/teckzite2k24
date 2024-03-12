import { navigation } from "../../constants";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import VantaBackground from "./VantaBackground ";
import logo from "../../assets/logo.png";
import Glasses from '../../assets/navbar/vr_glasses.png'
import { motion } from 'framer-motion'

//eslint-disable-next-line
const Navbar = ({ setShowNav }) => {
  return (
    <div
      className="w-full min-h-screen relative top-0 left-0 z-[1001] bg-black"
      style={{ position: "fixed" }}
    >
      <VantaBackground />
      <div
        onClick={() => setShowNav(false)}
        className="absolute right-[2.4rem] top-[2.4rem] cursor-pointer"
      >
        <FaTimes size={32} />
      </div>
      <div className="absolute left-[2.4rem] top-[2.4rem] cursor-pointer">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="logo" width={35} height={35} />
          <h1 className="text-2xl max-md:hidden font-semibold">
            Teckzite 2k24
          </h1>
        </Link>
      </div>
      <ul className="animate-fade hidden md:flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white w-full max-w-[1200px] items-center justify-around">
        {navigation.map((nav) => {
          return (
            <li key={nav.id} className="odd:mt-[200px] nav_heading">
              <Link
                to={nav.link}
                className="flex flex-col gap-0 items-center justify-center hover:scale-125 cursor-pointer h-[auto] relative"
              >
                <h1 className="text-[20px] text-nowrap pt-[10px] top-[20px] font-koneMono h-2 absolute">
                  {nav.name}
                </h1>
                <img
                  src={Glasses}
                  alt="nav image"
                  style={{ transitionDuration: "0.5s" }}
                  // width={60}
                  // height={42}
                  className="mt-0 h-[auto] max-w-[100%]"
                />
              </Link>
            </li>
          );
        })}
        <li className="odd:mt-16 nav_heading">
          <Link
            to="/register"
            className="flex flex-col gap-0 items-center justify-center hover:scale-125 cursor-pointer h-[auto] relative"
          >
            <h1 className="text-[20px]  text-nowrap  pt-[10px] top-[20px] font-koneMono h-2 absolute">
              Register
            </h1>
            <img
              src={Glasses}
              alt="nav image"
              className="mt-0 h-[auto] max-w-[100%]"
            />
          </Link>
        </li>
      </ul>
      <ul className=" flex flex-col md:hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-h-full items-start justify-center">
        {navigation.map((nav, index) => {
          return (
            <motion.li key={nav.id} className="hover:scale-110"
              initial={{ x: "-100%" ,opacity:0}}
              animate={{ x: 0,opacity:1 }}
              transition={{ duration: 0.5, delay: index * 0.07, type: "spring", stiffness: 200 }}
            >
              <Link
                to={nav.link}
                className="flex items-center justify-center gap-3 "
              >
                <img
                  src={Glasses}
                  alt="nav image"
                  className="mt-5 h-[auto] max-w-[100%] relative"
                />
                <h1 className="text-lg text-nowrap font-koneMono h-2 absolute">
                  {nav.name}
                </h1>
              </Link>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;
