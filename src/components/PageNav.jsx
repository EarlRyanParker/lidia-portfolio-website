import { NavLink } from "react-router-dom";
import { useState } from "react";

import MobileMenu from "./MobileMenu";

function PageNav() {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [active, setActive] = useState(false);
  const [isMobileMenuVisbile, setIsMobileMenuVisbile] = useState(false);

  const handleLinkEnter = (link) => {
    setHoveredLink(link);
    setActive(true);
  };

  const handleLinkExit = (link) => {
    setHoveredLink(null);
    setActive(false);
  };

  const handleMobileMenuClick = () => {
    setIsMobileMenuVisbile((isMobileMenuVisbile) => !isMobileMenuVisbile);
  };

  return (
    <div>
      <MobileMenu
        isMobileMenuActive={isMobileMenuVisbile}
        setIsMobileMenuActive={setIsMobileMenuVisbile}
      />

      <nav className="opacity-100 mb-2 lg:mb-0 flex item-center h-[7vh]">
        <div className="ml-5 lg:ml-0 container flex justify-between items-center">
          <NavLink
            to="/"
            className={`font-pri text-4xl lg:text-3xl font-normal cursor-pointer transition-all delay-150 ${
              active === true
                ? hoveredLink === "LIDIA"
                  ? "text-[#B18FCF]"
                  : "text-gray-300 "
                : "text-gray-900"
            }`}
            onMouseEnter={() => handleLinkEnter("LIDIA")}
            onMouseLeave={() => handleLinkExit(null)}
          >
            LIDIA FERNANDES
          </NavLink>

          <ul className="hidden lg:flex space-x-12 h-7">
            <NavLink
              to="/"
              className={`font-sec text-lg transition-all delay-150 ${
                active === true
                  ? hoveredLink === "HOME"
                    ? "text-[#B18FCF]"
                    : "text-gray-300 "
                  : "text-gray-600"
              }`}
              onMouseEnter={() => handleLinkEnter("HOME")}
              onMouseLeave={() => handleLinkExit(null)}
            >
              Home
            </NavLink>
            <NavLink
              to="/creative-works"
              className={`font-sec text-lg transition-all delay-150 ${
                active === true
                  ? hoveredLink === "CREATIVE"
                    ? "text-[#B18FCF]"
                    : "text-gray-300"
                  : "text-gray-600"
              }`}
              onMouseEnter={() => handleLinkEnter("CREATIVE")}
              onMouseLeave={() => handleLinkExit(null)}
            >
              Creative Work's
            </NavLink>
            {/* <NavLink
              to="/technical-works"
              className={`font-sec text-lg transition-all delay-150 ${
                active === true
                  ? hoveredLink === "TECHNICAL"
                    ? "text-[#B18FCF]"
                    : "text-gray-300"
                  : "text-gray-600"
              }`}
              onMouseEnter={() => handleLinkEnter("TECHNICAL")}
              onMouseLeave={() => handleLinkExit(null)}
            >
              Technical Work's
            </NavLink> */}

            <NavLink
              to="/cv"
              className={`font-sec text-lg transition-all delay-150 ${
                active === true
                  ? hoveredLink === "ABOUTME"
                    ? "text-[#B18FCF]"
                    : "text-gray-300"
                  : "text-gray-600"
              }`}
              onMouseEnter={() => handleLinkEnter("ABOUTME")}
              onMouseLeave={() => handleLinkExit(null)}
            >
              CV
            </NavLink>
            <NavLink
              to="/contact-me"
              className={`font-sec text-lg transition-all delay-150 ${
                active === true
                  ? hoveredLink === "CONTACTME"
                    ? "text-[#B18FCF]"
                    : "text-gray-300"
                  : "text-gray-600"
              }`}
              onMouseEnter={() => handleLinkEnter("CONTACTME")}
              onMouseLeave={() => handleLinkExit(null)}
            >
              Contact Me
            </NavLink>
          </ul>

          <img
            src="/src/assets/noun-list.svg"
            className="lg:hidden mt-[0.7rem] mr-4 w-11 cursor-pointer"
            onClick={() => handleMobileMenuClick()}
          ></img>
        </div>
      </nav>
    </div>
  );
}

export default PageNav;
