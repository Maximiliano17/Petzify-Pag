//Styles
import styles from "../Modules/Nuestra.module.css"
//Imagenes
import img from "../assets/img/fondo_imagen.png"
import imagen from "../assets/img/iphone.png"
import loginvista from "../assets/icons/celular1.png"
import loginvistaresponsive from "../assets/icons/celular2.png"

function Nuestra() {  
    
    return (    
        <> 
         <div className={styles.sobre}>
          <h1>Nuestra App</h1>
        </div>  
        <div id="Nuestra" className={styles.contenedor}> 
          <div className={styles.caracteristicas}>
             <h1 className={styles.titulo}>¿Que es?</h1>
               <p>
               Petzify es una red social especializada en animales domésticos que proporciona a los dueños de mascotas un entorno dedicado a compartir sus experiencias con sus compañeros peludos. Además, permitiremos a los usuarios publicar sobre animales disponibles para adopción y solicitar donaciones para facturas médicas de sus mascotas.
    
               </p>
          </div>
         <div className={styles.imagen}>
           <img src={img} /> 
         </div>
         <div className={styles.imagen_res}>
         <h1 className={styles.titulo}>¿Que es?</h1>
         <p className={styles.texto_responsive}>
           Petzify es una red social para amantes de mascotas que ofrece un espacio dedicado a compartir experiencias con compañeros peludos. 
          </p>
           <img src={imagen} /> 
         </div>
        </div> 
        <div className={styles.seccionesapp}>
           <section className={styles.loginvista}>
             <img src={loginvista} />
           </section>
           <section className={styles.informacion}> 
           <h1 className={styles.titulo2}>¿Nuestro Objetivo?</h1>
             <p>
             Nuestro objetivo principal es contribuir a reducir la cantidad de animales perdidos en Argentina. Para lograrlo, ofrecemos metodologías de reporte para mascotas extraviadas, permitiendo a los usuarios indicar la última ubicación conocida y adjuntar los datos correspondientes. Estos informes serán visibles en un mapa para que todos los usuarios puedan ayudar a localizar a las mascotas reportadas.
           
             </p>
           </section> 
           <section className={styles.loginvistaresponsive}>
             <h1 className={styles.titulo2}>¿Nuestro Objetivo?</h1>
           <p className={styles.texto_responsive}>
           Nuestro objetivo principal en Argentina es reducir la cantidad de animales perdidos. Para lograrlo, brindamos una plataforma donde los usuarios pueden reportar mascotas extraviadas.
          </p>
             <img src={loginvistaresponsive} />
           </section>
        </div>
       </>
     
    )
  } 
  
  export default Nuestra
  