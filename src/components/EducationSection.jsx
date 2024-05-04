function EducationSection({ animationTrigger }) {
  return (
    <div className="mb-10">
      <h1
        className={`mb-5 text-3xl font-pri transition-opacity delay-[200ms] duration-[1000ms] ${
          animationTrigger ? "opacity-100" : "opacity-0"
        } `}
      >
        Education
      </h1>

      <div
        className={`mb-3 mx-5 transition-opacity delay-[700ms] duration-[1000ms] ${
          animationTrigger ? "opacity-100" : "opacity-0"
        } `}
      >
        <div className=" lg:flex gap-x-4 items-end ">
          <h2 className="font-pri text-3xl ">
            Toronto Metropolitan University
          </h2>
          <h2 className="font-pri text-2xl">-</h2>{" "}
          <h3 className="font-pri text-2xl">
            Bachelor of Design, Minor in French
          </h3>
        </div>
        <h4 className="mb-1 text-xl font-sec">September 2021-2025</h4>
      </div>
    </div>
  );
}

export default EducationSection;
