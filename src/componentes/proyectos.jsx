import estilosProyectos from "../estilos/estilos-proyectos.module.css";
import ProyectoTexto from "./proyecto-texto";
import Carrusel from "./carrusel";
import proyectoUnoConfig from "./proyectos/proyectoUno";
import proyectoDosConfig from "./proyectos/proyectoDos";
import { useMediaQuery } from "react-responsive";

function Proyectos() {
  // Utiliza react-responsive para detectar el tamaño de pantalla
  const tamanoMediaQuery = useMediaQuery({ query: "(min-width: 750px)" });

  return (
    <div className={`margenes-contenedor bordes`}>
      <h1 className={estilosProyectos["titulo"]}>Proyectos</h1>
      {tamanoMediaQuery && (
        <>
          <Carrusel imagenes={proyectoUnoConfig.imagenes.escritorio} />
          <ProyectoTexto
            titulo={proyectoUnoConfig.titulo}
            descripcion={proyectoUnoConfig.descripcion}
            texto={proyectoUnoConfig.texto}
            tecnologias={proyectoUnoConfig.tecnologias}
            mostrarLinea={true}
          />
          <Carrusel imagenes={proyectoDosConfig.imagenes.escritorio} />
          <ProyectoTexto
            titulo={proyectoDosConfig.titulo}
            descripcion={proyectoDosConfig.descripcion}
            texto={proyectoDosConfig.texto}
            tecnologias={proyectoDosConfig.tecnologias}
            mostrarLinea={false}
          />
        </>
      )}

      {!tamanoMediaQuery && (
        <>
          <Carrusel imagenes={proyectoUnoConfig.imagenes.movil} />
          <ProyectoTexto
            titulo={proyectoUnoConfig.titulo}
            descripcion={proyectoUnoConfig.descripcion}
            texto={proyectoUnoConfig.texto}
            tecnologias={proyectoUnoConfig.tecnologias}
            mostrarLinea={true}
          />
          <Carrusel imagenes={proyectoDosConfig.imagenes.movil} />
          <ProyectoTexto
            titulo={proyectoDosConfig.titulo}
            descripcion={proyectoDosConfig.descripcion}
            texto={proyectoDosConfig.texto}
            tecnologias={proyectoDosConfig.tecnologias}
            mostrarLinea={false}
          />
        </>
      )}
    </div>
  );
}

export default Proyectos;
