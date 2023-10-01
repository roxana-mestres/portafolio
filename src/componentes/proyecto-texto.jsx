import estilosProyectos from "../estilos/estilos-proyectos.module.css";
import PropTypes from "prop-types";

function ProyectoTexto({
  titulo,
  descripcion,
  texto,
  tecnologias,
  mostrarLinea,
  enlaces,
}) {
  return (
    <>
      <div className={estilosProyectos["proyecto-texto"]}>
        <div>
          <div className={estilosProyectos["enlace-titulo"]}>
            <h3>{titulo}</h3>
            <div className={estilosProyectos["contenedor-enlaces"]}>
              <a
                href={enlaces.paginaWeb}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: "45px" }}
                >
                  open_in_new
                </span>
              </a>
              <a
                href={enlaces.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={estilosProyectos["github"]}></div>
              </a>
            </div>
          </div>
        </div>
        <h4>{descripcion}</h4>
        <p className={estilosProyectos["texto"]}>{texto}</p>
        <div>
          {tecnologias.map((tecnologia, index) => (
            <div key={index} className="pastillas">
              {tecnologia}
            </div>
          ))}
        </div>
      </div>
      {mostrarLinea && <div className="linea"></div>}
    </>
  );
}

ProyectoTexto.propTypes = {
  titulo: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  texto: PropTypes.string.isRequired,
  tecnologias: PropTypes.arrayOf(PropTypes.string).isRequired,
  mostrarLinea: PropTypes.bool,
  enlaces: PropTypes.shape({
    paginaWeb: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProyectoTexto;
