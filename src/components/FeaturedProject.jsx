import ProjectImageItem from "./ProjectImageItem";
import PropTypes from "prop-types";

function FeaturedProject({ projectName, images }) {
  return (
    <div>
      <div className="flex justify-center">
        <h2 className="font-pri text-2xl mb-5 ">{projectName}</h2>
      </div>
      <div className="grid w-full grid-cols-4 gap-5 ">
        {images.map((image, index) => (
          <ProjectImageItem key={index} image={image} />
        ))}
      </div>
    </div>
  );
}

FeaturedProject.propTypes = {
  projectName: PropTypes.string.isRequired,
  images: PropTypes.array.isRequired,
};

export default FeaturedProject;
