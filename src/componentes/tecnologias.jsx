import estilosTecnologia from "../estilos/estilos-tecnologia.module.css";
function Tecnologias() {
  return (
    <>
      <div className="bordes margenes-contenedor">
        <h1 id="tecnologias" className={estilosTecnologia["titulo"]}>Tecnologías</h1>
        <h3 className={estilosTecnologia["subtitulo"]}>Frontend:</h3>
        <div className="contenedor-pastillas">
          <div className="pastillas">HTML</div>
          <div className="pastillas">CSS</div>
          <div className="pastillas">JavaScript</div>
          <div className="pastillas">Fundamentos UX/UI</div>
          <div className="pastillas">Figma</div>
        </div>
        <h3 className={estilosTecnologia["subtitulo"]}>Backend:</h3>
        <div className="contenedor-pastillas">
          <div className="pastillas">Node.js</div>
          <div className="pastillas">Express</div>
          <div className="pastillas">MongoDB</div>
          <div className="pastillas">EJS</div>
        </div>
        <h3 className={estilosTecnologia["subtitulo"]}>
          Conocimientos básicos:
        </h3>
        <div className="contenedor-pastillas">
          <div className="pastillas">React.js</div>
          <div className="pastillas">WordPress</div>
          <div className="pastillas">Adobe InDesign</div>
          <div className="pastillas">Adobe Illustrator</div>
        </div>
        <h3 className={estilosTecnologia["subtitulo"]}>Otros:</h3>
        <div className={`${estilosTecnologia["espacio"]} contenedor-pastillas`}>
          <div className="pastillas">Git</div>
          <div className="pastillas">GitHub</div>
          <div className="pastillas">Inglés avanzado (C2)</div>
        </div>
      </div>
    </>
  );
}
export default Tecnologias;
