import { useContext, useEffect } from "react";
import { Console } from "../../components/Console";
import { LanguageContext } from "../../context/languageContext";
import "../../assets/styles/intro.scss";
import profile from "../../assets/images/profile.png";
import balance from "../../assets/images/balance.jpg";
import lol from "../../assets/images/lol.png";
import doggo from "../../assets/images/doggo.jpg";
import littleDoggo from "../../assets/images/little_doggo.jpg";
import youngDoggo from "../../assets/images/young_doggo.jpg";
import spain from "../../assets/images/spain.jpg";
import england from "../../assets/images/england.jpg";
import psico from "../../assets/images/psi.png";
import angularLogo from "../../assets/images/angular.png";
import bootstrapLogo from "../../assets/images/bootstrap.png";
import djangoLogo from "../../assets/images/django.jpg";
import dockerLogo from "../../assets/images/docker.png";
import gitLogo from "../../assets/images/git.png";
import javaLogo from "../../assets/images/java.png";
import jsLogo from "../../assets/images/js.png";
import pythonLogo from "../../assets/images/phyton.png";
import reactLogo from "../../assets/images/react.png";
import stencilLogo from "../../assets/images/stencil.png";
import tailwindLogo from "../../assets/images/tailwind.png";
import tsLogo from "../../assets/images/ts.png";
import herokuLogo from "../../assets/images/heroku.jpeg";
import vercel from "../../assets/images/vercel.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { VideoBackground } from "../../components/VideoBackground";
import backgroundVideo from "../../assets/videos/leaves_falling.mp4";
import { IntroSection } from "../../components/SectionIntro";

