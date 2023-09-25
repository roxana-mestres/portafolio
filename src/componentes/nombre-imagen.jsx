import estilosNombreImagen from "../estilos/estilos-nombre-imagen.module.css";
function NombreImagen() {
  return (
    <>
      <div className={estilosNombreImagen["contenedor-general"]}>
        <div className={estilosNombreImagen["fecha-ubicacion"]}>
          <div className="fecha">lunes 25 de septiembre, 2023</div>
          <div className={estilosNombreImagen["ubicacion"]}>
            <span className="material-symbols-outlined">location_on</span>
            <p>Madrid, España</p>
          </div>
        </div>
        <div className={estilosNombreImagen["titulo-imagen"]}>
          <div className={estilosNombreImagen["titulo"]}>
            <h1>Roxana Mestres</h1>
            <h3>Desarrollo y diseño web</h3>
            <button className="boton">Currículum</button>
          </div>
          <div className={estilosNombreImagen["imagen"]}>
            <div className="imagen"></div>
          </div>
        </div>
        <div className={estilosNombreImagen["contacto"]}>
          <div className={estilosNombreImagen["telefono"]}>
            <span className="material-symbols-outlined">call</span>
            <p>+34 682 646 818</p>
            <span className="material-symbols-outlined">content_copy</span>
          </div>
          <div className={estilosNombreImagen["email"]}>
            <span className="material-symbols-outlined">mail</span>
            <p>roxana.mestres@gmail.com</p>
            <span className="material-symbols-outlined">content_copy</span>
          </div>
        </div>
        <div className={estilosNombreImagen["cuadricula"]}></div>
      </div>
    </>
  );
}

export default NombreImagen;
