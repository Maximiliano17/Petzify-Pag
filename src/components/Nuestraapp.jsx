//Styles
import styles from "../Modules/Nuestra.module.css"
//Imagenes
import img from "../assets/img/fondo_imagen.png"
import imagen from "../assets/img/iphone.png"
import fondo from "../assets/img/celular.png"

function Nuestra() {  
    
    return (    
        <> 
         <div className={styles.sobre}>
          <h1>Nuestra App</h1>
        </div>  
        <div id="Nuestra" className={styles.contenedor}> 
          <div className={styles.caracteristicas}>
             <h1 className={styles.titulo}>Beneficios</h1>
               <p className={styles.parrafo}>
                Unete a una comunidad muy carismatica
               </p>
          </div>
         <div className={styles.imagen}>
           <img src={img} /> 
         </div>
         <div className={styles.imagen_res}>
           <img src={imagen} /> 
         </div>
        </div> 
        <div className={styles.seccionesapp}>

        </div>
       </>
     
    )
  } 
  
  export default Nuestra
  