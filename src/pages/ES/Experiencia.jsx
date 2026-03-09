import { useContext } from "react";
import { Console } from "../../components/Console";
import { ExperienceCard } from "../../components/ExperienceCard";
import { LanguageContext } from "../../context/languageContext";
import Niup from "../../assets/images/niup.png";
import experiencia_educativa from "../../assets/images/experiencia_educativa.png";
import sanJorge from "../../assets/images/sanJorge.png";
import hispania from "../../assets/images/hispania.jpg";
import teku from "../../assets/images/teku.png";
import "../../assets/styles/experience.scss";
import { ParticlesBackground } from "../../components/Backgroud";

export const Experiencia = () => {
  const { isOpen, language } = useContext(LanguageContext);

  const content = {
    es: [
      {
        imageSrc: teku,
        title:
          "Programador Fullstack & Multi-platform. El Mirador (Murcia, España)",
        description: (
          <ul className="space-y-4">
            <li className="text-lg">
              <b>Desarrollo integral de aplicaciones:</b> desde la toma de requisitos y
              consultoría con clientes hasta el despliegue final.
            </li>
            <li className="text-lg">
              <b>Ecosistema Web:</b> Desarrollo con <b>React</b> (Frontend) y{" "}
              <b>Node.js / Laravel</b> (Backend).
            </li>
            <li className="text-lg">
              <b>Desarrollo Mobile:</b> Creación de apps nativas e híbridas con{" "}
              <b>Flutter (Dart)</b>, <b>Expo + React Native</b> y{" "}
              <b>Android (Java/Kotlin)</b>.
            </li>
            <li className="text-lg">
              <b>Entorno .NET:</b> Creación de APIs, servicios y aplicaciones de
              escritorio con <b>C# y VB</b>.
            </li>
            <li className="text-lg">
              <b>Sistemas y DevOps:</b> Gestión de servidores de correo, DNS, dominios
              y virtualización con <b>Docker</b>.
            </li>
            <li className="text-lg">
              <b>Mantenimiento y Seguridad:</b> Programación avanzada en WordPress y
              limpieza de infecciones/malware en sitios web.
            </li>
          </ul>
        ),
        lugar: "Teku Systems S.L. 2024 - Actualmente.",
      },
      {
        imageSrc: Niup,
        title: "Programador Front-end. Braga (Portugal)",
        description: (
          <ul className="space-y-4">
            {" "}
            {/* Solo dejamos el espacio entre elementos */}
            <li className="text-lg">
              Diseño y desarrollo de interfaces de usuario funcionales con{" "}
              <b>React, Angular y Stencil.js</b>.
            </li>
            <li className="text-lg">
              Realización de revisiones, pruebas de funcionalidad y depuración
              de código de calidad testeable.
            </li>
            <li className="text-lg">
              Desarrollo de aplicaciones web responsivas y compatibles con
              múltiples navegadores.
            </li>
            <li className="text-lg">
              Uso de herramientas de control de versiones (Git) y participación
              activa en reuniones de planificación.
            </li>
          </ul>
        ),
        lugar: "NIUP Technologies. 2024.",
      },
      {
        imageSrc: experiencia_educativa,
        title: "Profesor de Programación. Murcia (España)",
        description: (
          <p className="text-lg">
            Enseñanza de lógica de programación y pensamiento computacional a
            niños de entre 8 y 12 años, simplificando conceptos técnicos
            complejos.
          </p>
        ),
        lugar: "Experiencia Educativa S.L. 2023.",
      },
    ],
    en: [
      {
        imageSrc: teku,
        title: "Fullstack & Multi-platform Developer",
        description: (
          <ul className="list-disc pl-5 space-y-2">
            <li className="text-lg">
              Full-cycle software development: from client requirements
              gathering to final deployment and maintenance.
            </li>
            <li className="text-lg">
              Web Ecosystem: Development with <b>React</b> (Frontend) and{" "}
              <b>Node.js / Laravel</b> (Backend).
            </li>
            <li className="text-lg">
              Mobile Development: Creating native and hybrid apps using{" "}
              <b>Flutter (Dart)</b>, <b>Expo + React Native</b>, and{" "}
              <b>Android (Java/Kotlin)</b>.
            </li>
            <li className="text-lg">
              .NET Environment: Developing APIs, services, and desktop
              applications with <b>C# and VB</b>.
            </li>
            <li className="text-lg">
              Systems & DevOps: Managing email servers, DNS, domains, and{" "}
              <b>Docker</b> virtualization.
            </li>
            <li className="text-lg">
              Maintenance & Security: Advanced WordPress programming and website
              malware detection and removal.
            </li>
          </ul>
        ),
        lugar: "Teku Systems S.L. 2024 - Currently.",
      },
      {
        imageSrc: Niup,
        title: "Front-end Developer. Braga (Portugal)",
        description: (
          <ul className="list-disc pl-5 space-y-2">
            <li className="text-lg">
              Designing and developing functional user interfaces using{" "}
              <b>React, Angular, and Stencil.js</b>.
            </li>
            <li className="text-lg">
              Conducting reviews, functionality tests, and writing quality
              testable code.
            </li>
            <li className="text-lg">
              Developing responsive web applications with cross-browser
              compatibility.
            </li>
            <li className="text-lg">
              Using Git for version control and participating in agile planning
              meetings.
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
            Teaching programming logic and computational thinking to children
            aged 8 to 12, simplifying complex technical concepts.
          </p>
        ),
        lugar: "Experiencia Educativa S.L. 2023.",
      },
    ],
  };

  const experiences = content[language];

  const options = {
    fpsLimit: 60,
    fullScreen: { enable: true, zIndex: 1 },
    particles: {
      number: {
        value: 60,
        density: { enable: true, area: 900 },
      },
      color: { value: "#22c55e" }, // Tu verde de marca
      shape: {
        type: "circle",
      },
      opacity: {
        value: { min: 0.05, max: 0.3 },
      },
      size: {
        value: { min: 1, max: 2 },
      },
      links: {
        enable: true,
        distance: 150,
        color: "#22c55e",
        opacity: 0.15,
        width: 1,
      },
      move: {
        enable: true,
        speed: 0.6, // Muy suave
        direction: "top", // Movimiento hacia arriba (simboliza crecimiento/trayectoria)
        random: false,
        straight: false,
        outModes: { default: "out" },
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "connect", // Las partículas cercanas se conectan al ratón
        },
        onClick: {
          enable: true,
          mode: "push",
        },
      },
      modes: {
        connect: {
          distance: 200,
          links: { opacity: 0.4 },
          radius: 150,
        },
        push: {
          quantity: 3,
        },
      },
    },
    detectRetina: true,
  };

  return (
    /* El padre tiene el color y es relativo */
    <div className="relative w-full min-h-screen bg-[#0a0f18] overflow-x-hidden">
      {/* 1. La consola suele ir arriba del todo */}
      <Console />

      {/* 2. Las partículas con un ID ÚNICO y zIndex controlado */}
      <ParticlesBackground
        config={options}
        id="tsparticles_experience_unique" // Cambia el ID para forzar refresco
      />

      {/* 3. El contenido con la clase .consol que ya tiene z-index: 10 en el SCSS */}
      <div
        className={`consol ${isOpen ? "console-open" : "console-closed"} w-full`}
      >
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
    </div>
  );
};
