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
       <h2>¡Bienvenidos a Petzify!</h2> 
       <h2><br></br>
       En Petzify, nos apasiona el bienestar y la felicidad de los animales domésticos. Somos una empresa comprometida con la causa de mejorar la vida de nuestras adorables mascotas y fomentar un mundo en el que cada animalito pueda disfrutar de un hogar seguro y amoroso.
       </h2>  
       <h2><br></br>
         Queremos que te unas a nuestra misión. Juntos, podemos marcar la diferencia en la vida de muchos animales. Si eres un amante de los animales y deseas apoyar nuestra causa, te invitamos a que te involucres. Ya sea a través de donaciones, voluntariado o adoptando una mascota, cada pequeño gesto cuenta y puede cambiar la vida de un animalito necesitado.
         En Petzify, creemos en un futuro en el que todos los animales domésticos sean tratados con amor, respeto y cuidado. ¡Únete a nosotros y juntos hagamos del mundo un lugar mejor para nuestros fieles amigos peludos!
       </h2>
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
 