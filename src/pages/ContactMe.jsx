import { useEffect, useState } from "react";

function ContactMe() {
  const [revealAnimationTrigger, setRevealAnimationTrigger] = useState(false);
  const [userEmailIsValid, setUserEmailIsValid] = useState(false);
  const [emailIsValid, setEmailIsValid] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleEmailChange = (e) => {
    handleChange(e);
    const email = e.target.value;
    if (email.length > 0 && email.includes("@") && email.includes(".")) {
      setUserEmailIsValid(true);
    } else {
      setUserEmailIsValid(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const validateEmail = (formData) => {
    const { name, email, subject, message } = formData;
    if (
      name.length > 0 &&
      message.length > 0 &&
      subject.length > 0 &&
      userEmailIsValid === true
    ) {
      setEmailIsValid(true);
    } else {
      setEmailIsValid(false);
    }
  };

  useEffect(function () {
    setRevealAnimationTrigger(true);
  }, []);

  useEffect(
    function () {
      validateEmail(formData);
    },
    [formData]
  );

  return (
    <div className="mx-3 items-center container mt-10 lg:mx-0  ">
      <h2
        className={` text-3xl font-pri mb-8 transition-opacity delay-[200ms] duration-[1000ms] ${
          revealAnimationTrigger ? "opacity-100" : "opacity-0"
        } `}
      >
        Compose email
      </h2>

      <form
        onSubmit={handleSubmit}
        className={`mx-5 lg:max-w-[800px] mb-10 transition-opacity delay-[700ms] duration-[1000ms] lg:mx-0 space-y-6   ${
          revealAnimationTrigger ? "opacity-100" : "opacity-0"
        } ${emailIsValid ? "border-[#B18FCF]" : "border-gray-500"}`}
      >
        <div>
          <label htmlFor="name" className="block mb-1 font-sec text-xl">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className={`text-xl w-full px-4 py-2 bg-inherit rounded-md border border-gray-300 focus:outline-none focus:border-[#B18FCF] ${
              formData.name.length > 0 ? "border-[#B18FCF]" : "border-gray-500"
            }`}
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1 font-sec text-xl ">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleEmailChange}
            className={`text-xl w-full px-4 py-2 bg-inherit  border rounded-md focus:outline-none focus:border-[#B18FCF] ${
              userEmailIsValid ? "border-[#B18FCF]" : "border-gray-500"
            }`}
            required
          />
        </div>
        <div>
          <label htmlFor="subject" className="block mb-1 font-sec text-xl ">
            Subject:
          </label>
          <input
            type="subject"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={`text-xl w-full px-4 py-2 bg-inherit  border rounded-md focus:outline-none focus:border-[#B18FCF] ${
              formData.subject.length > 0
                ? "border-[#B18FCF]"
                : "border-gray-500"
            }`}
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-1 font-sec text-xl">
            Message:
          </label>
          <textarea
            type="message"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={`text-xl w-full px-4 py-2 bg-inherit rounded-md border border-gray-300 focus:outline-none focus:border-[#B18FCF] ${
              formData.message.length > 0
                ? "border-[#B18FCF]"
                : "border-gray-500"
            }`}
            rows={12}
            required
          ></textarea>
        </div>
        <button type="submit">
          <div
            className={`flex border  py-1 px-10 rounded-md  ${
              emailIsValid
                ? "bg-[#B18FCF] text-white border-[#B18FCF] cursor-pointer"
                : " text-gray-500 bg-none border-gray-500 cursor-default"
            }`}
          >
            <h3 className="font-sec text-xl">Send</h3>
          </div>
        </button>
      </form>
    </div>
  );
}

export default ContactMe;
