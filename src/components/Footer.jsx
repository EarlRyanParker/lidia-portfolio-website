import { NavLink } from "react-router-dom";

function Footer({ pageLoaded = true }) {
  return (
    <footer
      className={`container mx-auto mt-10 mb-8 flex flex-col items-center transition-opacity delay-[3000ms] duration-[1500ms] ${
        pageLoaded ? "opacity-100" : "opacity-0"
      }`}
    >
      <div>
        <div className=" mx-5 flex gap-x-14">
          <NavLink
            to="/"
            className="font-sec text-gray-600 text-md hover:text-[#B18FCF] transition-all delay-150"
          >
            Home
          </NavLink>
          <NavLink
            to="/creative-works"
            className="font-sec text-gray-600 text-md hover:text-[#B18FCF] transition-all delay-150"
          >
            Creative Work's
          </NavLink>
          {/* <NavLink
          to="/technical-works"
          className="font-sec text-gray-600 text-md hover:text-[#B18FCF] transition-all delay-150"
        >
          Technical Work's
        </NavLink> */}

          <NavLink
            to="/cv"
            className="font-sec text-gray-600  text-md hover:text-[#B18FCF] transition-all delay-150"
          >
            CV
          </NavLink>
          <NavLink
            to="/contact-me"
            className="font-sec text-gray-600  text-md hover:text-[#B18FCF] transition-all delay-150"
          >
            Contact Me
          </NavLink>
        </div>
        <div className=" flex gap-x-14 mt-8 justify-center">
          <div className="group flex flex-col items-center transition-transform duration-500 transform hover:-translate-y-2 cursor-pointer">
            <a href="https://depop.app.link/EMVXSBc2pIb">
              <img
                src="/src/assets/noun-shopping-bag.svg"
                className="w-10 h-10 "
              ></img>
            </a>
            <p className="text-sec text-sm scale-0 transition-all duration-[500ms] group-hover:scale-100 ">
              Depop
            </p>
          </div>

          <div className="group flex flex-col items-center transition-transform duration-500 transform hover:-translate-y-2 cursor-pointer">
            <a href="https://www.instagram.com/lidia.christine_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
              <img
                src="/src/assets/noun-instagram.svg"
                hrc="https://www.instagram.com/lidia.christine_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                className="w-8 h-8 "
              ></img>
            </a>

            <p className="text-sec text-sm scale-0 transition-all duration-[500ms] group-hover:scale-100 ">
              Instagram
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
