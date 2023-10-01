import notasUno from "../../assets/notas-uno.svg";
import notasDos from "../../assets/notas-dos.svg";
import notasTres from "../../assets/notas-tres.svg";

import notasUnoMovil from "../../assets/imagen-notas-movil-uno.svg";
import notasDosMovil from "../../assets/imagen-notas-movil-dos.svg";
import notasTresMovil from "../../assets/imagen-notas-movil-tres.svg";

const proyectoDosConfig = {
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
    // Añade las propiedades de enlaces aquí
    paginaWeb: "https://app-notas.onrender.com/",
    github: "https://github.com/usuario/proyecto2",
  },
};

export default proyectoDosConfig;
