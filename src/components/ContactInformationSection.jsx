import PropTypes from "prop-types";

function ContactInformationSection({ animationTrigger }) {
  return (
    <div className="mb-10">
      <h1
        className={` text-3xl font-pri mb-5 transition-opacity delay-[200ms] duration-[1000ms] ${
          animationTrigger ? "opacity-100" : "opacity-0"
        } `}
      >
        Contact Information
      </h1>
      <div
        className={`mx-5  lg:max-w-[800px] mb-10 transition-opacity delay-[700ms] duration-[1000ms] ${
          animationTrigger ? "opacity-100" : "opacity-0"
        } `}
      >
        <h1 className="text-xl font-sec text-gray-800">
          Email: lidiafernandes.mail@gmail.com
        </h1>
        <a className="text-xl font-sec text-gray-800">
          Linkedin: https://www.linkedin.com/in/lidia-fernandes-096085232/
        </a>
      </div>
    </div>
  );
}

ContactInformationSection.propTypes = {
  animationTrigger: PropTypes.bool.isRequired,
};

export default ContactInformationSection;
