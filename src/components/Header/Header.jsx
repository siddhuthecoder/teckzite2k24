import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { VscThreeBars } from "react-icons/vsc";
import { navigation } from "../../constants";
import Navbar from "./Navbar";
import { useState } from "react";
import "./Header.css";

const Header = () => {
  const currentPath = window.location.pathname;
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <header
        className="header z-[1000] border-[0.1px] border-primary shadow"
        style={{ position: "fixed" }}
      >
        <Link to="/">
          <img src={logo} alt="logo" className="h-8" />
        </Link>
        <div className="w-full hidden md:flex items-center justify-around">
          {navigation.slice(0, 3).map((nav) => {
            return (
              <Link to={nav.link} key={nav.id}>
                <h4
                  className={`${
                    currentPath === nav.link ? "text-primary" : "text-[#eee]"
                  } mt-[0.3rem] font-namdhinggo text-[1rem] font-semibold`}
                >
                  {nav.name.toUpperCase()}
                </h4>
              </Link>
            );
          })}
          <Link to="/register">
            <h4
              className={`${
                currentPath === "/register" ? "text-violet-500" : ""
              } mt-[0.3rem] font-namdhinggo text-[1rem] font-semibold`}
            >
              REGISTER
            </h4>
          </Link>
        </div>
        <div
          className="cursor-pointer"
          onClick={() => setShowNav((prev) => !prev)}
        >
          <VscThreeBars size={28} color="white" />
        </div>
      </header>
      {showNav && <Navbar setShowNav={setShowNav} />}
    </>
  );
};

export default Header;
