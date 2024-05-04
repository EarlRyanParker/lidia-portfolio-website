function SummarySection({ animationTrigger }) {
  return (
    <div className="mb-10 lg:max-w-[800px]">
      <h1
        className={` text-3xl font-pri mb-5 transition-opacity delay-[200ms] duration-[1000ms] ${
          animationTrigger ? "opacity-100" : "opacity-0"
        } `}
      >
        Summary
      </h1>
      <p
        className={`mx-5 text-sec text-lg lg:max-w-[800px] mb-10 transition-opacity delay-[700ms] duration-[1000ms] ${
          animationTrigger ? "opacity-100" : "opacity-0"
        } `}
      >
        A dynamic and creative fashion enthusiast with a Bachelor of Design and
        a Minor in French from Toronto Metropolitan University, I bring a
        diverse skill set and practical experience to the industry. From
        meticulously designing costumes for film productions to curating
        visually captivating looks as a Stylist Intern at Noorèlle, I have honed
        my expertise in styling, graphic design, and event management.
        Proficient in tools like Procreate, Clo 3D, and Adobe Creative Suite, I
        am poised to contribute my passion for innovation and keen eye for
        detail to the ever-evolving world of fashion.
      </p>
    </div>
  );
}

export default SummarySection;
