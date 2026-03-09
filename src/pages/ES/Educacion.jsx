import { Console } from "../../components/Console";
import { Cube } from "../../components/Cube";
import { useContext } from "react";
import { LanguageContext } from "../../context/languageContext";
import { ParticlesBackground } from "../../components/Backgroud";

export const Educacion = () => {
  const { isOpen, language } = useContext(LanguageContext);

  const content = {
    es: [
      {
        front: (
          <>
            <p className="font-bold text-green-400">CFGS</p>{" "}
            <p>Desarrollo de Aplicaciones Web</p>
            <p className="text-sm mt-2 opacity-70">IES Dos Mares. 2024.</p>
          </>
        ),
        back: (
          <p>
            Diseño, creación, desarrollo y mantenimiento de aplicaciones web
            profesionales.
          </p>
        ),
      },
      {
        front: (
          <>
            <p className="font-bold text-green-400">FullStack Developer</p>{" "}
            <p>Python + Django</p>
            <p className="text-sm mt-2 opacity-70">Udemy. 2023.</p>
          </>
        ),
        back: (
          <p>
            Creación de aplicaciones web robustas con back-end en Django y
            front-end dinámico.
          </p>
        ),
      },
      {
        front: (
          <>
            <p className="font-bold text-green-400">Máster AACC</p>{" "}
            <p>Altas Capacidades</p>
            <p className="text-sm mt-2 opacity-70">UCLM. 2019.</p>
          </>
        ),
        back: (
          <p>
            Especialización en la identificación y apoyo educativo a alumnos con
            altas capacidades.
          </p>
        ),
      },
      {
        front: (
          <>
            <p className="font-bold text-green-400">Máster Montessori</p>{" "}
            <p>Educación Primaria</p>
            <p className="text-sm mt-2 opacity-70">Univ. Barcelona. 2018.</p>
          </>
        ),
        back: (
          <p>
            Aplicación del método Montessori para fomentar la autonomía en
            etapas escolares.
          </p>
        ),
      },
      {
        front: (
          <>
            <p className="font-bold text-green-400">Grado Educación</p>{" "}
            <p>Primaria</p>
            <p className="text-sm mt-2 opacity-70">Univ. Murcia. 2015.</p>
          </>
        ),
        back: <p>Formación académica base en pedagogía y didáctica escolar.</p>,
      },
    ],
    en: [
      {
        front: (
          <>
            <p className="font-bold text-green-400">VET Degree</p>{" "}
            <p>Web App Development</p>
            <p className="text-sm mt-2 opacity-70">IES Dos Mares. 2024.</p>
          </>
        ),
        back: (
          <p>
            Professional design, development, and maintenance of web ecosystems.
          </p>
        ),
      },
      {
        front: (
          <>
            <p className="font-bold text-green-400">FullStack Course</p>{" "}
            <p>Python + Django</p>
            <p className="text-sm mt-2 opacity-70">Udemy. 2023.</p>
          </>
        ),
        back: (
          <p>
            Building complete web apps focusing on Python logic and scalable
            databases.
          </p>
        ),
      },
      {
        front: (
          <>
            <p className="font-bold text-green-400">Master's HCA</p>{" "}
            <p>High Capacity Students</p>
            <p className="text-sm mt-2 opacity-70">UCLM. 2019.</p>
          </>
        ),
        back: (
          <p>
            Specialized psychological and educational support for gifted
            students.
          </p>
        ),
      },
      {
        front: (
          <>
            <p className="font-bold text-green-400">Master's Montessori</p>{" "}
            <p>Primary Education</p>
            <p className="text-sm mt-2 opacity-70">Univ. Barcelona. 2018.</p>
          </>
        ),
        back: (
          <p>
            Certified Montessori guide focusing on self-directed learning for
            children.
          </p>
        ),
      },
      {
        front: (
          <>
            <p className="font-bold text-green-400">Bachelor's Degree</p>{" "}
            <p>Primary Education</p>
            <p className="text-sm mt-2 opacity-70">Univ. Murcia. 2015.</p>
          </>
        ),
        back: (
          <p>Core academic degree in pedagogy and educational methodologies.</p>
        ),
      },
    ],
  };

  const cubes = language === "es" ? content.es : content.en;

  const options = {
    fpsLimit: 60,
    fullScreen: { enable: true, zIndex: 0 },
    particles: {
      number: {
        value: 80, // Un poco más denso para simular una red
        density: { enable: true, area: 800 },
      },
      color: { value: "#22c55e" }, // Tu verde corporativo
      shape: {
        type: "circle", // Círculos simples para que el cubo sea el protagonista
      },
      opacity: {
        value: { min: 0.1, max: 0.4 }, // Opacidad variable para dar profundidad
        animation: { enable: true, speed: 1, sync: false },
      },
      size: {
        value: { min: 1, max: 3 },
      },
      links: {
        enable: true,
        distance: 150,
        color: "#22c55e",
        opacity: 0.2, // Líneas muy finas y sutiles
        width: 1,
        triangles: { enable: true, opacity: 0.02 }, // Crea pequeñas áreas sombreadas entre nodos
      },
      move: {
        enable: true,
        speed: 0.8, // Movimiento muy pausado, casi zen
        direction: "none",
        random: true,
        straight: false,
        outModes: { default: "out" },
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: ["grab", "bubble"], // COMBINACIÓN DE AMBOS
        },
        onClick: {
          enable: true,
          mode: "push",
        },
      },
      modes: {
        grab: {
          distance: 200,
          links: { opacity: 0.5 }, // Las líneas se iluminan al acercar el ratón
        },
        bubble: {
          size: 5,
          distance: 200,
          duration: 2,
          opacity: 0.6,
        },
        push: {
          quantity: 4,
        },
      },
    },
    detectRetina: true,
  };

  return (
    <div className="relative min-h-screen bg-[#0a0f18] overflow-hidden">
      <Console />
      <ParticlesBackground config={options} id="tsparticles_education" />

      <div
        className={`
  cube-box 
  grid grid-cols-5 gap-y-32 pt-40 pb-40
  transition-all duration-700
  ${isOpen ? "opacity-20 blur-sm pointer-events-none" : "opacity-100"}
`}
      >
        {cubes.map((cube, index) => (
          <Cube
            key={index}
            index={index}
            frontContent={cube.front}
            backContent={cube.back}
          />
        ))}
      </div>
    </div>
  );
};
