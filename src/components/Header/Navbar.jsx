import { navigation } from "../../constants";
import nav_img from "../../assets/nav_img.webp";
import nav_img_sm from "../../assets/nav_img_sm.webp";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import VantaBackground from "./VantaBackground ";
import logo from "../../assets/logo.png";

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
            <li key={nav.id} className="odd:mt-16 nav_heading">
              <Link
                to={nav.link}
                className="flex flex-col gap-0 items-center justify-center hover:scale-125 cursor-pointer h-[auto]"
              >
                <h1 className="text-2xl text-nowrap font-koneMono h-2 relative">
                  {nav.name}
                </h1>
                <img
                  src={nav_img}
                  alt="nav image"
                  width={60}
                  height={42}
                  className="mt-0 h-[auto] max-w-[100%]"
                />
              </Link>
            </li>
          );
        })}
        <li className="odd:mt-16 nav_heading">
          <Link
            to="/register"
            className="flex flex-col gap-0 items-center justify-center hover:scale-125 cursor-pointer h-[auto]"
          >
            <h1 className="text-2xl text-nowrap font-koneMono h-2 relative">
              Register
            </h1>
            <img
              src={nav_img}
              alt="nav image"
              width={60}
              height={42}
              className="mt-0 h-[auto] max-w-[100%]"
            />
          </Link>
        </li>
      </ul>
      <ul className="animate-fade flex flex-col md:hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-h-full items-start justify-center">
        {navigation.map((nav) => {
          return (
            <li key={nav.id} className="hover:scale-110">
              <Link
                to={nav.link}
                className="flex items-center justify-center gap-3"
              >
                <img
                  src={nav_img_sm}
                  alt="nav image"
                  width={80}
                  height={27}
                  className="mt-5 h-[auto] max-w-[100%]"
                />
                <h1 className="text-lg text-nowrap font-koneMono h-2 relative">
                  {nav.name}
                </h1>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;
