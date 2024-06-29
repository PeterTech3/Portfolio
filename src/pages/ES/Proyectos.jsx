import { Console } from "../../components/Console";
import "../../assets/styles/proyects.scss";
import React, { useContext, useEffect } from "react";
import { Section } from "../../components/SectionContainer";
import chessVideo from "../../assets/videos/ReactChess.mp4";
import pokedex from "../../assets/images/PokedexLogo.png";
import onCallsVideo from '../../assets/videos/gestor_guardias.mp4' 
import pokedexVideo from "../../assets/videos/PokedexReact.mp4";
import { LanguageContext } from "../../context/languageContext";

const esSections = [
  {
    name: "Ajedrez",
    videoSrc: chessVideo,
    title: "React-Ajedrez",
    info: (
      <>
        <p>
          Aplicación de juego de ajedrez realizado 100% en React cuando aún
          estaba en el grado aprendiendo este maravilloso framework. <br />
          El programa, sin manejar el problema de las "tablas" del ajedrez,
          permite jugar una partida hasta el final (considerándose final la
          caída del Rey). Entonces, aparece un pop-up felicitando al ganador.
        </p>
      </>
    ),
  },
  {
    name: "Pokedex",
    imgSrc: pokedex,
    videoSrc: pokedexVideo,
    info: (
      <>
        <p>
          Aplicación de búsqueda de información de cualquier pokemon existente
          en la pokedex del momento. <br />
          Fue desarrollada cuando estaba aprendiendo React, y ocurrió así para
          practicar las llamadas a las API (la app hace llamadas a la pokeAPI).
          <br />
          El programa devuelve los tipos del pokemon, así como sus habilidades y
          estadísticas desglosadas.
        </p>
      </>
    ),
  },
  {
    name: "GestorGuardias",
    videoSrc: onCallsVideo,
    title: "Gestor Guardias",
    info: (
      <>
        <p>
          Aplicación Web desarrollada en <u>Django + React + Bootstrap</u>{" "}
          durante mi estancia de Erasmus en Portugal, como Proyecto de Fin de
          Grado. <br />
          Se trata de un gestor para las guardias de un centro educativo. Desde
          esta aplicación un docente puede registrar una ausencia, para que,
          automáticamente, se asigne un maestro de guardia para esa ausencia.{" "}
          <br />
          También ofrece un apartado administrativo y varias funcionalidades
          más. La aplicación está en continua evolución, añadiendo nuevas
          funcionalidades y mejorando diversos aspectos de la misma.
        </p>
      </>
    ),
  },
];

const enSections = [
  {
    name: "Ajedrez",
    videoSrc: chessVideo,
    title: "React-Chess",
    info: (
      <>
        <p>
          Chess game application made 100% in React while still in the degree learning this wonderful framework. <br />
          The program, without handling the problem of chess "draws," allows playing a game until the end (considering the fall of the King as the end). Then, a pop-up appears congratulating the winner.
        </p>
      </>
    ),
  },
  {
    name: "Pokedex",
    imgSrc: pokedex,
    videoSrc: pokedexVideo,
    info: (
      <>
        <p>
          Application for searching information on any existing Pokemon in the current Pokedex. <br />
          It was developed while I was learning React, and it was done this way to practice API calls (the app makes calls to the PokeAPI). <br />
          The program returns the Pokemon's types, as well as its abilities and detailed statistics.
        </p>
      </>
    ),
  },
  {
    name: "GestorGuardias",
    videoSrc: onCallsVideo,
    title: "On-Call Manager",
    info: (
      <>
        <p>
          Web application developed in <u>Django + React + Bootstrap</u> during my Erasmus stay in Portugal, as a Final Degree Project. <br />
          It is a manager for the on-call duties of an educational center. From this application, a teacher can register an absence, so that a substitute teacher is automatically assigned for that absence. <br />
          It also offers an administrative section and several other features. The application is continuously evolving, adding new functionalities and improving various aspects of it.
        </p>
      </>
    ),
  },
];


export const Proyectos = () => {
  const { isOpen, language } = useContext(LanguageContext);
  let sections = language === "es" ? esSections : enSections;

  useEffect(() => {
    sections = language === "es" ? esSections : enSections;
    console.log(sections);
  }, [language]);
  
  return (
    <>
      <Console />
      <div className={isOpen ? "console-open" : "console-closed"}></div>
      {sections.map((section, index) => (
        
          <Section
            key={section.name}
            name={section.name}
            videoSrc={section.videoSrc}
            clase={`box box-${index}`}
            imgSrc={section.imgSrc}
            text={section.info}
            title={section.title}
            navbarSections={esSections}
          ></Section>
        
      ))}
    </>
  );
};
