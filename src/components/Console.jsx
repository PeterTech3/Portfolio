import { useContext, useEffect, useRef, useState } from "react";
import { LanguageContext } from "../context/languageContext";
import { useNavigate } from "react-router-dom";
import "../assets/styles/console.scss";
import { useLocation } from "react-router-dom";
import { ScrollToTop } from "./ScrollTop";

export const Console = () => {
  const [lines, setLines] = useState(() => {
    const savedLines = localStorage.getItem('consoleLines');
    return savedLines ? JSON.parse(savedLines) : [];
  });
  const [history, setHistory] = useState(() => {
    const savedHistory = localStorage.getItem('commandHistory');
    return savedHistory ? JSON.parse(savedHistory) : [];
  });
  const [historyIndex, setHistoryIndex] = useState(history.length);
  const inputRef = useRef(null);
  const [pendingCommand, setPendingCommand] = useState(null);
  const { language, toggleLanguage, isOpen, setIsOpen } =
    useContext(LanguageContext);
  const navigate = useNavigate();
  const location = useLocation();
  const isTransparent =
    location.pathname === "/" ||
    location.pathname === "/home" ||
    location.pathname === "/education" ||
    location.pathname === "/contact";

  //guarda en el local las lineas escritas
  useEffect(() => {
    localStorage.setItem('consoleLines', JSON.stringify(lines));
  }, [lines]);

  //guarda en el local el nuevo history
  useEffect(() => {
    localStorage.setItem('commandHistory', JSON.stringify(history));
  }, [history]);

  //focus en el input al abrir la consola y escribir linea
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, lines]);

  //retardo para guardar en el local un comando valido
  useEffect(() => {
    if (pendingCommand) {
      handleCommand(pendingCommand);
      setPendingCommand(null);
    }
  }, [pendingCommand]);

  //navegador entre los comandos insertados con las flechas
  useEffect(() => {
    if (historyIndex >= 0 && historyIndex < history.length) {
      inputRef.current.value = history[historyIndex];
    } else if (historyIndex === -1) {
      inputRef.current.value = "";
    } else if (historyIndex > history.length - 1) {
      inputRef.current.value = "";
    }
  }, [history, historyIndex]);

  //scrollea hacia abajo segun me salgo de la consola
  useEffect(() => {
    const consoleContainer = document.getElementById("console-container");
    consoleContainer.scrollTop = consoleContainer.scrollHeight;
  }, [lines]);

  const handleCommand = (inputValue) => {
    const parts = inputValue.split(" ");
    const command = parts[0];
    const args = parts.slice(1);

    const commands = {
      "/help":
        language === "es"
          ? "Comandos disponibles: \n\t/help\n\t/clear\n\t/inicio\n\t/sobremi\n\t/formacion\n\t/experiencia\n\t/proyectos\n\t/idioma\n\t/contacto"
          : "Available commands:\n\t/help\n\t/clear\n\t/home\n\t/about\n\t/education\n\t/experience\n\t/projects\n\t/language\n\t/contact",
      //ES
      "/clear": () => {
        setLines([]);
      },
      "/sobremi": () => {
        navigate("/about");
      },
      "/formacion": () => {
        navigate("/education");
      },
      "/experiencia": () => {
        navigate("/experience");
      },
      "/idioma": () => toggleLanguage(),
      "/inicio": () => {
        navigate("/home");
      },
      "/proyectos": () => {
        navigate("/proyects");
      },
      "/contacto": () => {
        navigate("/contact");
      },
      //EN
      "/about": () => {
        navigate("/about");
      },
      "/education": () => {
        navigate("/education");
      },
      "/experience": () => {
        navigate("/experience");
      },
      "/language": () => toggleLanguage(),
      "/home": () => {
        navigate("/home");
      },
      "/projects": () => {
        navigate("/proyects");
      },
      "/contact": () => {
        navigate("/contact");
      },
    };

    if (commands[command]) {
      if (typeof commands[command] === "function") {
        commands[command](args);
        setLines((prevLines) => [
          ...prevLines,
          `recruiter@recruiter:$ ${inputValue}`,
          commands[command],
        ]);
      } else {
        setLines((prevLines) => [
          ...prevLines,
          `recruiter@recruiter:$ ${inputValue}`,
          commands[command],
        ]);
      }
    } else {
      setLines((prevLines) => [
        ...prevLines,
        `recruiter@recruiter:$ ${inputValue}`,
        `Comando no encontrado: ${inputValue}`,
      ]);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      const inputValue = event.target.value;
      setHistory((prevHistory) => [...prevHistory, inputValue]);
      setHistoryIndex(-1);
      setPendingCommand(inputValue);
      event.target.value = "";
    } else if (event.key === "ArrowUp") {
      if (historyIndex === -1){
        console.log('keyup - 1');
        let maxLenght = history.length
        setHistoryIndex(() => maxLenght - 1, 0);

      } else {
        console.log('keyup != -1');

        setHistoryIndex((prevIndex) => Math.max(prevIndex - 1, 0));
      }
    } else if (event.key === "ArrowDown") {
      console.log('keydown');

      setHistoryIndex((prevIndex) =>
        Math.min(prevIndex + 1, history.length)
      );
    }
  };

  const getButtonText = () => {
    if (language === "es") {
      return isOpen ? "Cerrar Consola" : "Abrir Consola";
    } else if (language === "en") {
      return isOpen ? "Close Console" : "Open Console";
    }
  };

  return (
    <>
        <ScrollToTop />
        <div className="top-container">
          <div className="toggle-button" onClick={() => setIsOpen(!isOpen)}>
            {getButtonText()}
          </div>
          <div className={`console-container ${isOpen ? "open" : "closed"} `}>
            <div id="console-container" className={`console ${isTransparent ? "transparent" : ""}`}>
              {lines.map((line, index) => (
                <div className="input-line" key={index}>
                  <span className="prompt"> </span>
                  <span className="console-text">{line}</span>
                </div>
              ))}
              <div className="input-line">
                <span className="prompt">recruiter@recruiter:$ </span>
                <input
                  type="text"
                  ref={inputRef}
                  onKeyDown={handleKeyDown}
                  autoFocus
                />
              </div>
            </div>
          </div>
        </div>
    </>
  );
};
