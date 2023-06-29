//Styles
import styles from "../Modules/Eventos.module.css"
//imagenes
import img from "../assets/img/feria_ciencias.jpg"
import logo from "../assets/icons/icono_logo.png"
import evento from "../assets/img/foto_evento.jpeg"

function Eventos() {

  return (
   <>
    {/* Eventos */}
        <div className={styles.sobre}>
          <h1>Eventos</h1> 
        </div> 
       <div id="eventos" className={styles.contenedor}>
         <div className={styles.informacion}>
           <img src={logo} />
            <p>
              ¡En Petzify.com, nos encanta participar en eventos y difundir nuestro mensaje sobre el bienestar animal y la tenencia responsable de mascotas. Si estás organizando un evento relacionado con animales domésticos, estaremos encantados de participar como expositores y compartir nuestra pasión por la protección animal con los asistentes. ¡Contáctanos para más información!
            </p>
            <button>
               <span>
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-at-fill" viewBox="0 0 16 16">
                  <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2H2Zm-2 9.8V4.698l5.803 3.546L0 11.801Zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 9.671V4.697l-5.803 3.546.338.208A4.482 4.482 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671Z"/>
                  <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034v.21Zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791Z"/>
                </svg>
               </span>
                Contacto
            </button> 
         </div>
         <div className={styles.foto}>
           <img src={img} />
         </div>
       </div>   
       <div className={styles.evetos}>
       <section className={styles.foto_evento}>
        <img src={evento} />
       </section>
       <section className={styles.texto_evento}>
        <h2>¿Que hacemos?</h2>
          <p>
          Nuestra empresa, Connected World, ha sido invitada a varios eventos de exposición donde presentamos nuestros sistemas,Uno de ellos es Petzify. En estos eventos, nos gusta utilizar una dinámica sencilla: desarrollamos un juego web para los visitantes de nuestro stand y premiamos a aquellos que se atrevan a jugar con un obsequio diseñado especialmente para el evento. Estos obsequios suelen variar entre pines, llaveros, y más.
          </p>
       </section>
       </div>
   </>
  )
}

export default Eventos
