import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

function MobileMenu({ isMobileMenuActive, setIsMobileMenuActive }) {
  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    // Update menu visibility when isMobileMenuActive changes
    setMenuVisible(isMobileMenuActive);
  }, [isMobileMenuActive]);

  // Add a useEffect hook to handle animation when menuVisible changes
  useEffect(() => {
    // If menu is visible, set a timeout to change its opacity after a delay
    if (menuVisible) {
      const timer = setTimeout(() => {
        // Change opacity after a delay to allow CSS transition to take effect
        setMenuVisible(true);
      }, 50); // Adjust this delay as needed
      // Clear the timeout if the component unmounts or menu becomes hidden
      return () => clearTimeout(timer);
    }
  }, [menuVisible]);

  return (
    isMobileMenuActive && (
      <ul className={`py-[200px] flex flex-col items-center gap-y-16 `}>
        <NavLink
          to="/"
          className={`font-sec text-xl transition-all delay-[100ms] duration-[500ms] ${
            menuVisible
              ? "opacity-100 translate-y-0 "
              : "opacity-0 -translate-y-full"
          }}`}
          onClick={() => setIsMobileMenuActive(false)}
        >
          Home
        </NavLink>
        <NavLink
          to="/creative-works"
          className={`font-sec text-xl transition-all delay-[300ms] duration-[500ms] ${
            menuVisible
              ? "opacity-100 translate-y-0 "
              : "opacity-0 -translate-y-full"
          }}`}
          onClick={() => setIsMobileMenuActive(false)}
        >
          Creative Work's
        </NavLink>
        <NavLink
          to="/cv"
          className={`font-sec text-xl transition-all delay-[500ms] duration-[500ms] ${
            menuVisible
              ? "opacity-100 translate-y-0 "
              : "opacity-0 -translate-y-full"
          }}`}
          onClick={() => setIsMobileMenuActive(false)}
        >
          CV
        </NavLink>
        <NavLink
          to="/contact-me"
          className={`font-sec text-xl transition-all delay-[700ms] duration-[500ms] ${
            menuVisible
              ? "opacity-100 translate-y-0 "
              : "opacity-0 -translate-y-full"
          }}`}
          onClick={() => setIsMobileMenuActive(false)}
        >
          Contact Me
        </NavLink>
      </ul>
    )
  );
}

export default MobileMenu;
