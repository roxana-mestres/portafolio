import PropTypes from "prop-types";

function DescargarCV({
  traduccion,
  estilos,
  enlacePDFIngles,
  enlacePDFEspanol,
  idioma,
}) {
  const enlaceDescarga = idioma === "en" ? enlacePDFIngles : enlacePDFEspanol;

  const descargarPDF = () => {
    const link = document.createElement("a");
    link.href = enlaceDescarga;
    link.target = "_blank";
    link.download = "Roxana_Mestres_CV.pdf";
    link.click();
  };

  return (
    <div>
      <button onClick={descargarPDF} className={"boton " + estilos}>
        {traduccion}
      </button>
    </div>
  );
}

DescargarCV.propTypes = {
  traduccion: PropTypes.string.isRequired,
  estilos: PropTypes.string.isRequired,
  enlacePDFIngles: PropTypes.string.isRequired,
  enlacePDFEspanol: PropTypes.string.isRequired,
  idioma: PropTypes.string.isRequired,
};

export default DescargarCV;
