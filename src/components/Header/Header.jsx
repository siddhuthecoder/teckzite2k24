// import { Link } from "react-router-dom";
// import logo from "../../assets/logo.png";
// import { VscThreeBars } from "react-icons/vsc";
// import { navigation } from "../../constants";
// import Navbar from "./Navbar";
import { useState } from "react";
// import "./Header.css";

// const Header = () => {
//   const currentPath = window.location.pathname;
//   const [showNav, setShowNav] = useState(false);
//   return (
//     <>
//       <header
//         className="header z-[1000] border-[0.1px] border-primary shadow"
//         style={{ position: "fixed" }}
//       >
//         <Link to="/">
//           <img src={logo} alt="logo" className="h-8" />
//         </Link>
//         <div className="w-full hidden  md:flex items-center justify-around">
//           {navigation.slice(0, 3).map((nav) => {
//             return (
//               <Link to={nav.link} key={nav.id}>
//                 <h4
//                   className={` text-[17px] py-[3] ${currentPath === nav.link ? "text-primary" : "text-[#eee]"
//                     } mt-[0.3rem] font-namdhinggo text-[1rem] font-semibold`}
//                 >
//                   {nav.name.toUpperCase()}
//                 </h4>
//               </Link>
//             );
//           })}
//           <Link to="/register">
//             <h4
//               className={`text-[17px] py-[3] ${currentPath === "/register" ? "text-violet-500" : ""
//                 } mt-[0.3rem] font-namdhinggo text-[1rem] font-semibold`}
//             >
//               REGISTER
//             </h4>
//           </Link>
//         </div>
//         <div
//           className="cursor-pointer"
//           onClick={() => setShowNav((prev) => !prev)}
//         >
//           <VscThreeBars size={28} color="white" />
//         </div>
//       </header>
//       {showNav && <Navbar setShowNav={setShowNav} />}
//     </>
//   );
// };

// export default Header;

import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdPerson } from "react-icons/io";
import Navbar from "./Navbar";

const Header = () => {
  const pathName = window.location.pathname;
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="header_container">
      <header className="w-full relative h-full">
        <div
          className="absolute top-[35%] -translate-y-1/2 left-0 px-4 flex items-center gap-4"
          style={{ verticalAlign: true }}
        >
            <div className="cursor-pointer" onClick={() => setShowNav((prev) => !prev)}      >
            <GiHamburgerMenu size={22}  />
            </div>
          <div className="breadcrumbs max-md:hidden">
            <h1 className="text-base font-namdhinggo">
              {pathName === "/"
                ? "/ Home"
                : `/ ${pathName.charAt(1).toUpperCase() + pathName.slice(2)}`}
            </h1>
          </div>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 transform -translate-x-1/2">
          <Link to="/">
            <img src={logo} alt="logo" className="h-[50px]" />
          </Link>
        </div>
        <div
          className="absolute top-[35%] -translate-y-1/2 px-4 font-semibold font-koneMono text-xl cursor-pointer inline-block right-0"
          style={{ verticalAlign: "middle" }}
        >
          <Link to="/register">
            <h1 className="max-md:hidden">Register</h1>
            <IoMdPerson className="md:hidden" size={22} />
          </Link>
        </div>
      </header>
      {showNav && <Navbar setShowNav={setShowNav} />}
    </div>
  );
};

export default Header;
