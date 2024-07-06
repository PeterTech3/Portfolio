import React, { useContext, useState } from "react";
import { LanguageContext } from "../context/languageContext";


export const ContactForm = () => {
  const [formData, setFormData] = useState({
    from: "",
    subject: "",
    message: "",
  });

  const { language } = useContext(LanguageContext);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };


  const handleClick = (e) => {
    e.stopPropagation();
  };

  return (
    <form className="w-full max-w-sm" onClick={handleClick}>
      <div>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="from"
          type="text"
          placeholder={language === "es" ? "Tu email" : "Your email"}
          value={formData.from}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="subject"
          type="text"
          placeholder={language === "es" ? "Asunto" : "Subject"}
          value={formData.subject}
          onChange={handleChange}
        />
      </div>
      <div>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="message"
          placeholder={language === "es" ? "Tu mensaje" : "Your message"}
          value={formData.message}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="flex justify-center align-center items-center send">
        <button
          className="text-white font-bold py-0 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          {language === "es" ? "Enviar" : "Send"}
        </button>
      </div>
    </form>
  );
};
