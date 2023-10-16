import estilosProyectos from "../estilos/estilos-proyectos.module.css";
import ProyectoTexto from "./proyecto-texto";
import Carrusel from "./carrusel";
import { useMediaQuery } from "react-responsive";
import PropTypes from "prop-types";

const traducciones = {
  es: {
    proyectos: "Proyectos",
  },
  en: {
    proyectos: "Projects",
  },
};

function Proyectos({ idioma, proyectos }) {
  const tamanoMediaQuery = useMediaQuery({ query: "(min-width: 750px)" });

  const tituloProyectos = traducciones[idioma].proyectos;

  return (
    <div className={`margenes-contenedor bordes`}>
      <h1 id="proyectos" className={estilosProyectos["titulo"]}>
        {tituloProyectos}
      </h1>
      {proyectos.map((proyecto, index) => (
        <div key={proyecto.id}>
          {tamanoMediaQuery && (
            <>
              <Carrusel imagenes={proyecto[idioma].imagenes.escritorio} />
              <ProyectoTexto
                titulo={proyecto[idioma].titulo}
                descripcion={proyecto[idioma].descripcion}
                texto={proyecto[idioma].texto}
                tecnologias={proyecto[idioma].tecnologias}
                mostrarLinea={index === 0}
                enlaces={proyecto[idioma].enlaces}
              />
            </>
          )}

          {!tamanoMediaQuery && (
            <>
              <Carrusel imagenes={proyecto[idioma].imagenes.movil} />
              <ProyectoTexto
                titulo={proyecto[idioma].titulo}
                descripcion={proyecto[idioma].descripcion}
                texto={proyecto[idioma].texto}
                tecnologias={proyecto[idioma].tecnologias}
                mostrarLinea={false}
                enlaces={proyecto[idioma].enlaces}
              />
            </>
          )}
        </div>
      ))}
    </div>
  );
}

Proyectos.propTypes = {
  idioma: PropTypes.string.isRequired,
  proyectos: PropTypes.array.isRequired,
};

export default Proyectos;
