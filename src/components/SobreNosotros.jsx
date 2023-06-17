//Styles
import styles from "../Modules/SobreNosotros.module.css"
//Imagenes
import img from "../assets/icons/perro.png"
//dependencias
import ReactPlayer from "react-player"

function Sobremi() {  
  return (  
   <>
    <div className={styles.sobre}>
      <h1>Sobre Nosotros</h1>
    </div>  
    <div id="SobreNosotros" className={styles.contenedor}> 
      <div className={styles.video}>
        <h1>Video Promocional</h1>
        <p>Muy Pronto...</p>
      </div>
    </div> 
   </>
  )
}

export default Sobremi 
 