import PropTypes from "prop-types";
import estilosEstudios from "../estilos/estilos-estudios.module.css";
import DescargarCV from "./descargarCV";

function Estudios({ idioma }) {
  const enlacePDFIngles = "/pdfs/CV_Roxana_Mestres_EN.pdf";
  const enlacePDFEspanol = "/pdfs/CV_Roxana_Mestres_ES.pdf";

  const traducciones = {
    es: {
      titulo: "Estudios",
      boton: "Currículum",
      estudios: [
        {
          fecha: "sept. 2024 - actualmente",
          titulo: "CESUR",
          subtitulo: "Grado Superior en Desarrollo de Aplicaciones Web (DAW)",
        },
        {
          fecha: "2022 - 2023",
          titulo: "CEI: ESCUELA DE DISEÑO Y MARKETING",
          subtitulo:
            "Máster avanzado en marketing digital, diseño y desarrollo web",
          cursos: [
            "Curso de Copywriting",
            "Curso en Adobe InDesign e Illustrator",
            "Curso en Corrección Profesional",
          ],
        },
        {
          fecha: "2018",
          titulo: "Universidad Pontificia Católica de Chile",
          subtitulo: "Diplomado en Ediciones y Publicaciones",
          cursos: ["Certificate of Proficiency in English (C2)"],
        },
        {
          fecha: "2017 - 2018",
          titulo: "Universidad Autónoma de Barcelona",
          subtitulo: "Máster en Traducción Audiovisual",
          cursos: ["Certificate in Advanced English"],
        },
        {
          fecha: "2012 - 2016",
          titulo: "Universidad de Salamanca",
          subtitulo: "Grado en Estudios Ingleses (Filología Inglesa)",
          cursos: ["First Certificate in English"],
        },
      ],
    },
    en: {
      titulo: "Education",
      boton: "Resume",
      estudios: [
        {
          fecha: "Sept. 2024 - Present",
          titulo: "CESUR",
          subtitulo: "Professional Diploma in Web Application Development (DAW)",
        },
        {
          fecha: "2022 - 2023",
          titulo: "CEI: ESCUELA DE DISEÑO Y MARKETING",
          subtitulo:
            "Advanced Course in Digital Marketing, Design, and Web Development",
          cursos: [
            "Copywriting Course",
            "Adobe InDesign and Illustrator Course",
            "Professional Proofreading Course",
          ],
        },
        {
          fecha: "2018",
          titulo: "Universidad Pontificia Católica de Chile",
          subtitulo: "Diploma in Publishing and Publications",
          cursos: ["Certificate of Proficiency in English (C2)"],
        },
        {
          fecha: "2017 - 2018",
          titulo: "Universidad Autónoma de Barcelona",
          subtitulo: "Master's Degree in Audiovisual Translation",
          cursos: ["Certificate in Advanced English"],
        },
        {
          fecha: "2012 - 2016",
          titulo: "Universidad de Salamanca",
          subtitulo: "Bachelor's Degree in English Studies (English Philology)",
          cursos: ["First Certificate in English"],
        },
      ],
    },
  };

  return (
    <div className={estilosEstudios["div-estudios"]}>
      <div className={estilosEstudios["div-titulo"]}>
        <h1 id="estudios">{traducciones[idioma].titulo}</h1>
        <DescargarCV
          traduccion={traducciones[idioma].boton}
          estilos={estilosEstudios["boton"]}
          enlacePDFIngles={enlacePDFIngles}
          enlacePDFEspanol={enlacePDFEspanol}
          idioma={idioma}
        />
      </div>
      <div className={estilosEstudios["texto-estudios"]}>
        {traducciones[idioma].estudios.map((estudio, index) => (
          <div key={index}>
            <h4 className={estilosEstudios["h4"]}>
              {estudio.fecha} {estudio.titulo} <br /> {estudio.subtitulo}
            </h4>
            {estudio.cursos && (
              <ul>
                {estudio.cursos.map((curso, cursoIndex) => (
                  <li key={cursoIndex}>{curso}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

Estudios.propTypes = {
  idioma: PropTypes.string.isRequired,
};

export default Estudios;