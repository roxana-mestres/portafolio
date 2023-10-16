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
      "Lexigrama es un proyecto personal, una página web desarrollada exclusivamente con HTML, CSS y JavaScript puro, sin utilizar bibliotecas como jQuery o Tailwind CSS. Además, incluye una base de datos SQL para gestionar suscripciones y formularios de contacto.",
    tecnologias: ["HTML", "CSS", "JavaScript", "mySQL"],
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
      paginaWeb: "https://www.lexigrama.com/",
      github: "https://github.com/roxana-mestres/lexigrama.git",
    },
  },
  en: {
    titulo: "Lexigrama Company Website",
    descripcion: "Custom Editorial Services.",
    texto:
      "Lexigrama is a personal endeavor—a website crafted entirely using HTML, CSS, and pure JavaScript, without relying on libraries like jQuery or Tailwind CSS. It also incorporates an SQL database to handle subscriptions and contact forms.",
    tecnologias: ["HTML", "CSS", "JavaScript", "mySQL"],
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
      paginaWeb: "https://www.lexigrama.com/",
      github: "https://github.com/roxana-mestres/lexigrama.git",
    },
  },
};

export default proyectoUnoConfig;
