import estilosSobreMi from "../estilos/estilos-sobre-mi.module.css";

function SobreMi() {
  return (
    <>
      <div className={estilosSobreMi["contenedor-columna"]}>
        <div className={estilosSobreMi["columna"]}>
          <h1 id="sobre-mi">Sobre mí</h1>
          <p>
            ¡Hola! Soy Roxana, una filóloga inglesa que ha encontrado una nueva
            pasión en el diseño y la creación de páginas web. Hace
            aproximadamente un año, mi interés por la programación comenzó
            cuando empecé a aprender HTML y CSS. Esto me llevó a tomar la
            decisión de profundizar en esta disciplina, inscribiéndome en el
            máster de marketing y desarrollo web en la Escuela de Diseño CEI de
            Madrid, donde adquirí conocimientos tanto en el frontend como en el
            backend.
          </p>
        </div>
        <div className={estilosSobreMi["columna"]}>
          <p>
            Lo que más me atrae del desarrollo web es la amplia variedad de
            tecnologías con las que se trabaja. Disfruto de esta profesión
            porque me impulsa a mantener una actitud proactiva y una curiosidad
            constante por las nuevas tecnologías que surgen constantemente. Para
            mí, el desarrollo web representa una emocionante oportunidad de
            crecimiento y evolución en el ámbito laboral, donde puedo aplicar de
            manera creativa y técnica mis habilidades lingüísticas y mi
            experiencia previa.
          </p>
        </div>
      </div>
    </>
  );
}

export default SobreMi;
