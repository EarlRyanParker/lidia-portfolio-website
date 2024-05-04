import ExperienceItem from "../components/ExperienceItem";
function ExperienceSection({ experiences, animationTrigger }) {
  return (
    <div className="">
      <h1
        className={` text-3xl font-pri mb-5 transition-opacity delay-[200ms] duration-[1000ms] ${
          animationTrigger ? "opacity-100" : "opacity-0"
        } `}
      >
        Experience
      </h1>

      {experiences.map((experience, index) => (
        <ExperienceItem
          key={index}
          company={experience.company}
          location={experience.location}
          role={experience.role}
          date={experience.date}
          description={experience.description}
          animationTrigger={animationTrigger}
          delay={index * 300}
        />
      ))}
    </div>
  );
}

export default ExperienceSection;
