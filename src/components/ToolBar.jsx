import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

function ToolBar({ state, dispatch, cwComponentLoaded }) {
  const handleToggleFilter = (filterType) => {
    dispatch({
      type: "TOGGLE_FILTER",
      payload: filterType,
    });
  };

  return (
    <div
      className={`px-5 lg:px-0 flex justify-between mt-10 items-start mb-3 transition-opacity delay-[200ms] duration-[1500ms] ${
        cwComponentLoaded ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className=" flex gap-x-6 border-t-1 border-black ">
        <button
          className={`text-sec text-md   ${
            state.filterByAll ? "text-[#B18FCF]" : "text-gray-400"
          }`}
          onClick={() => handleToggleFilter("filterByAll")}
        >
          All
        </button>

        <button
          className={`text-sec text-md  ${
            state.filterByIllustrations ? "text-[#B18FCF]" : "text-gray-400"
          }`}
          onClick={() => handleToggleFilter("filterByIllustrations")}
        >
          Illustrations
        </button>

        <button
          className={`text-sec text-md  ${
            state.filterBySewing ? "text-[#B18FCF]" : "text-gray-400"
          }`}
          onClick={() => handleToggleFilter("filterBySewing")}
        >
          Sewing
        </button>

        <button
          className={`text-sec text-md hover: ${
            state.filterByTextiles ? "text-[#B18FCF]" : "text-gray-400"
          }`}
          onClick={() => handleToggleFilter("filterByTextiles")}
        >
          Textiles
        </button>
      </div>

      <div className="h-8 flex">
        <NavLink to="grid">
          <img src="/src/assets/noun-grid.svg" className="w-10 h-10" />
        </NavLink>

        <NavLink to={`gallery/IMG_1.jpg`}>
          <img src="/src/assets/noun-slideshow.svg" className="w-10 h-10" />
        </NavLink>
      </div>
    </div>
  );
}
ToolBar.propTypes = {
  state: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  cwComponentLoaded: PropTypes.bool.isRequired,
};

export default ToolBar;
