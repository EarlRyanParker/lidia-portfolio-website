import VideoHomeScreen from "../components/VideoHomeScreen";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Footer from "../components/Footer";
import FeaturedProject from "../components/FeaturedProject";

function Homepage() {
  const featuredProjectImages = [
    { src: "/src/FeaturedProjectsImages/IMG_3410.jpg" },
    { src: "/src/FeaturedProjectsImages/IMG_3410.jpg" },
    { src: "/src/FeaturedProjectsImages/IMG_3410.jpg" },
    { src: "/src/FeaturedProjectsImages/IMG_3410.jpg" },
  ];
  return (
    <div>
      <VideoHomeScreen />

      <div className="mb-16">
        <h2 className="font-pri text-2xl mt-16 mb-5">
          INTRO X LIDIA FERNANDES LOOKS
        </h2>
        <div className="grid w-full grid-cols-3 gap-x-5">
          <LazyLoadImage
            src="src/CreativeWorksImages/IMG_5.jpg"
            className="shadow-lg"
            alt="LOOK 1"
            effect="blur"
            placeholderSrc="src/CreativeWorksImages/IMG_5.jpg"
          ></LazyLoadImage>
          <LazyLoadImage
            src="src/CreativeWorksImages/IMG_5.jpg"
            className="shadow-lg"
            alt="LOOK 1"
            effect="blur"
            placeholderSrc="src/CreativeWorksImages/IMG_5.jpg"
          ></LazyLoadImage>
          <LazyLoadImage
            src="src/CreativeWorksImages/IMG_5.jpg"
            className="shadow-lg"
            alt="LOOK 1"
            effect="blur"
            placeholderSrc="src/CreativeWorksImages/IMG_5.jpg"
          ></LazyLoadImage>
        </div>
      </div>
      <h2 className="font-pri text-3xl mb-5">FEATURED PROJECTS</h2>
      <FeaturedProject
        projectName={"The Foxes Jacket"}
        images={featuredProjectImages}
      />
      <Footer />
    </div>
  );
}

export default Homepage;
