import estilosSobreMi from "../estilos/estilos-sobre-mi.module.css";

function SobreMi() {
  return (
    <>
      <div className={estilosSobreMi["contenedor-columna"]}>
        <div className={estilosSobreMi["columna"]}>
          <h1>Sobre mí</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non
            arcu nec odio hendrerit fringilla. Sed vestibulum ex vel ligula
            egestas, vel blandit ipsum volutpat.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Nulla non arcu nec odio hendrerit
            fringilla. Sed vestibulum ex vel ligula egestas, vel blandit ipsum
            volutpat.
          </p>
        </div>
        <div className={estilosSobreMi["columna"]}>
          <p>
            Fusce condimentum tortor id est venenatis, ut elementum tellus
            dapibus. Duis consequat eros in tellus iaculis, at fringilla libero
            feugiat. Sed volutpat nec elit nec hendrerit. Integer id sem eget
            justo viverra rhoncus. Ut eu tortor id ligula dictum dictum. Duis
            consequat eros in tellus iaculis, at fringilla libero feugiat. Sed
            volutpat nec elit nec hendrerit. Integer id sem eget justo viverra
            rhoncus. Ut eu tortor id ligula dictum dictum. Integer id sem eget
            justo viverra rhoncus. Ut eu tortor id ligula dictum dictum.
          </p>
        </div>
      </div>
    </>
  );
}

export default SobreMi;
