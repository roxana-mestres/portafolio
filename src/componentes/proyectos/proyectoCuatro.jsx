import literatyEsc1 from "../../assets/literaty-esc-1.png";
import literatyEsc2 from "../../assets/literaty-esc-2.png";
import literatyEsc3 from "../../assets/literaty-esc-3.png";
import literatyEsc4 from "../../assets/literaty-esc-4.png";
import literatyEsc5 from "../../assets/literaty-esc-5.png";
import literatyEsc6 from "../../assets/literaty-esc-6.png";
import literatyEsc7 from "../../assets/literaty-esc-7.png";
import literatyEsc8 from "../../assets/literaty-esc-8.png";

import literatyMovil1 from "../../assets/literaty-movil-1.png";
import literatyMovil2 from "../../assets/literaty-movil-2.png";
import literatyMovil3 from "../../assets/literaty-movil-3.png";
import literatyMovil4 from "../../assets/literaty-movil-4.png";
import literatyMovil5 from "../../assets/literaty-movil-5.png";
import literatyMovil6 from "../../assets/literaty-movil-6.png";
import literatyMovil7 from "../../assets/literaty-movil-7.png";
import literatyMovil8 from "../../assets/literaty-movil-8.png";

const proyectoCuatroConfig = {
  es: {
    titulo: "Literaty",
    descripcion:
      "La página está alojada en Render, por lo que el backend puede tardar unos 60 segundos en activarse al crear una cuenta o iniciar sesión. Gracias por tu paciencia mientras el servicio se pone en marcha.",
    texto:
      "Literaty es una aplicación web para entusiastas de la lectura, desarrollada con React en el frontend y Node.js junto con Express en el backend. Emplea JSON Web Tokens (JWT) para gestionar la autenticación, utilizando tanto el access_token como el refresh_token almacenados en cookies para una mayor seguridad. La aplicación se conecta a la API de Google Books, permitiendo a los usuarios buscar y explorar una amplia gama de libros. En Literaty, puedes guardar libros en listas, eliminarlos, leer reseñas y buscar títulos de interés.",
    tecnologias: ["React", "CSS", "JWT", "Node.js", "Express", "MongoDB", "Git", "GitHub"],
    imagenes: {
      escritorio: [literatyEsc1, literatyEsc2, literatyEsc3, literatyEsc4, literatyEsc5, literatyEsc6, literatyEsc7, literatyEsc8],
      movil: [literatyMovil1, literatyMovil2, literatyMovil3, literatyMovil4, literatyMovil5, literatyMovil6, literatyMovil7, literatyMovil8],
    },
    enlaces: {
      paginaWeb: "https://literaty-front.onrender.com/",
      github: "https://github.com/roxana-mestres/literaty.git",
    },
  },
  en: {
    titulo: "Literaty",
    descripcion:
      "The site is hosted on Render, so the backend might take about 60 seconds to activate when you create an account or log in. Thanks for your patience while the service starts up.",
    texto:
      "Literaty is a web application for book enthusiasts, developed with React on the frontend and Node.js with Express on the backend. It uses JSON Web Tokens (JWT) for authentication, employing both access_token and refresh_token stored in cookies for added security. The application connects to the Google Books API, allowing users to search for and explore a wide range of books. On Literaty, you can save books to lists, delete them, read reviews, and search for titles of interest.",
    tecnologias: ["JWT", "CSS", "JavaScript", "Node.js", "Express", "MongoDB", "Git", "GitHub"],
    imagenes: {
      escritorio: [literatyEsc1, literatyEsc2, literatyEsc3, literatyEsc4, literatyEsc5, literatyEsc6, literatyEsc7, literatyEsc8],
      movil: [literatyMovil1, literatyMovil2, literatyMovil3, literatyMovil4, literatyMovil5, literatyMovil6, literatyMovil7, literatyMovil8],
    },
    enlaces: {
      paginaWeb: "https://literaty-front.onrender.com/",
      github: "https://github.com/roxana-mestres/literaty.git",
    },
  },
};

export default proyectoCuatroConfig;
