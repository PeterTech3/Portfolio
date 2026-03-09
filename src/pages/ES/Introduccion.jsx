import { useContext, useEffect } from "react";
import { Console } from "../../components/Console";
import { LanguageContext } from "../../context/languageContext";
import profile from "../../assets/images/profile.png";
import balance from "../../assets/images/balance.jpg";
import lol from "../../assets/images/lol.png";
import doggo from "../../assets/images/doggo.jpg";
import littleDoggo from "../../assets/images/little_doggo.jpg";
import youngDoggo from "../../assets/images/young_doggo.jpg";
import spain from "../../assets/images/spain.jpg";
import england from "../../assets/images/england.jpg";
import psico from "../../assets/images/psi.png";
import laravel from "../../assets/images/laravel.png";
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
import mysqlLogo from "../../assets/images/mysql.png";
import tsLogo from "../../assets/images/ts.png";
import sqlserver from "../../assets/images/sqlserver.png";
import dartFlutter from "../../assets/images/dart-flutter.jpg";
import kotlin from "../../assets/images/kotlin.png";
import c from "../../assets/images/c.png";
import herokuLogo from "../../assets/images/heroku.jpeg";
import vercel from "../../assets/images/vercel.png";
import { IntroSection } from "../../components/SectionIntro";
import { ParticlesBackground } from "../../components/Backgroud";
import AOS from "aos";
import "aos/dist/aos.css";

