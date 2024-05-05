/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { useParams, useOutletContext } from "react-router-dom";
import ImageCarousel from "./ImageCarousel";
import { useEffect, useState } from "react";

function Gallery({
  originalArtworks,
  displayArtworks,
  setDisplayArtworks,
  basePath,
  imgFolderName,
  setCWComponentLoaded,
}) {
  const { id } = useParams();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [state] = useOutletContext();
  const displayArtworksLength = displayArtworks.length;

  function filterDisplayImages(images, filters) {
    let filterBy = "";

    for (const key in filters) {
      if (Object.prototype.hasOwnProperty.call(filters, key) && filters[key]) {
        filterBy = key.split("By").pop().trim();
        break;
      }
    }

    let filteredImages = [];

    if (filterBy !== "All") {
      filteredImages = images.filter((image) => {
        return image.method === filterBy;
      });
    } else {
      filteredImages = images;
    }

    return filteredImages;
  }

  //Reset Index on filter change to prevent index out of range error when switching filter
  useEffect(() => {
    setCurrentIndex(0);
  }, [state]);

  //Once filters change the Display Images array is filtered
  useEffect(() => {
    const filteredImages = filterDisplayImages(originalArtworks, state);
    setDisplayArtworks(filteredImages);
  }, [originalArtworks, setDisplayArtworks, state]);

  useEffect(() => {
    setCWComponentLoaded(true);
  });

  useEffect(
    function () {
      function GetImgSelectedIndex(imgSelected) {
        for (let i = 0; i < displayArtworksLength; i++) {
          if (displayArtworks[i].src === imgSelected) {
            console.log(i);
            return i;
          }
        }
        console.log("image not found");
        return 0;
      }
      console.log("image selected");

      let ImgSelectedindex = GetImgSelectedIndex(`/src/${imgFolderName}/${id}`);

      setCurrentIndex(ImgSelectedindex);
    },
    [displayArtworks, displayArtworksLength, imgFolderName, id]
  );

  return (
    <div>
      <ImageCarousel
        displayArtworks={displayArtworks}
        displayArtworksLength={displayArtworksLength}
        basePath={basePath}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
    </div>
  );
}

Gallery.propTypes = {
  originalArtworks: PropTypes.array.isRequired,
  displayArtworks: PropTypes.array.isRequired,
  setDisplayArtworks: PropTypes.func.isRequired,
  basePath: PropTypes.string.isRequired,
  imgFolderName: PropTypes.string.isRequired,
  setCWComponentLoaded: PropTypes.func.isRequired,
};
export default Gallery;
