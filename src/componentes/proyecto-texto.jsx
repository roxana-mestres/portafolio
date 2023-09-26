import estilosProyectos from "../estilos/estilos-proyectos.module.css";
function ProyectoTexto() {
  return (
    <>
      <div className={estilosProyectos["proyecto-texto"]}>
        <h3>Página web para empresa Lexigrama</h3>
        <h4>Prestación de servicios editoriales.</h4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
          facilis iste ut quis, ipsum nisi rem ratione officiis vitae eum nihil
          molestias harum accusamus dolorum aspernatur aliquam quos hic
          necessitatibus laudantium ab! Aspernatur saepe deserunt corporis
          nihil, ab illum soluta cumque hic optio, perspiciatis modi quod
          tenetur alias exercitationem ex nemo!
        </p>
        <div className={`${estilosProyectos["pastillas"]} pastillas`}>HTML</div>
        <div className="pastillas">CSS</div>
        <div className="pastillas">JavaScript</div>
      </div>
    </>
  );
}
export default ProyectoTexto;
