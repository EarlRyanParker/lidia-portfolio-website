import { useState, useReducer } from "react";
import { Outlet } from "react-router-dom";
import ToolBar from "../components/ToolBar";
import Footer from "../components/Footer";
const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_FILTER":
      return {
        ...state,
        filterByAll: action.payload === "filterByAll" ? true : false,
        filterByIllustrations:
          action.payload === "filterByIllustrations" ? true : false,
        filterBySewing: action.payload === "filterBySewing" ? true : false,
        filterByTextiles: action.payload === "filterByTextiles" ? true : false,
      };

    default:
      return state;
  }
};

function CreativeWorks({ cwComponentLoaded }) {
  const [state, dispatch] = useReducer(reducer, {
    filterByAll: true,
    filterByIllustrations: false,
    filterBySewing: false,
    filterByTextiles: false,
  });

  return (
    <div>
      <div>
        <ToolBar
          state={state}
          dispatch={dispatch}
          cwComponentLoaded={cwComponentLoaded}
        />
        <Outlet context={[state, dispatch]} />
        <Footer pageLoaded={cwComponentLoaded} />
      </div>
    </div>
  );
}

export default CreativeWorks;
