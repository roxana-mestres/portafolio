import PropTypes from "prop-types";
import estilosTecnologia from "../estilos/estilos-tecnologia.module.css";

function Tecnologias({ idioma }) {
  const traducciones = {
    es: {
      titulo: "Tecnologías",
      frontend: "Frontend:",
      backend: "Backend:",
      conocimientos: "Conocimientos básicos:",
      otros: "Otras tecnologías:",
      idiomas: "Idiomas:",
    },
    en: {
      titulo: "Technologies",
      frontend: "Frontend:",
      backend: "Backend:",
      conocimientos: "Basic knowledge:",
      otros: "Other technologies:",
      idiomas: "Languages:",
    },
  };

  const tecnologias = {
    es: {
      frontend: [
        "HTML",
        "CSS",
        "JavaScript",
        "Fundamentos UX/UI",
        "Figma",
        "React.js",
      ],
      backend: ["Node.js", "Express", "MongoDB", "EJS", "mySQL"],
      conocimientos: ["WordPress", "Adobe InDesign", "Adobe Illustrator"],
      otros: ["Git", "GitHub"],
      idiomas: ["Inglés avanzado (C2)", "Español (nativo)"],
    },
    en: {
      frontend: [
        "HTML",
        "CSS",
        "JavaScript",
        "UX/UI Fundamentals",
        "Figma",
        "React.js",
      ],
      backend: ["Node.js", "Express", "MongoDB", "EJS"],
      conocimientos: ["WordPress", "Adobe InDesign", "Adobe Illustrator"],
      otros: ["Git", "GitHub"],
      idiomas: ["English (C2)", "Spanish (native)"],
    },
  };

  const traduccionActual = traducciones[idioma];

  return (
    <>
      <div className="bordes margenes-contenedor">
        <h1 id="tecnologias" className={estilosTecnologia["titulo"]}>
          {traduccionActual.titulo}
        </h1>
        <Section
          titulo={traduccionActual.frontend}
          items={tecnologias[idioma].frontend}
        />
        <Section
          titulo={traduccionActual.backend}
          items={tecnologias[idioma].backend}
        />
        <Section
          titulo={traduccionActual.conocimientos}
          items={tecnologias[idioma].conocimientos}
        />
        <Section
          titulo={traduccionActual.otros}
          items={tecnologias[idioma].otros}
        />
        <Section
          titulo={traduccionActual.idiomas}
          items={tecnologias[idioma].idiomas}
        />
        <div className={estilosTecnologia["espacio"]}></div>
      </div>
    </>
  );
}

function Section({ titulo, items }) {
  return (
    <>
      <h3 className={estilosTecnologia["subtitulo"]}>{titulo}</h3>
      <div className="contenedor-pastillas">
        {items.map((item) => (
          <div className="pastillas" key={item}>
            {item}
          </div>
        ))}
      </div>
    </>
  );
}
Tecnologias.propTypes = {
  idioma: PropTypes.string.isRequired,
};

Section.propTypes = {
  titulo: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
};

export default Tecnologias;
