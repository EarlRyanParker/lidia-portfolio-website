import React from "react";

const VideoHomeScreen = () => {
  return (
    <div className="relative z-0 shadow-xl">
      <video className="w-full " autoPlay muted id="bg-video">
        <source src="src\video\INTRO FINALE.webm" type="video/mp4" />
      </video>
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <h1 className="font-sec text-3xl text-[#f2f2f2] font-bold text-sec select-none">
          INTRO X LIDIA FERNANDES
        </h1>
      </div>
    </div>
  );
};

export default VideoHomeScreen;
