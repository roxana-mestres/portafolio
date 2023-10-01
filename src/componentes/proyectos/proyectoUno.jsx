import lexigramaUno from "../../assets/lexigrama-uno.svg";
import lexigramaDos from "../../assets/lexigrama-dos.svg";
import lexigramaTres from "../../assets/lexigrama-tres.svg";
import lexigramaCuatro from "../../assets/lexigrama-cuatro.svg";

import lexigramaUnoMovil from "../../assets/imagen-lexigrama-movil-uno.svg";
import lexigramaDosMovil from "../../assets/imagen-lexigrama-movil-dos.svg";
import lexigramaTresMovil from "../../assets/imagen-lexigrama-movil-tres.svg";
import lexigramaCuatroMovil from "../../assets/imagen-lexigrama-movil-cuatro.svg";

const proyectoUnoConfig = {
  es: {
    titulo: "Sitio web de Lexigrama",
    descripcion: "Servicios editoriales personalizados.",
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
      paginaWeb: "https://lexigrama.com/",
      github: "https://github.com/usuario/proyecto1",
    },
  },
  en: {
    titulo: "Lexigrama Company Website",
    descripcion: "Custom Editorial Services.",
    texto:
      "Lexigrama is a personal project, a website developed exclusively with HTML, CSS, and pure JavaScript, without using libraries like jQuery or Tailwind CSS. It also includes an SQL database to manage subscriptions and contact forms. One of the main challenges was creating special effects, such as the typewriter effect in the header section and the reviews gallery.",
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
      paginaWeb: "https://lexigrama.com/",
      github: "https://github.com/user/project1",
    },
  },
};

export default proyectoUnoConfig;
