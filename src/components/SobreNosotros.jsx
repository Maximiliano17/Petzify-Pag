//Styles
import styles from "../Modules/SobreNosotros.module.css"
//Imagenes
import img from "../assets/icons/perro.png"

function Sobremi() {  
  return (  
   <>
    <div className={styles.sobre}>
      <h1>Sobre Nosotros</h1>
    </div>
    <div id="SobreNosotros" className={styles.contenedor}> 
      <section className={styles.Informacion}>
      <div className={styles.tarjeta}>
        <p>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sun" viewBox="0 0 16 16">
          <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
        </svg>
        </p>
      <h2>¡Bienvenidos a Petzify!</h2> 
       <h2><br></br> 
       En Petzify, nos apasiona el bienestar y la felicidad de los animales domésticos. Somos una empresa comprometida con la causa de mejorar la vida de nuestras adorables mascotas y fomentar un mundo en el que cada animalito pueda disfrutar de un hogar seguro y amoroso.
       </h2>  
       <h2><br></br>
         Queremos que te unas a nuestra misión. Juntos, podemos marcar la diferencia en la vida de muchos animales. Si eres un amante de los animales y deseas apoyar nuestra causa, te invitamos a que te involucres. Ya sea a través de donaciones, voluntariado o adoptando una mascota, cada pequeño gesto cuenta y puede cambiar la vida de un animalito necesitado.
         En Petzify, creemos en un futuro en el que todos los animales domésticos sean tratados con amor, respeto y cuidado. ¡Únete a nosotros y juntos hagamos del mundo un lugar mejor para nuestros fieles amigos peludos!
       </h2>
      </div>
       <div className={styles.fondo}>
          
       </div>
      </section>
      <section className={styles.foto}>
        <img src={img} alt="Img" />
      </section>
    </div> 
   </>
  )
}

export default Sobremi 
 