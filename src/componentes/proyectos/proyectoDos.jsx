import notasUno from "../../assets/notas-uno.svg";
import notasDos from "../../assets/notas-dos.svg";
import notasTres from "../../assets/notas-tres.svg";

import notasUnoMovil from "../../assets/imagen-notas-movil-uno.svg";
import notasDosMovil from "../../assets/imagen-notas-movil-dos.svg";
import notasTresMovil from "../../assets/imagen-notas-movil-tres.svg";

const proyectoDosConfig = {
  es: {
    titulo: "Aplicación de notas",
    descripcion: "Aplicación CRUD",
    texto:
      "La aplicación de notas es un proyecto que desarrollé durante el módulo de desarrollo fullstack en la escuela CEI. Mi objetivo era añadir un toque personalizado a un proyecto que a menudo se presenta de manera bastante genérica. En cuanto a la creación de la interfaz, opté por utilizar JavaScript puro y EJS. En lo que respecta a la autenticación, decidí incorporar Google OAuth 2.0 y Passport.",
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
      github: "https://github.com/usuario/proyecto2",
    },
  },
  en: {
    titulo: "Notes Application",
    descripcion: "Custom CRUD Application.",
    texto:
      "The notes application is a project I developed during the full-stack development module at CEI school. My goal was to add a personalized touch to a project that is often presented quite generically. Regarding the user interface, I chose to use pure JavaScript and EJS. As for authentication, I decided to incorporate Google OAuth 2.0 and Passport.",
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
      github: "https://github.com/user/project2",
    },
  },
};

export default proyectoDosConfig;
