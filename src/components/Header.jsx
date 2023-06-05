//Imagenes
import logo from "../assets/icons/download.png"
import perfil_defecto from "../assets/icons/perfil.jpg"
//Styles
import styles from "../Modules/Header.module.css"


function Header() {
 
    return ( 
    <>
        <header className={styles.header}>
            <section className={styles.menu_res}>
              <button>  <img src={logo} alt="foto"/></button>
            </section>
            <section className={styles.logo}>
              <button>  <img src={logo} alt="foto"/></button>
              <p>Petzify</p>
            </section>
            <section className={styles.listas}>
                <button> <a href="#home">Home</a> </button>
                <button> <a href="#SobreNosotros">Sobre Nosotros</a> </button>
                <button> <a>Ubicame</a> </button>
                <button> <a>Opcciones</a> </button>
            </section>
            <button className={styles.buscador}> <p>/</p> </button>
            <section className={styles.perfil}>
                <input type="text" placeholder="Buscar..."/>
                <button>  <img src={perfil_defecto} alt="foto"/></button>
            </section>
        </header>
</>
    )
  }
  
  export default Header
  