/* eslint-disable no-unused-vars */
import "./App.css";

import PageNav from "./components/PageNav";
import Footer from "./components/Footer";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Homepage from "./pages/Homepage";
import CreativeWorks from "./pages/CreativeWorks";
import TechnicalWorks from "./pages/TechnicalWorks";
import CV from "./pages/CV";
import ContactMe from "./pages/ContactMe";
import Grid from "./components/Grid";
import Gallery from "./components/Gallery";
import { useState } from "react";

const CW_BASEPATH = "creative-works";
const CW_IMG_FOLDER_NAME = "CreativeWorksImages";

const creative_works_images = [
  { src: "/src/CreativeWorksImages/IMG_1.jpg", method: "Textiles" },
  { src: "/src/CreativeWorksImages/IMG_2.jpg", method: "Illustrations" },
  { src: "/src/CreativeWorksImages/IMG_3.jpg", method: "Sewing" },
  { src: "/src/CreativeWorksImages/IMG_4.jpg", method: "Sewing" },
  { src: "/src/CreativeWorksImages/IMG_5.jpg", method: "Illustrations" },
  { src: "/src/CreativeWorksImages/IMG_6.jpg", method: "Sewing" },
  { src: "/src/CreativeWorksImages/IMG_7.jpg", method: "Sewing" },
];

function App() {
  const [cwComponentLoaded, setCWComponentLoaded] = useState(false);

  const [originalArtworks, setOriginalArtworks] = useState(
    creative_works_images
  );
  const [displayArtworks, setDisplayArtworks] = useState(creative_works_images);

  return (
    <div className="container mx-auto">
      <BrowserRouter>
        <PageNav />
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route
            path="creative-works"
            element={<CreativeWorks cwComponentLoaded={cwComponentLoaded} />}
          >
            <Route
              index
              element={
                <Navigate
                  to="grid"
                  originalArtworks={originalArtworks}
                  displayArtworks={displayArtworks}
                  setDisplayArtworks={setDisplayArtworks}
                  basePath={CW_BASEPATH}
                  cwComponentLoaded={cwComponentLoaded}
                  setCWComponentLoaded={setCWComponentLoaded}
                />
              }
            />

            <Route
              path="grid"
              element={
                <Grid
                  originalArtworks={originalArtworks}
                  displayArtworks={displayArtworks}
                  setDisplayArtworks={setDisplayArtworks}
                  basePath={CW_BASEPATH}
                  cwComponentLoaded={cwComponentLoaded}
                  setCWComponentLoaded={setCWComponentLoaded}
                />
              }
            />
            <Route
              path="gallery"
              element={
                <Gallery
                  originalArtworks={originalArtworks}
                  displayArtworks={displayArtworks}
                  setDisplayArtworks={setDisplayArtworks}
                  imgFolderName={CW_IMG_FOLDER_NAME}
                  basePath={CW_BASEPATH}
                  cwComponentLoaded={cwComponentLoaded}
                  setCWComponentLoaded={setCWComponentLoaded}
                />
              }
            />

            <Route
              path="gallery/:id"
              element={
                <Gallery
                  originalArtworks={originalArtworks}
                  displayArtworks={displayArtworks}
                  setDisplayArtworks={setDisplayArtworks}
                  imgFolderName={CW_IMG_FOLDER_NAME}
                  basePath={CW_BASEPATH}
                  cwComponentLoaded={cwComponentLoaded}
                  setCWComponentLoaded={setCWComponentLoaded}
                />
              }
            />
          </Route>
          <Route path="cv" element={<CV />}></Route>
          <Route path="contact-me" element={<ContactMe />}></Route>
          <Route path="/*" element={<p>Page not Found</p>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

{
  /* <Route path="technical-works" element={<TechnicalWorks />}>
            <Route index element={<Navigate to="grid" />} />

            <Route
              path="grid"
              element={
                <Grid images={technical_works_images} basePath={TW_BASEPATH} />
              }
            />
            <Route
              path="gallery"
              element={
                <Gallery
                  images={technical_works_images}
                  imgFolderName={TW_IMG_FOLDER_NAME}
                  basePath={TW_BASEPATH}
                />
              }
            />

            <Route
              path="gallery/:id"
              element={
                <Gallery
                  images={technical_works_images}
                  imgFolderName={TW_IMG_FOLDER_NAME}
                  basePath={TW_BASEPATH}
                />
              }
            />
          </Route> */
}
