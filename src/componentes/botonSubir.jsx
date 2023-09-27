import estiloSubirBoton from "../estilos/estilo-subir-boton.module.css";
import { useState, useEffect } from "react";

function SubirBoton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleButtonClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          className={estiloSubirBoton["subir-boton"]}
          onClick={handleButtonClick}
        >
          <span
            className="material-symbols-outlined"
            style={{ fontSize: "65px", backgroundColor: "transparent" }}
          >
            expand_less
          </span>
        </button>
      )}
    </>
  );
}

export default SubirBoton;