export const Introduccion = () => {
  const { isOpen, language } = useContext(LanguageContext);

  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);

  const esSections = [
    {
      img: [profile],
      styles: [{ borderRadius: "30%", width: "150%" }],
      text: (
        <p className="col-span-3">
          Programador y docente <br />
          <br />
          Soy una persona intelectualmente muy inquieta, me gusta estar siempre
          aprendiendo cosas nuevas y actualmente he descubierto en el mundo de
          la programación infinidad de conceptos interesantes y emocionantes.{" "}
          <br />
          Me considero una persona muy sociable y entiendo que para que haya un
          buen ambiente de trabajo es importante que se dé una comunicación de
          calidad y de forma continuada. <br />
          <br />
          Creo firmemente que soy un tipo de persona que cualquier empresa
          querría tener en su plantilla: motivado, implicado, con iniciativa,
          con sed de aprender más... etc.
        </p>
      ),
      delay: 500,
    },
    {
      img: [balance, lol],
      styles: [
        { borderRadius: "30%", marginLeft: "15%" },
        { width: "50%", marginTop: "25%", marginLeft: "27%" },
      ],
      text: (
        <p className="col-span-3">
          Tengo muchos hobbies. <br /> <br />
          Me encanta el ejercicio físico, mi actividad preferida es el TRX,
          aunque al final lo más importante es tener una vida lo más activa
          posible. <br /> <br />
          También me gusta mucho pasar tiempo de calidad con mis amigos, debatir
          sobre temas de actualidad y, en definitiva, disfrutar de momentos
          enriquecedores. <br /> <br />
          Por supuesto, la tecnología es otro de mis temas favoritos. Me encanta
          programar y aprender cada vez más sobre este mundillo, y, como no
          podía ser de otra forma, me gustan los videojuegos.
        </p>
      ),
      delay: 700,
    },
    {
      img: [doggo, littleDoggo, youngDoggo],
      styles: [
        { borderRadius: "30%", marginLeft: "15%" },
        { borderRadius: "30%", marginLeft: "15%", marginTop: "10%" },
        { borderRadius: "30%", marginTop: "10%", marginLeft: "15%" },
      ],
      text: (
        <p className="col-span-3">
          Sin duda hay un hobbie por encima de cualquiera, y se merece un slot
          para él solo.
        </p>
      ),
      delay: 900,
    },
    {
      img: [
        bootstrapLogo,
        djangoLogo,
        dockerLogo,
        javaLogo,
        gitLogo,
        jsLogo,
        pythonLogo,
        reactLogo,
        stencilLogo,
        tailwindLogo,
        tsLogo,
        angularLogo,
        herokuLogo,
        vercel,
      ],
      styles: [
        { width: "50%", marginLeft: "27%" }, //bootstrap
        { width: "50%", marginLeft: "25%", marginTop: "15%" }, //django
        { marginLeft: "15%", marginTop: "5%" }, //docker
        { width: "50%", marginLeft: "27%" }, //java
        { width: "50%", marginLeft: "27%", marginTop: "16%" }, //git
        { width: "50%", marginLeft: "27%" }, //js
        { width: "50%", marginLeft: "27%" }, //python
        { width: "50%", marginLeft: "27%" }, //react
        { width: "50%", marginLeft: "27%", marginTop: "12%" }, //stencil
        { width: "50%", marginLeft: "27%" }, //tailwind
        { width: "50%", marginLeft: "27%" }, //ts
        { width: "50%", marginLeft: "27%" }, //angular
        { width: "50%", marginLeft: "27%", borderRadius: "20%" }, //heroku
        { width: "50%", marginLeft: "27%" }, //vercel
      ],
      text: (
        <p className="col-span-1">
          Me encanta aprender sobre nuevas tecnologías, frameworks, lenguajes de
          programación...
          <br />
          <br />
          Actualmente, con respecto a los <b>lenguajes de programación</b>{" "}
          conozo algo de <b>java</b> y bastante tanto de <b>Python</b>, como de
          <b>Javascript</b> y de <b>TypeScript</b>.
          <br />
          <br />
          En cuanto a <b>frameworks </b> conozco bastante bien tanto{" "}
          <b>React</b>, como <b>Django</b>, y tengo bastantes conocimientos
          también sobre
          <b> Angular</b> y <b>Stencil.js</b>. En diseño he trabajado con{" "}
          <b>Bootstrap</b> y estoy aprendiendo ahora <b>Tailwind</b>.
          <br />
          <br />
          Con respecto a <b>tecnologías de despliegue en local</b>, he trabajado
          bastante con <b>Docker</b> Pero también he tenido experiencias
          desplegando proyectos en hosts remotos, por eso conozco tanto a{" "}
          <b>Heroku</b>, donde desplegué mi back-end y base de datos, como{" "}
          <b>Vercel</b>, donde desplegué mi front-end.
          <br />
          <br />
          Con respecto a gestores de bases de datos, he trabajado con{" "}
          <b>SQLite</b> para desarrollar y <b>PostgreSQL</b> para desplegar.
          <br />
          <br />Y por último, conzco bastante bien <b>git</b> y <b>gitHub</b>{" "}
          como <b>herramientras de control de versiones</b>.
        </p>
      ),
      delay: 1100,
    },
    {
      img: [england, spain, psico],
      styles: [
        { borderRadius: "50%", marginLeft: "12%" },
        { marginLeft: "12%" },
        { marginLeft: "12%" },
      ],
      text: (
        <p className="col-span-3">
          Por último, hablemos un poco de mí, a modo de carta de presentación.
          <br /> <br />
          A parte de todo lo que ya conocéis, también soy un chaval alegre, me
          considero bastante empático, de hecho, la psicología es uno de mis
          temas preferidos, tanto, que llegué a estudiarla en la universidad por
          un par de años.
          <br />
          <br />
          También soy bastante serio para los temas que lo requieren, algo
          perfeccionista pero no demasiado y bastante crítico conmigo mismo.
          <br />
          <br />
          Los idiomas creo que es de lo que peor se me da en el mundo. Hablo
          español nativo e inglés sin ningún problema (ya que hace años decidí
          viajar a Inglaterra a trabajar y estudiar), y hace poco decidí viajar
          a Portugar a realizar mis prácticas Erasmus+, gracias a lo cual llegué
          a entender perfectamente el portugués (sobre todo en ámbito de
          empresa).
          <br />
          <br />
          En el trabajo soy responsable, puntual, me gusta trabajar en equipo y
          comunicarme con mis compañeros, me gusta cumplir objetivos, para mí
          son como un videojuego donde la meta es el 'check', me gusta
          integrarme en el grupo y no sentirme aislado.
        </p>
      ),
      delay: 500,
    },
  ];

  const enSections = [
    {
      img: [profile],
      styles: [{ borderRadius: "30%", width: "150%" }],
      text: (
        <p className="col-span-3">
          Programmer and Teacher <br />
          <br />
          I am intellectually curious, always eager to learn new things, and I
          have recently discovered countless interesting and exciting concepts
          in the world of programming. <br />
          I consider myself very sociable, and I believe that maintaining
          quality and continuous communication is crucial for a good work
          environment. <br />
          <br />I firmly believe that I am the type of person any company would
          want to have on their team: motivated, proactive, eager to learn more,
          and so on.
        </p>
      ),
      delay: 500,
    },
    {
      img: [balance, lol],
      styles: [
        { borderRadius: "30%", marginLeft: "15%" },
        { width: "50%", marginTop: "25%", marginLeft: "27%" },
      ],
      text: (
        <p className="col-span-3">
          I have many hobbies. <br /> <br />
          I love physical exercise, with TRX being my favorite activity, but
          ultimately, having an active lifestyle is most important to me. <br />{" "}
          <br />
          I also enjoy spending quality time with my friends, discussing current
          affairs, and, in general, enjoying enriching moments. <br /> <br />
          Of course, technology is another favorite topic of mine. I love
          programming and continually learning more about this field, and
          naturally, I enjoy video games too.
        </p>
      ),
      delay: 700,
    },
    {
      img: [doggo, littleDoggo, youngDoggo],
      styles: [
        { borderRadius: "30%", marginLeft: "15%" },
        { borderRadius: "30%", marginLeft: "15%", marginTop: "10%" },
        { borderRadius: "30%", marginTop: "10%", marginLeft: "15%" },
      ],
      text: (
        <p className="col-span-3">
          There is undoubtedly one hobby above all others that deserves a slot
          just for itself.
        </p>
      ),
      delay: 900,
    },
    {
      img: [
        bootstrapLogo,
        djangoLogo,
        dockerLogo,
        javaLogo,
        gitLogo,
        jsLogo,
        pythonLogo,
        reactLogo,
        stencilLogo,
        tailwindLogo,
        tsLogo,
        angularLogo,
        herokuLogo,
        vercel,
      ],
      styles: [
        { width: "50%", marginLeft: "27%" }, //bootstrap
        { width: "50%", marginLeft: "25%", marginTop: "15%" }, //django
        { marginLeft: "15%", marginTop: "5%" }, //docker
        { width: "50%", marginLeft: "27%" }, //java
        { width: "50%", marginLeft: "27%", marginTop: "16%" }, //git
        { width: "50%", marginLeft: "27%" }, //js
        { width: "50%", marginLeft: "27%" }, //python
        { width: "50%", marginLeft: "27%" }, //react
        { width: "50%", marginLeft: "27%", marginTop: "12%" }, //stencil
        { width: "50%", marginLeft: "27%" }, //tailwind
        { width: "50%", marginLeft: "27%" }, //ts
        { width: "50%", marginLeft: "27%" }, //angular
        { width: "50%", marginLeft: "27%", borderRadius: "20%" }, //heroku
        { width: "50%", marginLeft: "27%" }, //vercel
      ],
      text: (
        <p className="col-span-1">
          I love learning about new technologies, frameworks, programming
          languages...
          <br />
          <br />
          Currently, regarding <b>programming languages</b>, I know some{" "}
          <b>Java</b> and quite a bit of both <b>Python</b>,<b>JavaScript</b>{" "}
          and <b>TypeScript</b>.
          <br />
          <br />
          As for <b>frameworks</b>, I am quite familiar with both <b>React</b>{" "}
          and <b>Django</b>, and I also have considerable knowledge of
          <b> Angular</b> and <b>Stencil.js</b>. In design, I have worked with{" "}
          <b>Bootstrap</b> and am currently learning <b>Tailwind</b>.
          <br />
          <br />
          Regarding <b>local deployment technologies</b>, I have worked
          extensively with <b>Docker</b>, and I have also had experience
          deploying projects on remote hosts, so I am familiar with both{" "}
          <b>Heroku</b>, where I deployed my backend and database, and{" "}
          <b>Vercel</b>, where I deployed my frontend.
          <br />
          <br />
          Regarding database management systems, I have worked with{" "}
          <b>SQLite</b> for development and <b>PostgreSQL</b> for deployment.
          <br />
          <br />
          Lastly, I am quite proficient with <b>Git</b> and <b>GitHub</b> as{" "}
          <b>version control tools</b>.
        </p>
      ),
      delay: 1100,
    },
    {
      img: [england, spain, psico],
      styles: [
        { borderRadius: "50%", marginLeft: "12%" },
        { marginLeft: "12%" },
        { marginLeft: "12%" },
      ],
      text: (
        <p className="col-span-3">
          Lastly, let's talk a bit about me, as an introduction.
          <br /> <br />
          Apart from everything you already know, I am also a cheerful person,
          quite empathetic; in fact, psychology is one of my favorite topics, so
          much so that I studied it at university for a couple of years.
          <br />
          <br />
          I am also quite serious when it comes to matters that require it,
          somewhat of a perfectionist but not excessively so, and quite critical
          of myself.
          <br />
          <br />
          Languages are probably my weakest point in the world. I am a native
          Spanish speaker and speak English without any problem (since years ago
          I decided to travel to England to work and study), and recently I
          decided to travel to Portugal to do my Erasmus+ internships, thanks to
          which I came to understand Portuguese perfectly (especially in a
          business environment).
          <br />
          <br />
          At work, I am responsible, punctual, I like to work in teams and
          communicate with my colleagues, I like to achieve goals, for me they
          are like a video game where the goal is the check, I like to integrate
          into the group and not feel isolated.
        </p>
      ),
      delay: 500,
    },
  ];

  let sections = language === "es" ? esSections : enSections;

  useEffect(() => {
    sections = language === "es" ? esSections : enSections;
  }, [language]);

  return (
    <>
      <Console />
      <VideoBackground src={backgroundVideo} />
      <div
        className={`intro-container animate-slide-down ${
          isOpen ? "console-open" : "console-closed"
        } `}
      >
        {language === "es" ? (
          <h1 data-aos="fade-up">¡Hola! Mi nombre es Pedro</h1>
        ) : (
          <h1 data-aos="fade-up">Hello! My name is Pedro</h1>
        )}

        {sections.map((section, index) => (
          <IntroSection key={index} section={section} index={index} />
        ))}
      </div>
    </>
  );
};
