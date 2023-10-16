import notasUno from "../../assets/notas-uno.svg";
import notasDos from "../../assets/notas-dos.svg";
import notasTres from "../../assets/notas-tres.svg";

import notasUnoMovil from "../../assets/imagen-notas-movil-uno.svg";
import notasDosMovil from "../../assets/imagen-notas-movil-dos.svg";
import notasTresMovil from "../../assets/imagen-notas-movil-tres.svg";

const proyectoDosConfig = {
  es: {
    titulo: "Aplicación de notas (CRUD)",
    descripcion:
      "La página está alojada en Render, por lo que la carga inicial puede tomar hasta 40 segundos.",
    texto:
      "La aplicación de notas es un proyecto que desarrollé durante el módulo de desarrollo fullstack en la escuela CEI. En cuanto a la creación de la interfaz, opté por utilizar JavaScript puro y EJS. En lo que respecta a la autenticación, decidí incorporar Google OAuth 2.0 y Passport.",
    tecnologias: [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "Express",
      "MongoDB",
      "EJS",
      "Google OAuth 2.0",
      "Passport",
    ],
    imagenes: {
      escritorio: [notasUno, notasDos, notasTres],
      movil: [notasUnoMovil, notasDosMovil, notasTresMovil],
    },
    enlaces: {
      paginaWeb: "https://app-notas.onrender.com/",
      github: "https://github.com/roxana-mestres/app-notas.git",
    },
  },
  en: {
    titulo: "Notes Application (CRUD)",
    descripcion:
      "The page is hosted on Render, which means the initial load time can be up to 40 seconds.",
    texto:
      "The notes application is a project I worked on during the full-stack development module at CEI school. For the user interface, I opted for pure JavaScript and EJS. When it comes to authentication, I integrated Google OAuth 2.0 and Passport.",
    tecnologias: [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "Express",
      "MongoDB",
      "EJS",
      "Google OAuth 2.0",
      "Passport",
    ],
    imagenes: {
      escritorio: [notasUno, notasDos, notasTres],
      movil: [notasUnoMovil, notasDosMovil, notasTresMovil],
    },
    enlaces: {
      paginaWeb: "https://app-notes.onrender.com/",
      github: "https://github.com/roxana-mestres/app-notas.git",
    },
  },
};

export default proyectoDosConfig;
