import githubLogo from "../../assets/images/github.png";
import linkedinLogo from "../../assets/images/linkedin.png";
import "aos/dist/aos.css";
import "../../assets/styles/contact.scss";
import { useContext, useState } from "react";
import { Console } from "../../components/Console";
import { LanguageContext } from "../../context/languageContext";

export const Contacto = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const { isOpen, language } = useContext(LanguageContext);

  const handleClick = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <Console />
      {language == 'es' ? (
        <div className={`tarjeta ${isOpen ? "console-open" : "console-closed"}`}>
        <div
          className="card-container"
          onClick={() => setIsFlipped(!isFlipped)}
        >
          <div className={`card ${isFlipped ? "flipped" : ""}`}>
            <div className="card-front">
              <div className="card-front-content">
                <div className="cardHead">
                  <h2>Pedro Antonio Sánchez Pérez</h2>
                  <p>Programador y maestro</p>
                </div>
                <div className="locationSection">
                  <p>+34 630 75 63 98</p>
                  <p>San Javier (Murcia, España)</p>
                  <p>petech93@gmail.com</p>
                </div>
                <div className="netSection">
                  <a href="https://github.com/PeterTech3" target="_blank">
                    <img
                      src={githubLogo}
                      style={{ width: "80%" }}
                      alt="gitHubLogo"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/pedro-antonio-s%C3%A1nchez-p%C3%A9rez-b07535296/"
                    target="_blank"
                  >
                    <img
                      src={linkedinLogo}
                      style={{ width: "100%" }}
                      alt="LinkedinLogo"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="card-back">
              <h2>Contáctame</h2>
              <form className="w-full max-w-sm" onClick={handleClick}>
                <div >
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="from"
                    type="text"
                    placeholder="Tu email"
                  />
                </div>
                <div >
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="subject"
                    type="text"
                    placeholder="Asunto"
                  />
                </div>
                <div>
                  <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="message"
                    placeholder="Tu mensaje"
                  ></textarea>
                </div>
                <div className="flex justify-center align-center items-center send">
                  <button
                    className="text-white font-bold py-0 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      ) : 
      (
        <div className={`tarjeta ${isOpen ? "console-open" : "console-closed"}`}>
        <div
          className="card-container"
          onClick={() => setIsFlipped(!isFlipped)}
        >
          <div className={`card ${isFlipped ? "flipped" : ""}`}>
            <div className="card-front">
              <div className="card-front-content">
                <div className="cardHead">
                  <h2>Pedro Antonio Sánchez Pérez</h2>
                  <p>Programmer and teacher</p>
                </div>
                <div className="locationSection">
                  <p>+34 630 75 63 98</p>
                  <p>San Javier (Murcia, Spain)</p>
                  <p>petech93@gmail.com</p>
                </div>
                <div className="netSection">
                  <a href="https://github.com/PeterTech3" target="_blank">
                    <img
                      src={githubLogo}
                      style={{ width: "80%" }}
                      alt="gitHubLogo"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/pedro-antonio-s%C3%A1nchez-p%C3%A9rez-b07535296/"
                    target="_blank"
                  >
                    <img
                      src={linkedinLogo}
                      style={{ width: "100%" }}
                      alt="LinkedinLogo"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="card-back">
              <h2>Contact me</h2>
              <form className="w-full max-w-sm" onClick={handleClick}>
                <div className="mb-4">
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="from"
                    type="text"
                    placeholder="Tu email"
                  />
                </div>
                <div className="mb-4">
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="subject"
                    type="text"
                    placeholder="Asunto"
                  />
                </div>
                <div className="mb-6">
                  <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="message"
                    placeholder="Tu mensaje"
                  ></textarea>
                </div>
                <div className="flex justify-center align-center items-center send">
                  <button
                    className="text-white font-bold py-0 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      )
      }
      
    </>
  );
};
