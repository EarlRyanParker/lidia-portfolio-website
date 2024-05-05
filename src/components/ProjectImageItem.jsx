import { LazyLoadImage } from "react-lazy-load-image-component";
import PropTypes from "prop-types"; // Import PropTypes

function ProjectImageItem({ image }) {
  return (
    <div>
      <LazyLoadImage
        src={image.src}
        className="shadow-lg "
        alt=""
        effect="blur"
        placeholderSrc={image.src}
      ></LazyLoadImage>
    </div>
  );
}

ProjectImageItem.propTypes = {
  image: PropTypes.object.isRequired,
};

export default ProjectImageItem;
