import githubLogo from "../../assets/images/github.png";
import linkedinLogo from "../../assets/images/linkedin.png";
import "aos/dist/aos.css";
import "../../assets/styles/contact.scss";
import { useContext, useState } from "react";
import { Console } from "../../components/Console";
import { LanguageContext } from "../../context/languageContext";
import { ContactForm } from "../../components/ContactForm";

export const Contacto = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const { isOpen, language } = useContext(LanguageContext);

 

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
            <div className="card-back" onClick={handleClick}>
              <h2>Contáctame</h2>
              <ContactForm/>
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
                  <hr />
                  <p>Programmer and teacher</p>
                </div>
                <div className="locationSection">
                  <p>+34 630 75 63 98</p>
                  <hr />
                  <p>San Javier (Murcia, Spain)</p>
                  <hr />
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
            <div className="card-back" >
              <h2>Contact me</h2>
              <ContactForm/>
            </div>
          </div>
        </div>
      </div>
      )
      }
      
    </>
  );
};
