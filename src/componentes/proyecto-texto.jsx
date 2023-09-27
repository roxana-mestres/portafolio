import estilosProyectos from "../estilos/estilos-proyectos.module.css";
import PropTypes from "prop-types";

function Proyecto({ titulo, descripcion, texto, tecnologias, mostrarLinea }) {
  return (
    <>
      <div className={estilosProyectos["proyecto-texto"]}>
        <h3>{titulo}</h3>
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

Proyecto.propTypes = {
  titulo: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  texto: PropTypes.string.isRequired,
  tecnologias: PropTypes.arrayOf(PropTypes.string).isRequired,
  mostrarLinea: PropTypes.bool,
};

export default Proyecto;
