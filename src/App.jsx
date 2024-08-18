import { useState } from "react";
import Navegacion from "./componentes/navegacion";
import NombreImagen from "./componentes/nombre-imagen";
import SobreMi from "./componentes/sobre-mi";
import Puntos from "./componentes/puntos";
import Tecnologias from "./componentes/tecnologias";
import Proyectos from "./componentes/proyectos";
import proyectoUnoConfig from "./componentes/proyectos/proyectoUno";
import proyectoDosConfig from "./componentes/proyectos/proyectoDos";
import proyectoTresConfig from "./componentes/proyectos/proyectoTres";
import proyectoCuatroConfig from "./componentes/proyectos/proyectoCuatro";
import Estudios from "./componentes/estudios";
import SubirBoton from "./componentes/botonSubir";
import Footer from "./componentes/footer";

function App() {
  const [idioma, setIdioma] = useState("es");

  const cambiarIdioma = () => {
    const nuevoIdioma = idioma === "es" ? "en" : "es";
    setIdioma(nuevoIdioma);
  };

  const proyectos = [
    {
      id: "proyectoCuatro",
      es: proyectoCuatroConfig.es,
      en: proyectoCuatroConfig.en,
    },
    {
      id: "proyectoTres",
      es: proyectoTresConfig.es,
      en: proyectoTresConfig.en,
    },
    {
      id: "proyectoDos",
      es: proyectoDosConfig.es,
      en: proyectoDosConfig.en,
    },
    {
      id: "proyectoUno",
      es: proyectoUnoConfig.es,
      en: proyectoUnoConfig.en,
    },
  ];

  return (
    <>
      <Navegacion idioma={idioma} cambiarIdioma={cambiarIdioma} />
      <NombreImagen idioma={idioma} />
      <Puntos />
      <SobreMi idioma={idioma} />
      <Puntos />
      <Tecnologias idioma={idioma} />
      <Puntos />
      <Proyectos idioma={idioma} proyectos={proyectos} />
      <Puntos />
      <Estudios idioma={idioma} />
      <Footer idioma={idioma} />
      <SubirBoton />
    </>
  );
}

export default App;
