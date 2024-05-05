import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link, useOutletContext } from "react-router-dom";

function Grid({
  originalArtworks,
  displayArtworks,
  setDisplayArtworks,
  basePath,
  cwComponentLoaded,
  setCWComponentLoaded,
}) {
  const [state] = useOutletContext();
  const [imgRows, setImgRows] = useState([[], [], []]);

  function convertArrayToGridFormat(images) {
    const result = [[], [], []];

    images.forEach((img, index) => {
      const groupIndex = index % 3;
      result[groupIndex].push(img);
    });

    return result;
  }

  function getImgId(path) {
    const parts = path.split("/");
    const lastPart = parts[parts.length - 1];
    return lastPart;
  }

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

  //Once the user selects a filter, filter originalArtworks array and set it to displayArtworks that will be used to render the images that meet the filter (this will perserve the originalArtworks array)
  useEffect(() => {
    const filteredImages = filterDisplayImages(originalArtworks, state);
    setDisplayArtworks(filteredImages);
  }, [originalArtworks, setDisplayArtworks, setCWComponentLoaded, state]);

  //When the display images array is filtered the ImgRows grid should be rerendered
  useEffect(() => {
    const displayImgRows = convertArrayToGridFormat(displayArtworks);
    setImgRows(displayImgRows);
  }, [displayArtworks]);

  //Render Grid on component mount
  useEffect(() => {
    setCWComponentLoaded(true);
    let imgRowsResult = convertArrayToGridFormat(originalArtworks);
    setImgRows(imgRowsResult);
  }, [originalArtworks, setCWComponentLoaded]);
  //
  return (
    <div>
      <div
        className={`grid mx-5 lg:grid-cols-3 md:gap-x-5 lg:mx-0 transition-opacity delay-[1000ms] duration-[1500ms] ${
          cwComponentLoaded ? "opacity-100" : "opacity-0"
        } `}
      >
        <div className="flex-col">
          {imgRows[0].map((image, index) => (
            <Link
              key={image.src}
              to={`/${basePath}/gallery/${getImgId(image.src)}`}
            >
              <LazyLoadImage
                className="mb-8 lg:mb-5 shadow-md cursor-pointer hover:scale-105 transition-all delay-75 hover:shadow-lg"
                key={index}
                src={image.src}
                alt={`Image ${index + 1}`}
                effect="blur"
                placeholderSrc={image.src}
              ></LazyLoadImage>
            </Link>
          ))}
        </div>

        <div className="flex-col" key="1">
          {imgRows[1].map((image, index) => (
            <Link
              key={image.src}
              to={`/${basePath}/gallery/${getImgId(image.src)}`}
            >
              <LazyLoadImage
                className="mb-8 lg:mb-5 shadow-md cursor-pointer hover:scale-105 transition-all delay-75 hover:shadow-lg"
                key={index}
                src={image.src}
                alt={`Image ${index + 1}`}
                effect="blur"
                placeholderSrc={image.src}
              ></LazyLoadImage>
            </Link>
          ))}
        </div>
        <div className="flex-col" key="2">
          {imgRows[2].map((image, index) => (
            <Link
              key={image.src}
              to={`/${basePath}/gallery/${getImgId(image.src)}`}
            >
              <LazyLoadImage
                className="mb-8 lg:mb-5 shadow-md cursor-pointer hover:scale-105 transition-all delay-75 hover:shadow-lg"
                key={index}
                src={image.src}
                alt={`Image ${index + 1}`}
                effect="blur"
                placeholderSrc={image.src}
              ></LazyLoadImage>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

Grid.propTypes = {
  originalArtworks: PropTypes.array.isRequired,
  displayArtworks: PropTypes.array.isRequired,
  setDisplayArtworks: PropTypes.func.isRequired,
  basePath: PropTypes.string.isRequired,
  cwComponentLoaded: PropTypes.bool.isRequired,
  setCWComponentLoaded: PropTypes.func.isRequired,
};

export default Grid;
