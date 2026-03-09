import { Console } from "../../components/Console";
import { AnimatedMessages } from "../../components/AnimatedMsg";
import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../../context/languageContext";
import "../../index.css";
import { ParticlesBackground } from "../../components/Backgroud";

export const Home = () => {
  const [showMessage, setShowMessage] = useState(false);
  const { isOpen } = useContext(LanguageContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const options = {
    fpsLimit: 60,
    fullScreen: { enable: true, zIndex: -1 },
    particles: {
      number: {
        value: 100,
        density: { enable: true, area: 800 },
      },
      color: { value: "#00ff00" },
      shape: {
        type: "char", // Asegúrate de usar "char" o "character"
        options: {
          char: {
            value: ["0", "1", "{", "}", "/>", "JS", "HTML", "C#"],
            font: "Monospace",
            style: "",
            weight: "400",
          },
        },
      },
      opacity: {
        value: { min: 0.1, max: 0.6 },
      },
      size: {
        value: { min: 10, max: 16 },
      },
      move: {
        enable: true,
        speed: 3, // Un poco más rápido para efecto Matrix
        direction: "bottom",
        straight: true, // Caída vertical pura
        outModes: { default: "out" },
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse", // Las letras se apartan del ratón
        },
        onClick: {
          enable: true,
          mode: "push",
        },
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4,
        },
        push: {
          quantity: 1,
        },
      },
    },
    detectRetina: true,
  };

  return (
    <div className="bg-black min-h-screen w-full relative">
      <Console />

      {/* Aplicamos el filtro a un contenedor intermedio */}
      <main
        className={`relative w-full h-screen transition-all duration-700 ${isOpen ? "blur-lg brightness-40 scale-105" : "blur-0 brightness-100 scale-100"}`}
      >
        <ParticlesBackground config={options} id="tsparticles_home" />

        <div
          className={`
          absolute inset-0 flex justify-center items-center font-special
          transition-opacity duration-1000
          ${showMessage ? "opacity-100" : "opacity-0"}
        `}
        >
          <div className="text-2xl md:text-[3rem] lg:text-[5rem] text-center px-4">
            <AnimatedMessages />
          </div>
        </div>
      </main>
    </div>
  );
};
