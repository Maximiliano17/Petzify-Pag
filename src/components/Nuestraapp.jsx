//Styles
import styles from "../Modules/Nuestra.module.css"
//Imagenes
import img from "../assets/img/fondo_imagen.png"
import imagen from "../assets/img/images.png"
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
            <ul className={styles.lista}>
             <li>
               <p className={styles.parrafo}>
                Unete a una comunidad muy carismatica
               </p> 
             </li> 
             <li>
             <p className={styles.parrafo}>
                Las mas grandes empresas dedicadas a tus mascotas
               </p> 
             </li> 
             <li> 
             <p className={styles.parrafo}>
                Una oportunidad de ayudar
               </p> 
             </li> 
             <li>
             <p className={styles.parrafo}>
                Aumenta las ventas de tus negocios
               </p> 
             </li> 
             <li>
             <p className={styles.parrafo}>
                Llega a nuevos publicos y amigos
               </p> 
             </li>  
            </ul>
            <section className={styles.unirse}>
              <button>Descargar Aqui</button>
              <button>Siguiente</button>
           </section>
          </div>
         <div className={styles.imagen}>
           <img src={img} /> 
         </div>
        </div> 
       </>
     
    )
  } 
  
  export default Nuestra
  