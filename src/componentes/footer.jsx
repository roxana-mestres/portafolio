import PropTypes from "prop-types";
import estilosFooter from "../estilos/estilos-footer.module.css";

function Footer({ idioma }) {
  const traducciones = {
    es: "Página diseñada por Roxana Mestres",
    en: "Designed and built by Roxana Mestres",
  };

  return <p className={estilosFooter["parrafo"]}>{traducciones[idioma]}</p>;
}

Footer.propTypes = {
  idioma: PropTypes.string.isRequired,
};

export default Footer;
