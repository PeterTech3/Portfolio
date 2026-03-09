import { useContext, useEffect, useRef, useState } from "react";
import { LanguageContext } from "../context/languageContext";
import { useNavigate, useLocation } from "react-router-dom";
import { ScrollToTop } from "./ScrollTop";

export const Console = () => {
  const { language, toggleLanguage, isOpen, setIsOpen } =
    useContext(LanguageContext);
  const navigate = useNavigate();
  const location = useLocation();
  const inputRef = useRef(null);

  // Inicialización de estado limpia
  const [lines, setLines] = useState(
    () => JSON.parse(localStorage.getItem("consoleLines")) || [],
  );
  const [history, setHistory] = useState(
    () => JSON.parse(localStorage.getItem("commandHistory")) || [],
  );
  const [historyIndex, setHistoryIndex] = useState(-1);

  const isTransparent = ["/", "/home", "/education", "/contact"].includes(
    location.pathname,
  );

  // Sincronización con LocalStorage
  useEffect(() => {
    localStorage.setItem("consoleLines", JSON.stringify(lines));
    localStorage.setItem("commandHistory", JSON.stringify(history));
  }, [lines, history]);

  // Auto-focus y Auto-scroll
  useEffect(() => {
    if (isOpen && inputRef.current) inputRef.current.focus();
    const container = document.getElementById("console-scroll-area");
    if (container) container.scrollTop = container.scrollHeight;
  }, [isOpen, lines]);

  const handleCommand = (inputValue) => {
    const command = inputValue.trim().toLowerCase();

    // Mapeo de comandos a rutas reales
    const routesMap = {
      // ES
      "/inicio": "/home",
      "/sobremi": "/about",
      "/formacion": "/education",
      "/experiencia": "/experience",
      "/proyectos": "/proyects",
      "/contacto": "/contact",
      // EN
      "/home": "/home",
      "/about": "/about",
      "/education": "/education",
      "/experience": "/experience",
      "/projects": "/proyects",
      "/contact": "/contact",
    };

    let response = "";

    // 1. Comando Ayuda
    if (command === "/help") {
      response =
        language === "es"
          ? "Comandos: /help, /clear, /inicio, /sobremi, /formacion, /experiencia, /proyectos, /idioma, /contacto"
          : "Commands: /help, /clear, /home, /about, /education, /experience, /projects, /language, /contact";
    }
    // 2. Comando Limpiar
    else if (command === "/clear") {
      setLines([]);
      return; // Salimos para no agregar la línea de "clear" al historial visible
    }
    // 3. Comando Idioma (Toggle)
    else if (command === "/idioma" || command === "/language") {
      toggleLanguage();
      response =
        language === "es" ? "Cambiando a Inglés..." : "Changing to Spanish...";
    }
    // 4. Comandos de Navegación
    else if (routesMap[command]) {
      const targetPath = routesMap[command];
      navigate(targetPath);
      response =
        language === "es"
          ? `Navegando a ${command}...`
          : `Navigating to ${command}...`;
    }
    // 5. Comando no encontrado
    else {
      response =
        language === "es"
          ? `Comando no encontrado: ${command}`
          : `Command not found: ${command}`;
    }

    // Añadimos el comando y la respuesta a la consola
    setLines((prev) => [
      ...prev,
      `recruiter@recruiter:$ ${inputValue}`,
      response,
    ]);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && e.target.value.trim()) {
      const val = e.target.value;
      setHistory((prev) => [...prev, val]);
      handleCommand(val);
      e.target.value = "";
      setHistoryIndex(-1);
    } else if (e.key === "ArrowUp") {
      const nextIndex =
        historyIndex === -1
          ? history.length - 1
          : Math.max(historyIndex - 1, 0);
      if (history[nextIndex]) {
        setHistoryIndex(nextIndex);
        e.target.value = history[nextIndex];
      }
    } else if (e.key === "ArrowDown") {
      const nextIndex = historyIndex + 1;
      if (nextIndex < history.length) {
        setHistoryIndex(nextIndex);
        e.target.value = history[nextIndex];
      } else {
        setHistoryIndex(-1);
        e.target.value = "";
      }
    }
  };

  return (
    <>
      <ScrollToTop />
      {/* Botón de Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-5 right-5 z-50 px-4 py-2 bg-green-500/20 border border-green-500 text-green-500 font-special hover:bg-green-500 hover:text-black transition-all cursor-pointer rounded"
      >
        {language === "es"
          ? isOpen
            ? "Cerrar Consola"
            : "Abrir Consola"
          : isOpen
            ? "Close Console"
            : "Open Console"}
      </button>

      {/* Contenedor de la Consola */}
      <div
        className={`
        fixed bottom-0 left-0 w-full transition-all duration-500 z-40
        ${isOpen ? "h-1/2 opacity-100" : "h-0 opacity-0 pointer-events-none"}
      `}
      >
        <div
          id="console-scroll-area"
          className={`
    w-full h-full p-4 font-special text-sm md:text-base
    /* Usamos overflow-y-auto para que solo aparezca si el texto desborda */
    overflow-y-auto overflow-x-hidden
    ${isTransparent ? "bg-zinc-950/80 backdrop-blur-xl" : "bg-black"}
    border-t border-green-500/50 text-green-400
    /* Esto evita que el padding y el border sumen al alto total */
    box-border
  `}
          style={{ scrollbarWidth: "none" }}
        >
          {lines.map((line, i) => (
            <div key={i} className="mb-1">
              <span className="opacity-80">{line}</span>
            </div>
          ))}
          <div className="flex items-center gap-2">
            <span className="text-green-500 shrink-0">
              recruiter@recruiter:$
            </span>
            <input
              ref={inputRef}
              onKeyDown={handleKeyDown}
              className="bg-transparent border-none outline-none text-green-400 w-full"
              type="text"
              spellCheck="false"
              autoComplete="off"
            />
          </div>
        </div>
      </div>
    </>
  );
};
