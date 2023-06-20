//Styles
import styles from "../Modules/Eventos.module.css"

function Eventos() {

  return (
   <>
    {/* Eventos */}
        <div className={styles.sobre}>
          <h1>Eventos</h1> 
        </div> 
       <div id="eventos" className={styles.contenedor}>
          Proximamente... 
       </div>  
   </>
  )
}

export default Eventos
