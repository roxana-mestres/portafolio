import estilosProyectos from "../estilos/estilos-proyectos.module.css";
import Proyecto from "./proyecto-texto";
import Carrusel from "./carrusel";
import proyectoUnoConfig from "./proyectos/proyectoUno";
import proyectoDosConfig from "./proyectos/proyectoDos";

function Proyectos() {
  const { titulo, descripcion, texto, tecnologias, imagenes } =
    proyectoUnoConfig;

  return (
    <div className={`margenes-contenedor bordes`}>
      <h1 className={estilosProyectos["titulo"]}>Proyectos</h1>
      <Carrusel imagenes={imagenes} />{" "}
      <Proyecto
        titulo={titulo}
        descripcion={descripcion}
        texto={texto}
        tecnologias={tecnologias}
        mostrarLinea={true}
      />{" "}
      <Carrusel imagenes={proyectoDosConfig.imagenes} />
      <Proyecto
        titulo={proyectoDosConfig.titulo}
        descripcion={proyectoDosConfig.descripcion}
        texto={proyectoDosConfig.texto}
        tecnologias={proyectoDosConfig.tecnologias}
        mostrarLinea={false}
      />
    </div>
  );
}

export default Proyectos;
