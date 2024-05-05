import PropTypes from "prop-types";
function ExperienceItem({
  company,
  role,
  date,
  description,
  animationTrigger,
}) {
  return (
    <div
      className={`mx-5  lg:max-w-[800px] mb-10 transition-opacity delay-[700ms] duration-[1000ms] ${
        animationTrigger ? "opacity-100" : "opacity-0"
      } `}
    >
      <div className="flex gap-x-4 items-end">
        <h2 className="font-pri text-3xl ">{company}</h2>
        <h2 className="font-pri text-2xl">-</h2>
        <h3 className="font-pri text-2xl">{role}</h3>
      </div>
      <h4 className="mb-1 text-xl font-sec">{date}</h4>
      <p className="font-sec text-xl text-gray-800">{description}</p>
    </div>
  );
}

ExperienceItem.propTypes = {
  company: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  animationTrigger: PropTypes.bool.isRequired,
};

export default ExperienceItem;
