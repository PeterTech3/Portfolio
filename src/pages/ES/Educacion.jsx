import { Console } from "../../components/Console";
import { Cube } from "../../components/Cube";
import "../../assets/styles/education.scss";
import { useContext, useEffect } from "react";
import { LanguageContext } from "../../context/languageContext";
import { VideoBackground } from "../../components/VideoBackground";
import backGroud from "../../assets/videos/electric_conduits.mp4";

export const Educacion = () => {
  const { isOpen, language } = useContext(LanguageContext);

  const esCubes = [
    {
      front: (
        <>
          <p> CFGS</p> <p>Desarrollo de Aplicaciones Web</p> <br />{" "}
          <p>IES Dos Mares. 2024.</p>
        </>
      ),
      back: (
        <p>Diseño, creación, desarrollo y mantenimiento de aplicaciones web.</p>
      ),
    },
    {
      front: (
        <>
          <p> Curso Python + DjangoFullStack Developer</p> <br />{" "}
          <p>Udemy. 2023.</p>{" "}
        </>
      ),
      back: (
        <p>
          Crear aplicaciones web completas y funcionales utilizando Python y
          Django.
        </p>
      ),
    },
    {
      front: (
        <>
          <p> Máster en Atención a las AACC</p> <br />{" "}
          <p>Universidad de Castilla La Mancha. 2019.</p>
        </>
      ),
      back: <p>Atención especializada a estudiantes de altas capacidades.</p>,
    },
    {
      front: (
        <>
          <p> Máster en Educación Montessori</p> <br />{" "}
          <p>Universidad de Barcelona. 2018.</p>
        </>
      ),
      back: (
        <p>
          Educación basada en la metodología Montessori a niños de primaria.
        </p>
      ),
    },
    {
      front: (
        <>
          <p> Grado en Educación Primaria.</p> <br />{" "}
          <p>Universidad de Murcia. 2015.</p>
        </>
      ),
      back: <p>Educación a niños de primaria.</p>,
    },
  ];

  const enCubes = [
    {
      front: (
        <>
          <p> VET</p> <p>Web Application Development</p> <br />{" "}
          <p>IES Dos Mares. 2024.</p>
        </>
      ),
      back: (
        <p>
          Design, creation, development, and maintenance of web applications.
        </p>
      ),
    },
    {
      front: (
        <>
          <p> Python + Django FullStack Developer Course</p> <br />{" "}
          <p>Udemy. 2023.</p>{" "}
        </>
      ),
      back: (
        <p>
          Create complete and functional web applications using Python and
          Django.
        </p>
      ),
    },
    {
      front: (
        <>
          <p> Master's in Attention to HCA</p> <br />{" "}
          <p>University of Castilla La Mancha. 2019.</p>
        </>
      ),
      back: <p>Specialized attention to high-capacity students.</p>,
    },
    {
      front: (
        <>
          <p> Master's in Montessori Education</p> <br />{" "}
          <p>University of Barcelona. 2018.</p>
        </>
      ),
      back: (
        <p>
          Education based on the Montessori methodology for primary school
          children.
        </p>
      ),
    },
    {
      front: (
        <>
          <p> Bachelor's Degree in Primary Education.</p> <br />{" "}
          <p>University of Murcia. 2015.</p>
        </>
      ),
      back: <p>Education for primary school children.</p>,
    },
  ];

  let cubes = language === "es" ? esCubes : enCubes;

  useEffect(() => {
    cubes = language === "es" ? esCubes : enCubes;
  }, [language]);

  return (
    <>
      <Console />
      <VideoBackground src={backGroud} />
      <div
        className={`cube-box grid ${
          isOpen ? "console-open" : "console-closed"
        }`}
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
    </>
  );
};
