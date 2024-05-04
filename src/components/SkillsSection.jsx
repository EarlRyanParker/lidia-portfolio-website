function SkillsSection({ animationTrigger }) {
  const skills = [
    "Procreate",
    "Clo 3D",
    "Adobe Creative Suite",
    "AccuMark Explorer",
    "Lectra",
  ];

  let sortedSkills = skills.sort();
  return (
    <div>
      <h1
        className={` text-3xl font-pri mb-5 transition-opacity delay-[200ms] duration-[1000ms] ${
          animationTrigger ? "opacity-100" : "opacity-0"
        } `}
      >
        Skills
      </h1>
      <ul
        className={`mx-5 transition-opacity delay-[700ms] duration-[1000ms] ${
          animationTrigger ? "opacity-100" : "opacity-0"
        } `}
      >
        {sortedSkills.map((skill) => (
          <li className="font-sec text-xl mb-3 ">{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default SkillsSection;
