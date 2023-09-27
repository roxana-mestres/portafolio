import { useEffect, useState } from "react";
import estilosNombreImagen from "../estilos/estilos-nombre-imagen.module.css";
function NombreImagen() {
  const [fechaActual, setFechaActual] = useState("");
  const [emailTextoCopiado, setEmailTextoCopiado] = useState("");
  const [telefonoTextoCopiado, setTelefonoTextoCopiado] = useState("");

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

  const copiarTexto = (texto, setTextoCopiado) => {
    navigator.clipboard.writeText(texto).then(() => {
      setTextoCopiado("Texto copiado");
      setTimeout(() => {
        setTextoCopiado("");
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
            <span className="material-symbols-outlined">mail</span>
            <p>roxana.mestres@gmail.com</p>
            <span
              className="material-symbols-outlined"
              style={{ cursor: "pointer" }}
              onClick={() =>
                copiarTexto("roxana.mestres@gmail.com", setEmailTextoCopiado)
              }
            >
              content_copy
            </span>
            {emailTextoCopiado && (
              <p
                style={{
                  backgroundColor: "#222",
                  color: "#EAE1DF",
                  display: "inline-block",
                  padding: "4px 8px",
                  marginLeft: "8px",
                  borderRadius: "5px",
                }}
                className={estilosNombreImagen["texto-copiado-email"]}
              >
                {emailTextoCopiado}
              </p>
            )}
          </div>
          <div className={estilosNombreImagen["telefono"]}>
            <span className="material-symbols-outlined">call</span>
            <p>+34 682 646 818</p>
            <span
              className="material-symbols-outlined"
              style={{ cursor: "pointer" }}
              onClick={() =>
                copiarTexto("+34 682 646 818", setTelefonoTextoCopiado)
              }
            >
              content_copy
            </span>
            {telefonoTextoCopiado && (
              <p
                style={{
                  backgroundColor: "#222",
                  color: "#EAE1DF",
                  display: "inline-block",
                  padding: "4px 8px",
                  marginLeft: "8px",
                  borderRadius: "5px",
                }}
                className={estilosNombreImagen["texto-copiado"]}
              >
                {telefonoTextoCopiado}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default NombreImagen;
