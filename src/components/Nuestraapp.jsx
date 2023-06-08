//Styles
import styles from "../Modules/Nuestra.module.css"
//Imagenes
import img from "../assets/icons/gato-negro.png"
import fondo from "../assets/img/celular.png"

function Nuestra() { 
   
    return (   
        <>
        <div className={styles.sobre}>
          <h1>Nuestra App</h1>
        </div> 
        <div id="Nuestra" className={styles.contenedor}> 
          <section className={styles.foto}>
            <img src={img} alt="Img" />
           </section>
          <section className={styles.Informacion}>
          <div className={styles.tarjeta}>
            <img src={fondo} alt="Fondo" />
          </div>
           <div className={styles.fondo}>
              
           </div>
          </section>

        </div> 
       </>
     
    )
  } 
  
  export default Nuestra
  