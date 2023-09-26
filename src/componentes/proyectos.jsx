import estilosProyectos from "../estilos/estilos-proyectos.module.css";
import Carrusel from "./carrusel";
import ProyectoTexto from "./proyecto-texto";

function Proyectos() {
  return (
    <div className={`margenes-contenedor bordes`}>
      <h1 className={estilosProyectos["titulo"]}>Proyectos</h1>
      <Carrusel />
      <ProyectoTexto />
    </div>
  );
}

export default Proyectos;
