import estilosSobreMi from "../estilos/estilos-sobre-mi.module.css";
import PropTypes from "prop-types";

function SobreMi({ idioma }) {
  // Traducciones para el texto en diferentes idiomas
  const traducciones = {
    es: {
      titulo: "Sobre mí",
      parrafo1:
        "¡Hola! Mi nombre es Roxana, soy filóloga inglesa y he descubierto una nueva pasión por el diseño y desarrollo de sitios web. Hace aproximadamente un año, mi interés por la programación surgió cuando me vi en la necesidad de crear una página web con WordPress. Esta experiencia me llevó a aprender acerca de HTML y CSS. A medida que me familiarizaba con estas tecnologías, mi deseo de profundizar en ellas aumentaba.",
      parrafo2: `Fue entonces cuando decidí comprometerme a explorar esta disciplina aún más, por lo que me inscribí en el Máster de Marketing y Desarrollo Web en la Escuela de Diseño CEI de Madrid.

      Lo que más me atrae del desarrollo web es la diversidad de tecnologías involucradas. Disfruto de esta profesión porque me motiva a mantener una actitud proactiva y una curiosidad constante por las innovaciones tecnológicas que surgen. El desarrollo web, para mí, representa una emocionante oportunidad de crecimiento y evolución en mi carrera, donde puedo aplicar de manera creativa y técnica mi experiencia previa.`,
    },
    en: {
      titulo: "About Me",
      parrafo1:
        "Hi there! I'm Roxana, an English philologist who's found a newfound passion for web design and web development. It all started about a year ago when I began my journey into programming, diving headfirst into learning HTML and CSS. This initial step ignited my determination to explore this field further, leading me to enroll in the Master's program in Marketing and Web Development at the CEI Design School in Madrid. During my time there, I had the opportunity to gain expertise in both frontend and backend development.",
      parrafo2:
        "What truly excites me about web development is the vast array of technologies it encompasses. This profession constantly fuels my proactive mindset and curiosity for the ever-evolving world of new technologies. Web development, to me, represents an exhilarating opportunity for personal and professional growth. It's a realm where I can creatively and technically apply my previous experience, all while expanding my professional horizons in the web development field.",
    },
  };

  const traduccionActual = traducciones[idioma];

  return (
    <>
      <div className={estilosSobreMi["contenedor-columna"]}>
        <div className={estilosSobreMi["columna"]}>
          <h1 id="sobre-mi">{traduccionActual.titulo}</h1>
          <p>{traduccionActual.parrafo1}</p>
        </div>
        <div className={estilosSobreMi["columna"]}>
          <p>{traduccionActual.parrafo2}</p>
        </div>
      </div>
    </>
  );
}

SobreMi.propTypes = {
  idioma: PropTypes.string.isRequired,
};

export default SobreMi;
