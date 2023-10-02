import estilosSobreMi from "../estilos/estilos-sobre-mi.module.css";
import PropTypes from "prop-types";

function SobreMi({ idioma }) {
  // Traducciones para el texto en diferentes idiomas
  const traducciones = {
    es: {
      titulo: "Sobre mí",
      parrafo1:
        "¡Hola! Soy Roxana, una filóloga inglesa que ha encontrado una nueva pasión en el diseño y la creación de páginas web. Hace aproximadamente un año, mi interés por la programación comenzó cuando empecé a aprender HTML y CSS. Esto me llevó a tomar la decisión de profundizar en esta disciplina, inscribiéndome en el máster de marketing y desarrollo web en la Escuela de Diseño CEI de Madrid, donde adquirí conocimientos tanto en el frontend como en el backend.",
      parrafo2:
        "Lo que más me atrae del desarrollo web es la amplia variedad de tecnologías con las que se trabaja. Disfruto de esta profesión porque me impulsa a mantener una actitud proactiva y una curiosidad constante por las nuevas tecnologías que surgen constantemente. Para mí, el desarrollo web representa una emocionante oportunidad de crecimiento y evolución en el ámbito laboral, donde puedo aplicar de manera creativa y técnica mis habilidades lingüísticas y mi experiencia previa.",
    },
    en: {
      titulo: "About Me",
      parrafo1:
        "Hi! My name is Roxana, an English philologist who has discovered a newfound passion for web design and development. About a year ago, my journey into programming began as I delved into learning HTML and CSS. This journey led me to make the decision to pursue this field further, enrolling in the Master's program in Marketing and Web Development at the CEI Design School in Madrid. Here, I gained knowledge in both frontend and backend development.",
      parrafo2:
        "What particularly excites me about web development is the extensive range of technologies that it involves. I find great satisfaction in this profession because it encourages me to maintain a proactive mindset and an insatiable curiosity for the ever-evolving world of new technologies. To me, web development represents an exhilarating opportunity for personal and professional growth, where I can creatively and technically apply my language skills and prior experience.",
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