export const Introduccion = () => {
  const { isOpen, language } = useContext(LanguageContext);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
    // Esto fuerza a AOS a recalcular posiciones después de que las partículas carguen
    setTimeout(() => {
      AOS.refresh();
    }, 500);
  }, []);

  const content = {
    es: {
      title: "¡Hola! Mi nombre es Pedro",
      sections: [
        {
          title: "Desarrollador Fullstack & Multiplataforma",
          img: [profile],
          text: (
            <>
              Mi trayectoria profesional es el resultado de una curiosidad
              intelectual inagotable. Lo que comenzó como una transición desde
              la docencia, se ha convertido en una carrera sólida donde he
              gestionado proyectos desde la consultoría inicial hasta el
              despliegue final.
              <br />
              <br />
              Me apasiona resolver problemas complejos y entiendo que la clave
              de un proyecto exitoso no solo reside en el código, sino en una
              comunicación de calidad y un equipo cohesionado. Soy el tipo de
              profesional que aporta proactividad, visión de negocio y una sed
              constante de innovación.
            </>
          ),
        },
        {
          title: "Hobbies y Estilo de Vida",
          img: [balance, lol],
          text: (
            <>
              Tengo muchos hobbies. <br /> <br />
              El ejercicio físico es mi motor, especialmente el TRX; creo que
              una mente ágil necesita un cuerpo activo. <br /> <br />
              Disfruto del debate sobre actualidad con amigos y de momentos que
              aporten valor intelectual. Por supuesto, la tecnología trasciende
              mi trabajo: me encanta explorar nuevas tendencias, investigar
              sobre IA y, en mis ratos libres, sumergirme en el mundo de los
              videojuegos.
            </>
          ),
        },
        {
          title: "Mi fiel compañero",
          img: [doggo, littleDoggo, youngDoggo],
          text: "Sin duda, hay un hobby que está por encima de cualquier otro y se merece su propio espacio: mi perro es mi mayor alegría fuera del código.",
        },
        {
          title: "Stack Tecnológico",
          img: [
            jsLogo,
            tsLogo,
            laravel,
            c,
            pythonLogo,
            javaLogo,
            kotlin,
            dartFlutter,
            reactLogo,
            angularLogo,
            djangoLogo,
            stencilLogo,
            tailwindLogo,
            bootstrapLogo,
            dockerLogo,
            gitLogo,
            herokuLogo,
            vercel,
            sqlserver,
            mysqlLogo,
          ],
          text: (
            <>
              Mi stack tecnológico ha evolucionado hacia la versatilidad total.
              <br />
              <br />
              En <b>lenguajes</b>, domino <b>JavaScript, TypeScript y Python</b>
              , y trabajo con solidez en <b>C#, Java, Kotlin y Dart</b> para
              soluciones nativas y multiplataforma.
              <br />
              <br />
              Mi ecosistema de <b>frameworks</b> es amplio: desde el desarrollo
              web con <b>React, Angular, Stencil.js, Laravel y Node.js</b>,
              hasta el mundo móvil con <b>Flutter y React Native (Expo)</b>. En
              escritorio, desarrollo aplicaciones robustas con{" "}
              <b>.NET (C# / VB)</b>.
              <br />
              <br />
              En cuanto a <b>infraestructura y despliegue</b>, gestiono entornos
              con <b>Docker</b>, servidores <b>Apache</b> y administración de{" "}
              <b>DNS, dominios y correo</b>. Trabajo con bases de datos{" "}
              <b>SQL Server, PostgreSQL y MySQL</b>.
              <br />
              <br />
              Como herramienta de <b>control de versiones</b> y trabajo
              colaborativo, <b>Git y GitHub</b> son mi estándar diario aunque he
              trabajado con subversion.
            </>
          ),
          isTech: true, // Flag opcional por si quieres darle un estilo diferente a esta sección
        },
        {
          title: "Carta de Presentación",
          img: [england, spain, psico],
          text: (
            <>
              Para concluir, me defino como un perfil híbrido: técnico, empático
              y resolutivo. Mi pasado en educación me otorga una ventaja
              competitiva en la comprensión del usuario y en la gestión de
              equipos.
              <br />
              <br />
              Soy meticuloso y crítico con mi trabajo, siempre buscando la
              excelencia. Mi experiencia internacional en Inglaterra y mis
              prácticas Erasmus+ en Portugal me han permitido comunicarme en
              inglés y portugués, eliminando cualquier barrera de comunicación
              en entornos globales.
              <br />
              <br />
              En el trabajo soy responsable, puntual y veo cada objetivo como un
              desafío que superar. Me integro con naturalidad en los grupos,
              aportando siempre una actitud positiva y orientada a resultados.
            </>
          ),
        },
      ],
    },
    en: {
      title: "Hello! My name is Pedro",
      sections: [
        {
          title: "Fullstack & Multiplatform Developer",
          img: [profile],
          text: (
            <>
              I am intellectually curious, always eager to learn new things, and
              I have recently discovered countless interesting and exciting
              concepts in the world of programming. <br />
              I consider myself very sociable, and I believe that maintaining
              quality and continuous communication is crucial for a good work
              environment. <br />
              <br />I firmly believe that I am the type of person any company
              would want to have on their team: motivated, proactive, eager to
              learn more, and so on.
            </>
          ),
        },
        {
          title: "Hobbies & Lifestyle",
          img: [balance, lol],
          text: (
            <>
              I have many hobbies. <br /> <br />I love physical exercise, with
              TRX being my favorite activity, but ultimately, having an active
              lifestyle is most important to me. <br /> <br />I also enjoy
              spending quality time with my friends, discussing current affairs,
              and, in general, enjoying enriching moments. <br /> <br />
              Of course, technology is another favorite topic of mine. I love
              programming and continually learning more about this field, and
              naturally, I enjoy video games too.
            </>
          ),
        },
        {
          title: "My Best Friend",
          img: [doggo, littleDoggo, youngDoggo],
          text: "There is undoubtedly one hobby above all others that deserves a slot just for itself.",
        },
        {
          title: "Tech Stack",
          jsLogo,
          tsLogo,
          laravel,
          c,
          pythonLogo,
          javaLogo,
          kotlin,
          dartFlutter,
          reactLogo,
          angularLogo,
          djangoLogo,
          stencilLogo,
          tailwindLogo,
          bootstrapLogo,
          dockerLogo,
          gitLogo,
          herokuLogo,
          vercel,
          sqlserver,
          mysqlLogo,
          text: (
            <>
              I love learning about new technologies, frameworks, programming
              languages...
              <br />
              <br />
              Currently, regarding <b>programming languages</b>, I know some{" "}
              <b>Java</b> and quite a bit of both <b>Python</b>,
              <b>JavaScript</b> and <b>TypeScript</b>.
              <br />
              <br />
              As for <b>frameworks</b>, I am quite familiar with both{" "}
              <b>React</b> and <b>Django</b>, and I also have considerable
              knowledge of
              <b> Angular</b> and <b>Stencil.js</b>. In design, I have worked
              with <b>Bootstrap</b> and am currently learning <b>Tailwind</b>.
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
              <b>SQLite</b> for development and <b>PostgreSQL</b> for
              deployment.
              <br />
              <br />
              Lastly, I am quite proficient with <b>Git</b> and <b>GitHub</b> as{" "}
              <b>version control tools</b>.
            </>
          ),
          isTech: true,
        },
        {
          title: "A Bit About Me",
          img: [england, spain, psico],
          text: (
            <>
              Lastly, let's talk a bit about me, as an introduction.
              <br /> <br />
              Apart from everything you already know, I am also a cheerful
              person, quite empathetic; in fact, psychology is one of my
              favorite topics, so much so that I studied it at university for a
              couple of years.
              <br />
              <br />
              I am also quite serious when it comes to matters that require it,
              somewhat of a perfectionist but not excessively so, and quite
              critical of myself.
              <br />
              <br />
              Languages are probably my weakest point in the world. I am a
              native Spanish speaker and speak English without any problem
              (since years ago I decided to travel to England to work and
              study), and recently I decided to travel to Portugal to do my
              Erasmus+ internships, thanks to which I came to understand
              Portuguese perfectly (especially in a business environment).
              <br />
              <br />
              At work, I am responsible, punctual, I like to work in teams and
              communicate with my colleagues, I like to achieve goals, for me
              they are like a video game where the goal is the check, I like to
              integrate into the group and not feel isolated.
            </>
          ),
        },
      ],
    },
  };

  const currentContent = language === "es" ? content.es : content.en;

  const options = {
    fpsLimit: 60,
    fullScreen: { enable: true, zIndex: 0 },
    particles: {
      number: {
        value: 30,
        density: { enable: true, area: 800 },
      },
      color: { value: "#00ff00" },
      shape: {
        type: ["square", "triangle", "polygon"],
        options: {
          polygon: { sides: 6 },
        },
      },
      opacity: { value: 0.2 },
      size: { value: 15 },
      rotate: {
        value: 0,
        animation: { enable: true, speed: 5 },
      },
      move: {
        enable: true,
        speed: 2,
        outModes: { default: "out" },
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse",
        },
        onClick: {
          enable: true,
          mode: "push",
        },
      },
      modes: {
        repulse: {
          distance: 150,
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
    <div className="relative w-full min-h-screen bg-[#0a0f18] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.05),transparent_70%)] pointer-events-none" />
      <Console />
      <ParticlesBackground config={options} id="tsparticles_intro" />
      <div
        className={`
    relative z-10 container mx-auto px-6
    ${isOpen ? "pt-[50vh] blur-md" : "pt-24"}
  `}
      >
        <h1
          data-aos="zoom-out-up"
          className="font-special text-4xl md:text-7xl lg:text-8xl text-right mb-20 text-green-500 drop-shadow-[0_0_10px_rgba(34,197,94,0.3)]"
        >
          {currentContent.title}
        </h1>

        <div className="flex flex-col gap-32 pb-40">
          {currentContent.sections.map((section, index) => (
            <IntroSection key={index} section={section} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
