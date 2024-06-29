import { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom"; // Para usar el nombre RouterLink en vez de Link
import { Link as ScrollLink, Events } from "react-scroll";
import "../assets/styles/proyectsSidebar.scss";
import chess from "../assets/images/chessBg.jpeg"


export const Sidebar = ({ sections }) => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    Events.scrollEvent.register("begin", (to) => {
      setActiveSection(to);
    });

    return () => {
      Events.scrollEvent.remove("begin");
    };
  }, []);

  return (
    <div className={`sidebar ${activeSection}`}>
      {sections.map((section) => (
        <ScrollLink
          key={section.name}
          to={section.name}
          smooth={true}
          duration={500}
          spy={true}
          onSetActive={() => setActiveSection(section.name)}
          className={`link ${
            activeSection === section.name ? 'active' : ''
          }`}
            style={{
            color:
              activeSection === "Ajedrez"
                ? "white"
                : activeSection === "Pokedex"
                ? "red"
                : activeSection === "GestorGuardias"
                ? "blue"
                : "#000",
            fontFamily:
              activeSection === "Ajedrez"
                  ? "Playwrite GB S"
                  : activeSection === "Pokedex"
                  ? "Pokemon Solid"
                  : activeSection === "GestorGuardias"
                  ? "Gloria Hallelujah"
                  : "serif",
          }}
        >
          {section.name}
        </ScrollLink>
      ))}
    </div>
  );
};
