import { useState } from "react";
import PropTypes from "prop-types";

function Navegacion({ idioma, cambiarIdioma }) {
  const [menuVisible, setMenuVisible] = useState(false);
  const [botonTexto, setBotonTexto] = useState(idioma === "es" ? "EN" : "ES");

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleCambiarIdioma = () => {
    if (idioma === "es") {
      cambiarIdioma("en");
      setBotonTexto("ES");
    } else {
      cambiarIdioma("es");
      setBotonTexto("EN");
    }
  };

  // Define las traducciones para los elementos <li>
  const traducciones = {
    es: {
      sobreMi: "sobre mí",
      tecnologias: "tecnologías",
      proyectos: "proyectos",
      estudios: "estudios",
    },
    en: {
      sobreMi: "about me",
      tecnologias: "technologies",
      proyectos: "projects",
      estudios: "education",
    },
  };

  // Usa el idioma para obtener las traducciones correctas
  const traduccionActual = traducciones[idioma];

  return (
    <nav>
      <button className="boton" onClick={handleCambiarIdioma}>
        {botonTexto}
      </button>
      <button
        className={`boton-menu ${menuVisible ? "activo" : ""}`}
        onClick={toggleMenu}
      >
        <span
          className="material-symbols-outlined"
          style={{ fontSize: "50px" }}
        >
          menu
        </span>
      </button>
      <div className={`menu-contenedor ${menuVisible ? "mostrar-menu" : ""}`}>
        <ul className="lista-menu">
          <li>
            <a href="#sobre-mi">{traduccionActual.sobreMi}</a>
          </li>
          <li>
            <a href="#tecnologias">{traduccionActual.tecnologias}</a>
          </li>
          <li>
            <a href="#proyectos">{traduccionActual.proyectos}</a>
          </li>
          <li>
            <a href="#estudios">{traduccionActual.estudios}</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

Navegacion.propTypes = {
  idioma: PropTypes.string.isRequired,
  cambiarIdioma: PropTypes.func.isRequired,
};

export default Navegacion;
