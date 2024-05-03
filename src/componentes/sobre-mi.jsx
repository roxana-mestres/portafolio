import estilosSobreMi from "../estilos/estilos-sobre-mi.module.css";
import PropTypes from "prop-types";

function SobreMi({ idioma }) {
  const traducciones = {
    es: {
      titulo: "Sobre mí",
      parrafo1:
        "¡Hola! Soy Roxana, una diseñadora y desarrolladora web con experiencia en diversas tecnologías. En el frontend, cuento con habilidades en HTML, CSS, JavaScript y los fundamentos de UX/UI, además del uso de herramientas como Figma y React.js. En el backend, estoy familiarizada con tecnologías como Node.js, Express y bases de datos como MongoDB y mySQL. Además, tengo experiencia en el uso de Git y GitHub para el control de versiones y la colaboración en proyectos de desarrollo.",
      parrafo2: `Lo que más disfruto del desarrollo web es la gran diversidad de tecnologías que existen y la constante oportunidad de aprendizaje y crecimiento que esto proporciona. Me encanta explorar nuevas herramientas y técnicas, y aplicarlas de manera creativa para diseñar experiencias digitales atractivas y eficaces que satisfagan las necesidades y deseos de los usuarios.`,
    },
    en: {
      titulo: "About Me",
      parrafo1:
        "Hey there! I'm Roxana, a designer and web developer with hands-on experience across various technologies. In the frontend realm, I'm proficient in HTML, CSS, JavaScript, and the essentials of UX/UI design. I also utilize tools like Figma and React.js to craft engaging user interfaces. When it comes to the backend, I'm well-acquainted with technologies such as Node.js, Express, and database management using MongoDB and MySQL. Additionally, I navigate Git and GitHub with ease for version control and collaborative projects.",
      parrafo2: `What truly excites me about web development is the ever-evolving landscape of technologies, providing endless opportunities for learning and innovation. I thrive on exploring new tools and techniques, leveraging them creatively to design captivating and effective digital experiences that meet users' needs and expectations.`,
    },
  };

  const traduccionActual = traducciones[idioma];

  return (
    <>
      <div className={estilosSobreMi["contenedor-columna"]}>
        <div className={estilosSobreMi["columna"]}>
          <h1 id="sobre-mi">{traduccionActual.titulo}</h1>
          <p>{traduccionActual.parrafo1}</p>
        </div>
        <div className={estilosSobreMi["columna"]}>
          <p>{traduccionActual.parrafo2}</p>
        </div>
      </div>
    </>
  );
}

SobreMi.propTypes = {
  idioma: PropTypes.string.isRequired,
};

export default SobreMi;
