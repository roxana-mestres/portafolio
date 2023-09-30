import { useEffect, useState } from "react";
import estilosNombreImagen from "../estilos/estilos-nombre-imagen.module.css";

function NombreImagen() {
  const [fechaActual, setFechaActual] = useState("");

  useEffect(() => {
    const formatearFecha = () => {
      const opcionesFecha = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      };
      const fecha = new Date();
      const fechaFormateada = fecha
        .toLocaleDateString("es-ES", opcionesFecha)
        .replace(",", "");
      setFechaActual(fechaFormateada);
    };
    formatearFecha();
  }, []);

  const copiarTexto = (texto, botonId) => {
    navigator.clipboard.writeText(texto).then(() => {
      const botonCopiar = document.getElementById(botonId);
      botonCopiar.classList.add(estilosNombreImagen["clic"]);

      setTimeout(() => {
        botonCopiar.classList.remove(estilosNombreImagen["clic"]);
      }, 2000);
    });
  };

  return (
    <>
      <div className={`${estilosNombreImagen["contenedor-general"]}`}>
        <div className={estilosNombreImagen["fecha-ubicacion"]}>
          <div className={estilosNombreImagen["fecha"]}>{fechaActual}</div>
          <div className={estilosNombreImagen["ubicacion"]}>
            <span className="material-symbols-outlined">location_on</span>
            <p>Madrid, España</p>
          </div>
        </div>
        <div className={estilosNombreImagen["titulo-imagen"]}>
          <div className={estilosNombreImagen["titulo"]}>
            <h1>Roxana Mestres</h1>
            <h2 className={`${estilosNombreImagen["titulo"]}`}>
              Diseño y desarrollo web
            </h2>
            <button className={"boton " + estilosNombreImagen["boton-cv"]}>
              Currículum
            </button>
          </div>
          <div className={estilosNombreImagen["imagen"]}>
            <div className="imagen"></div>
          </div>
        </div>
        <div className={estilosNombreImagen["contacto"]}>
          <div className={estilosNombreImagen["email"]}>
            <span
              className="material-symbols-outlined"
              style={{ cursor: "pointer" }}
            >
              mail
            </span>
            <p className={estilosNombreImagen["texto-email"]}>
              <span
                id="email-text"
                onClick={() =>
                  copiarTexto("roxana.mestres@gmail.com", "boton-copiar-email")
                }
              >
                roxana.mestres@gmail.com
              </span>
            </p>
            <span
              id="boton-copiar-email"
              className={`material-symbols-outlined ${estilosNombreImagen["copiar"]}`}
              style={{ cursor: "pointer" }}
              onClick={() =>
                copiarTexto("roxana.mestres@gmail.com", "boton-copiar-email")
              }
            >
              content_copy
            </span>
          </div>

          <div className={estilosNombreImagen["telefono"]}>
            <span className="material-symbols-outlined">call</span>
            <p className={estilosNombreImagen["texto-telefono"]}>
              <span
                id="telefono-text"
                onClick={() =>
                  copiarTexto("+34 682 646 818", "boton-copiar-telefono")
                }
              >
                +34 682 646 818
              </span>
            </p>
            <span
              id="boton-copiar-telefono"
              className="material-symbols-outlined"
              style={{ cursor: "pointer" }}
              onClick={() =>
                copiarTexto("+34 682 646 818", "boton-copiar-telefono")
              }
            >
              content_copy
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default NombreImagen;
