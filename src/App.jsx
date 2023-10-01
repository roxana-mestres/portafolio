import { useState } from "react";
import Navegacion from "./componentes/navegacion";
import NombreImagen from "./componentes/nombre-imagen";
import SobreMi from "./componentes/sobre-mi";
import Puntos from "./componentes/puntos";
import Tecnologias from "./componentes/tecnologias";
import Proyectos from "./componentes/proyectos";
import proyectoUnoConfig from "./componentes/proyectos/proyectoUno";
import proyectoDosConfig from "./componentes/proyectos/proyectoDos";
import Estudios from "./componentes/estudios";
import SubirBoton from "./componentes/botonSubir";
import Footer from "./componentes/footer";

function App() {
  // Define el estado para el idioma y la función para cambiarlo
  const [idioma, setIdioma] = useState("es");

  // Función para cambiar el idioma
  const cambiarIdioma = () => {
    // Cambia el idioma entre "es" y "en" (o los idiomas que desees)
    const nuevoIdioma = idioma === "es" ? "en" : "es";
    setIdioma(nuevoIdioma);
  };

  // Crea un array que contenga todos tus proyectos en diferentes idiomas
  const proyectos = [
    {
      id: "proyectoUno",
      es: proyectoUnoConfig.es,
      en: proyectoUnoConfig.en,
    },
    {
      id: "proyectoDos",
      es: proyectoDosConfig.es,
      en: proyectoDosConfig.en,
    },
    // Puedes agregar más proyectos aquí según sea necesario
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
