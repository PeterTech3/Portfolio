import { useContext, useEffect, useMemo, useState } from "react";
import { LanguageContext } from "../context/languageContext";

export const AnimatedMessages = () => {
  const { language } = useContext(LanguageContext);

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // 1. Memorizamos los mensajes para evitar cálculos innecesarios
  const messages = useMemo(() => {
    return language === "es"
      ? [
          "Bienvenido a mi Portfolio",
          "Abre la consola",
          "Escribe /help para empezar",
        ]
      : ["Welcome to my Portfolio", "Open the console", "Type /help to start"];
  }, [language]);

  useEffect(() => {
    const currentFullText = messages[currentMessageIndex];

    // 2. Definimos la velocidad según si está escribiendo o esperando
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Escribiendo
        setDisplayedText(currentFullText.slice(0, displayedText.length + 1));

        if (displayedText === currentFullText) {
          // Pausa cuando termina de escribir
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Borrando
        const nextText = currentFullText.slice(0, displayedText.length - 1);
        setDisplayedText(nextText);

        // Si ya se borró todo el texto
        if (displayedText === "") {
          setIsDeleting(false);
          // Cambiamos al siguiente mensaje
          setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
          // IMPORTANTE: Limpiamos el texto explícitamente para el siguiente ciclo
          setDisplayedText("");
        }
      }
    }, typingSpeed);

    // 3. LIMPIEZA: Fundamental para evitar bugs al actualizar versiones
    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentMessageIndex, messages]);

  return (
    <h1 className="text-white text-center drop-shadow-lg">
      {displayedText}
      <span className="animate-blink ml-1">|</span>
    </h1>
  );
};
