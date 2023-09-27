import Navegacion from "./componentes/navegacion";
import NombreImagen from "./componentes/nombre-imagen";
import SobreMi from "./componentes/sobre-mi";
import Puntos from "./componentes/puntos";
import Tecnologias from "./componentes/tecnologias";
import Proyectos from "./componentes/proyectos";
import proyectoUnoConfig from "./componentes/proyectos/proyectoUno";
import Estudios from "./componentes/estudios";
import SubirBoton from "./componentes/botonSubir";
import Footer from "./componentes/footer";

function App() {
  return (
    <>
      <Navegacion />
      <NombreImagen />
      <Puntos />
      <SobreMi />
      <Puntos />
      <Tecnologias />
      <Puntos />
      <Proyectos proyecto={proyectoUnoConfig} />
      <Puntos />
      <Estudios />
      <Footer />
      <SubirBoton />
    </>
  );
}

export default App;
