import estilosSobreMi from "../estilos/estilos-sobre-mi.module.css";
import PropTypes from "prop-types";

function SobreMi({ idioma }) {
  // Traducciones para el texto en diferentes idiomas
  const traducciones = {
    es: {
      titulo: "Sobre mí",
      parrafo1:
        "¡Hola! Mi nombre es Roxana, soy filóloga inglesa y he encontrado una nueva pasión en el diseño y la creación de páginas web. Mi interés por la programación comenzó, aproximadamente hace un año, al querer desarrollar una página web con WordPress, pues me fue imprescindible aprender algo de HTML y CSS. Cuanto más me adentraba en estas tecnologías, más quería seguir aprendiendo. Esto me llevó a tomar la decisión de profundizar en esta disciplina,",
      parrafo2:
        "inscribiéndome en el máster de marketing y desarrollo web en la Escuela de Diseño CEI de Madrid, donde adquirí conocimientos tanto en el frontend como en el backend. Lo que más me atrae del desarrollo web es la amplia variedad de tecnologías con las que se trabaja. Disfruto de esta profesión porque me impulsa a mantener una actitud proactiva y una curiosidad por las nuevas tecnologías que surgen constantemente. Para mí, el desarrollo web representa una emocionante oportunidad de crecimiento y evolución en el ámbito laboral, donde puedo aplicar de manera creativa y técnica mi experiencia previa.",
    },
    en: {
      titulo: "About Me",
      parrafo1:
        "Hi there! I'm Roxana, an English philologist who's found a newfound passion for web design and development. It all started about a year ago when I began my journey into programming, diving headfirst into learning HTML and CSS. This initial step ignited my determination to explore this field further, leading me to enroll in the Master's program in Marketing and Web Development at the CEI Design School in Madrid. During my time there, I had the opportunity to gain expertise in both frontend and backend development.",
      parrafo2:
        "What truly excites me about web development is the vast array of technologies it encompasses. This profession constantly fuels my proactive mindset and insatiable curiosity for the ever-evolving world of new technologies. Web development, to me, represents an exhilarating opportunity for personal and professional growth. It's a realm where I can creatively and technically apply my previous experience, all while maintaining a strong enthusiasm for ongoing learning and expanding my professional horizons in the web development field.",
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
