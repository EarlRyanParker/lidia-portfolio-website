import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const ImageCarousel = ({
  displayArtworks,
  displayArtworksLength,
  basePath,
  currentIndex,
  setCurrentIndex,
}) => {
  function getImgId(path) {
    const parts = path.split("/");
    const lastPart = parts[parts.length - 1];

    return lastPart;
  }

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? displayArtworksLength - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === displayArtworksLength - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full mx-auto mb-[100px]">
      <div className="flex justify-center items-center mx-auto min-h-[75vh] ">
        <Link
          to={`/${basePath}/gallery/${getImgId(
            displayArtworks[
              currentIndex - 1 < 0
                ? displayArtworksLength - 1
                : currentIndex - 1
            ].src
          )}`}
        >
          <button
            onClick={prevImage}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 "
          >
            <img
              src="/src/assets/noun-left-arrow.svg"
              alt="Previous"
              className="w-12 lg:w-16 lg:h-16"
            />
          </button>
        </Link>

        <div className="flex-col items-center text-center ">
          <LazyLoadImage
            src={`${displayArtworks[currentIndex].src}`}
            alt={`Slide ${currentIndex + 1}`}
            className="max-w-lg lg:max-w-4xl max-h-[75vh] object-contain shadow-lg "
            effect="blur"
            placeholderSrc={`${displayArtworks[currentIndex].src}`}
          />
          <p className="text-sec text-md mt-5">
            {displayArtworks[currentIndex].description}
          </p>
        </div>

        <Link
          to={`/${basePath}/gallery/${getImgId(
            displayArtworks[
              currentIndex + 1 >= displayArtworksLength ? 0 : currentIndex + 1
            ].src
          )}`}
        >
          <button
            onClick={nextImage}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 b"
          >
            <img
              src="/src/assets/noun-right-arrow.svg"
              alt="Next"
              className="w-12 lg:w-16 lg:h-16"
            />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ImageCarousel;
