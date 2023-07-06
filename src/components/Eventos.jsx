//Styles
import styles from "../Modules/Eventos.module.css"
//imagenes
import img from "../assets/img/feria_ciencias.jpg"
import logo from "../assets/icons/icono_logo.png"
import evento from "../assets/img/foto_evento.jpeg"
import formulario from "../assets/icons/perro.png"

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
         </div>
         <div className={styles.foto}>
         <p className={styles.texto_responsive}>
         En Petzify.com, nos apasiona el bienestar animal y la tenencia responsable de mascotas. Participamos activamente en eventos para difundir nuestro mensaje.
            </p>
           <img src={img} />
         </div>
       </div>   
       <div className={styles.evetos}>
       <section className={styles.foto_evento}>
        <img src={evento} />
        <p className={styles.texto_responsive}>
        Nuestra empresa, Connected World, ha sido invitada a diversos eventos de exposición, incluido Petzify. Durante estas ocasiones, presentamos nuestros sistemas y nos gusta involucrar a los visitantes de nuestro stand con un divertido juego web.
            </p>
       </section>
       <section className={styles.texto_evento}>
        <h2>¿Que hacemos?</h2>
          <p>
          Nuestra empresa, Connected World, ha sido invitada a varios eventos de exposición donde presentamos nuestros sistemas,Uno de ellos es Petzify. En estos eventos, nos gusta utilizar una dinámica sencilla: desarrollamos un juego web para los visitantes de nuestro stand y premiamos a aquellos que se atrevan a jugar con un obsequio diseñado especialmente para el evento. Estos obsequios suelen variar entre pines, llaveros, y más.
         
          </p>
       </section>
       </div>
       {/*
       <section id="contacto" className={styles.contacto}>
            <form  className={styles.formulario}>
             <h2  className={styles.titulo_form}>Contactanos</h2>
              <input placeholder="Nombre" />
              <input placeholder="Correo" />
              <input
               className={styles.contenido}
                placeholder="Asunto" 
                />
              <input 
              className={styles.enviar}
              type="submit" />
            </form>
       </section>
       */}
   </>
  )
}

export default Eventos
