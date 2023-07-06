//Imagenes
import logo from "../assets/icons/download.png"
//Styles
import styles from "../Modules/Footer.module.css"

function Footer() {
  
    return ( 
    <> 
    <div className={styles.seguir}>
      <h2>Gracias por ver :)</h2>
        
    </div>
        <footer className={styles.footer}>
          <section className={styles.titulo}>
            <p>Petzify</p>
            <p>Nuestra Empresa</p>
            <p>Unete a nuestra familia</p>
           </section>
           <section className={styles.section_2}>
           <section className={styles.logo}>
             <img src={logo} alt="Logo" />
           </section> 
           <section className={styles.informacion}> 
            <p>      
              Esta página fue creada por Connected World, una empresa de desarrollo de software. Todos los derechos están reservados a los fundadores: Dos Santos Maximiliano y Villalba Juan Pablo.
              En nuestra aplicación, puedes promocionarte ante nuestra creciente comunidad de usuarios. Si estás interesado, contáctanos a través de nuestro formulario en la sección 'Contactanos'. ¡Únete a nosotros y alcanza a una audiencia apasionada en Petzify!
            </p>
           </section>
           <section className={styles.unirse}>
            <button>Connected World</button>
            <button>Contacto</button>
           </section>
           </section>
        </footer>
</>
    )
  }
  
  export default Footer
  