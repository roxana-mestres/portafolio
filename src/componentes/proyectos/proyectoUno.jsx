import lexigramaUno from "../../assets/lexigrama-uno.svg";
import lexigramaDos from "../../assets/lexigrama-dos.svg";
import lexigramaTres from "../../assets/lexigrama-tres.svg";
import lexigramaCuatro from "../../assets/lexigrama-cuatro.svg";

import lexigramaUnoMovil from "../../assets/imagen-lexigrama-movil-uno.svg";
import lexigramaDosMovil from "../../assets/imagen-lexigrama-movil-dos.svg";
import lexigramaTresMovil from "../../assets/imagen-lexigrama-movil-tres.svg";
import lexigramaCuatroMovil from "../../assets/imagen-lexigrama-movil-cuatro.svg";

const proyectoUnoConfig = {
  titulo: "Página web para empresa Lexigrama",
  descripcion: "Prestación de servicios editoriales.",
  texto:
    "Lexigrama es un proyecto personal, una página web desarrollada exclusivamente con HTML, CSS y JavaScript puro, sin utilizar bibliotecas como jQuery o Tailwind CSS. Además, incluye una base de datos SQL para gestionar suscripciones y formularios de contacto. Uno de los principales desafíos fue la creación de efectos especiales, como el efecto de máquina de escribir en la sección de la cabecera y la galería de reseñas.",
  tecnologias: ["HTML", "CSS", "JavaScript"],
  imagenes: {
    escritorio: [lexigramaUno, lexigramaDos, lexigramaTres, lexigramaCuatro],
    movil: [
      lexigramaUnoMovil,
      lexigramaDosMovil,
      lexigramaTresMovil,
      lexigramaCuatroMovil,
    ],
  },
  enlaces: {
    // Añade las propiedades de enlaces aquí
    paginaWeb: "https://lexigrama.com/",
    github: "https://github.com/usuario/proyecto1",
  },
};

export default proyectoUnoConfig;
