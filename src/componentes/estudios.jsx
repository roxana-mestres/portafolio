import estilosEstudios from "../estilos/estilos-estudios.module.css";
function Estudios() {
  return (
    <>
      <div className={estilosEstudios["div-estudios"]}>
        <div className={estilosEstudios["div-titulo"]}>
          <h1 id="estudios">Estudios</h1>
          <button className={`${estilosEstudios["boton"]} boton`}>
            Currículum
          </button>
        </div>
        <div className={estilosEstudios["texto-estudios"]}>
          <h4 className={estilosEstudios["h4"]}>
            2022 - 2023 CEI: ESCUELA DE DISEÑO Y MARKETING, Máster avanzado en
            marketing digital, diseño y desarrollo web
          </h4>
          <ul>
            <li>Curso de Copywriting</li>
            <li>Curso en Adobe InDesign e Illustrator</li>
            <li>Curso en Corrección Profesional</li>
          </ul>
          <h4 className={estilosEstudios["h4"]}>
            2018 Universidad Pontificia Católica de Chile, Diplomado en
            Ediciones y Publicaciones
          </h4>
          <ul>
            <li>Certificate of Proficiency in English (C2)</li>
          </ul>
          <h4 className={estilosEstudios["h4"]}>
            2017 - 2018 Universidad Autónoma de Barcelona, Máster en Traducción
            Audiovisual
          </h4>
          <ul>
            <li>Certificate in Advanced English</li>
          </ul>
          <h4 className={estilosEstudios["h4"]}>
            2012 - 2016 Universidad de Salamanca, Grado en Estudios Ingleses
            (Filología Inglesa)
          </h4>
          <ul>
            <li>First Certificate in English</li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default Estudios;
