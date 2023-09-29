import { useState } from "react";

function Navegacion() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <nav>
      <button className="boton">EN</button>
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
            <a href="#sobre-mi">01. sobre mí</a>
          </li>
          <li>
            <a href="#tecnologias">02. tecnologías</a>
          </li>
          <li>
            <a href="#proyectos">03. proyectos</a>
          </li>
          <li>
            <a href="#estudios">04. estudios</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navegacion;
