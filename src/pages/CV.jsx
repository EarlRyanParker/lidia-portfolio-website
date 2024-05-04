import { useEffect, useState } from "react";

import ContactInformationSection from "../components/ContactInformationSection";
import ExperienceSection from "../components/ExperienceSection";
import EducationSection from "../components/EducationSection";
import SkillsSection from "../components/SkillsSection";
import SummarySection from "../components/SummarySection";
import Footer from "../components/Footer";

function CV() {
  const [animationTrigger, setAnimationTrigger] = useState(false);

  const experiences = [
    {
      company: "Noorèlle",
      location: "Toronto, Ont",
      role: "Stylist Intern",
      date: "May 2023- February 2024",
      description:
        "During my stylist internship at Noorèlle, I have been fortunate to learn a wide range of valuable skills that are crucial in the world of fashion. While furthering my skills in  graphic design, I have gained extensive knowledge in styling, enabling me to curate visually captivating looks that resonate with the brand's aesthetic. Additionally, I had the opportunity to showcase my artistic talents by designing watercolors that have become synonymous with the brand's identity. Furthermore I played an integral role in creating the etsy shop, where I combined my creativity with practicality to design an inviting and immersive space for customers. With each passing day, I am continuously expanding my understanding of the fashion industry, gaining real-world experience that will undoubtedly shape my future in the fashion industry",
    },

    {
      company: "Intro",
      location: "Toronto, Ont",
      role: "Executive Assistant Producer",
      date: "October 2022- April 2023",
      description:
        "While working at Intro I have developed my all around skills when it comes to planning and promoting a fashion exhibit and show. I have gotten experience all around the board from planning finances, helping with campaigns using graphic designs and planning themes for the main event. This role taught me a wide variety of skills letting me experience many crucial parts about planning and marketing a show. While working here I am continuously developing my time management and team working skills. I keep a strict project plan to adhere to all deadlines",
    },
    {
      company: "Tmtc",
      location: "Toronto, Ont",
      role: "Wardrobe Assistant",
      date: "October 2021- May 2022",
      description:
        "When working on TMTC I developed key skills when working on a production as a whole and within the wardrobes department. Some tasks I have done while working here have been fitting with the cast where I take measurements and document them on excel, source costumes that we will not be making within budget, and finally creating garments to measurements for the cast to wear and perform in. Future tasks that I will be preparing for within this role will be hemming and taking in sourced clothing, styling and quick changes in the performance and any other tasks the head designer asks me to do. This role has taught me so far so much about fashion within theater and skills that I can take with me into future jobs in the fashion industry.",
    },
    {
      company: "Breathing Cloud Productions",
      location: "Toronto, Ont",
      role: "Head of Wardrobes",
      date: "November 2021- January 2022",
      description:
        "While working in this film, I used my knowledge of colour theory and character analysis to plan, create and source costumes for each scene of the film. I then brought outfits and hand sewing to tools to style actors on set, and then any quick fixes the costume needed. This film premiered at the Germany International film festival early spring 2022 with all positive reviews.",
    },
  ];

  useEffect(() => {
    setAnimationTrigger(true);
  }, []);

  return (
    <div className="mx-3 container mt-10 lg:mx-0 flex items-start justify-start">
      <div>
        <ContactInformationSection animationTrigger={animationTrigger} />
        <SummarySection animationTrigger={animationTrigger} />
        <ExperienceSection
          experiences={experiences}
          animationTrigger={animationTrigger}
        />
        <EducationSection animationTrigger={animationTrigger} />
        <SkillsSection animationTrigger={animationTrigger} />
        <Footer pageLoaded={animationTrigger} />
      </div>
      <div
        className={`mt-[-5px] flex items-center gap-3 transistion-opacity delay-[1500ms] duration-[700ms] ${
          animationTrigger ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="group flex flex-col items-center transition-transform duration-500 transform hover:-translate-y-2 cursor-pointer mx-[-25px]">
          <a
            href="./src/CreativeWorksImages/IMG_5.jpg "
            download="LidiaFernandesCV"
            className="w-16 h-16  mb-[-17px] "
          >
            <img
              src="./src/assets/noun-pdf.svg"
              className="w-16 h-16 cursor-pointertransition-transform duration-500 transform hover:-translate-y-2 "
            />
          </a>
          <p className="text-sec text-sm scale-0 transition-all duration-[500ms] group-hover:scale-100 ">
            Download CV
          </p>
        </div>
      </div>
    </div>
  );
}

export default CV;
