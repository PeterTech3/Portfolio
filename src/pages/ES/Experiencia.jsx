import { useContext, useEffect } from "react";
import { Console } from "../../components/Console";
import { ExperienceCard } from "../../components/ExperienceCard";
import { LanguageContext } from "../../context/languageContext";
import "../../assets/styles/experience.scss";
import Niup from "../../assets/images/niup.png";
import experiencia_educativa from "../../assets/images/experiencia_educativa.png";
import sanJorge from "../../assets/images/sanJorge.png";
import hispania from "../../assets/images/hispania.jpg";

export const Experiencia = () => {
  const { isOpen, language } = useContext(LanguageContext);

  const esExperiences = [
    {
      imageSrc: Niup,
      title: "Programador front-end. Braga (Portugal)",
      description: (
        <ul className="list-disc pl-5 space-y-2">
          <li className="text-lg">
            Realización de revisiones, pruebas de funcionalidad y depuración de
            código
          </li>
          <li className="text-lg">
            Participación en reuniones de planificación.
          </li>
          <li className="text-lg">
            Diseño y desarrollo de interfaces de usuario atractivas y
            funcionales
          </li>
          <li className="text-lg">
            Implementación de frameworks y bibliotecas populares como React,
            Angular y Stencil.js
          </li>
          <li className="text-lg">
            Elaboración de código de calidad testeable
          </li>
          <li className="text-lg">
            Utilización de herramientas de control de versiones como Git para
            mantener el código organizado.
          </li>
          <li className="text-lg">Documentación de código.</li>
          <li className="text-lg">
            Desarrollo de aplicaciones web responsivas y compatibles con
            múltiples navegadores.
          </li>
        </ul>
      ),
      lugar: "NIUP Technologies. 2024.",
    },
    {
      imageSrc: experiencia_educativa,
      title: "Monitor de programación. Murcia (España)",
      description: (
        <p className="text-lg">
          Enseñanza de programación básica a niños de entre 8 y 14 años con
          Scratch y Roblox.
        </p>
      ),
      lugar: "Experiencia Educativa S.L. 2023.",
    },
    {
      imageSrc: sanJorge,
      title: "Maestro covid. Murcia (España)",
      description: (
        <p className="text-lg">
          Enseñanza telemática y semipresencial de todas las asignaturas,
          durante la época covid y a alumnos de todas las edades de educación
          primaria
        </p>
      ),
      lugar: "Colegio San Jorge. 2021.",
    },
    {
      imageSrc: hispania,
      title: "Maestro tutor. Murcia (España)",
      description: (
        <p className="text-lg">
          Enseñanza a un grupo de alumnos de 3º a título de tutor.
        </p>
      ),
      lugar: "Colegio Hispania. 2019.",
    },
  ];

  const enExperiences = [
    {
      imageSrc: Niup,
      title: "Front-end Developer. Braga (Portugal)",
      description: (
        <ul className="list-disc pl-5 space-y-2">
          <li className="text-lg">
            Conducting reviews, functionality tests, and code debugging
          </li>
          <li className="text-lg">
            Participating in planning meetings
          </li>
          <li className="text-lg">
            Designing and developing attractive and functional user interfaces
          </li>
          <li className="text-lg">
            Implementing popular frameworks and libraries such as React,
            Angular, and Stencil.js
          </li>
          <li className="text-lg">
            Writing quality testable code
          </li>
          <li className="text-lg">
            Using version control tools like Git to keep the code organized
          </li>
          <li className="text-lg">Documenting code</li>
          <li className="text-lg">
            Developing responsive web applications compatible with multiple browsers
          </li>
        </ul>
      ),
      lugar: "NIUP Technologies. 2024.",
    },
    {
      imageSrc: experiencia_educativa,
      title: "Programming Instructor. Murcia (Spain)",
      description: (
        <p className="text-lg">
          Teaching basic programming to children aged 8 to 14 using Scratch and Roblox.
        </p>
      ),
      lugar: "Experiencia Educativa S.L. 2023.",
    },
    {
      imageSrc: sanJorge,
      title: "Covid Teacher. Murcia (Spain)",
      description: (
        <p className="text-lg">
          Online and hybrid teaching of all subjects during the covid era to primary school students of all ages.
        </p>
      ),
      lugar: "San Jorge School. 2021.",
    },
    {
      imageSrc: hispania,
      title: "Tutor Teacher. Murcia (Spain)",
      description: (
        <p className="text-lg">
          Teaching a group of 3rd-grade students as a homeroom teacher.
        </p>
      ),
      lugar: "Hispania School. 2019.",
    },
];


  let experiences = language === "es" ? esExperiences : enExperiences;

  useEffect(() => {
    experiences = language === "es" ? esExperiences : enExperiences;
    console.log(experiences);
  }, [language]);

  return (
    <>
      <Console />
      <div className={`consol ${isOpen ? "console-open" : "console-closed"}`}>
        {experiences.map((exp, index) => (
          <ExperienceCard
            key={index}
            imageSrc={exp.imageSrc}
            title={exp.title}
            description={exp.description}
            reverse={index % 2 !== 0}
            lugar={exp.lugar}
          />
        ))}
      </div>
    </>
  );
};
