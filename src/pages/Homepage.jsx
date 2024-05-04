import VideoHomeScreen from "../components/VudeiHomeScreen";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Footer from "../components/Footer";

function Homepage() {
  return (
    <div>
      <VideoHomeScreen />
      <h2 className="font-sec text-2xl mt-16 mb-5">
        INTRO X LIDIA FERNANDES LOOKS
      </h2>
      <div className="grid w-full grid-cols-3 gap-x-5">
        <LazyLoadImage
          src="src/CreativeWorksImages/IMG_5.jpg"
          alt="LOOK 1"
          effect="blur"
          placeholderSrc="src/CreativeWorksImages/IMG_5.jpg"
        ></LazyLoadImage>
        <LazyLoadImage
          src="src/CreativeWorksImages/IMG_5.jpg"
          alt="LOOK 1"
          effect="blur"
          placeholderSrc="src/CreativeWorksImages/IMG_5.jpg"
        ></LazyLoadImage>
        <LazyLoadImage
          src="src/CreativeWorksImages/IMG_5.jpg"
          alt="LOOK 1"
          effect="blur"
          placeholderSrc="src/CreativeWorksImages/IMG_5.jpg"
        ></LazyLoadImage>
      </div>

      <Footer />
    </div>
  );
}

export default Homepage;
