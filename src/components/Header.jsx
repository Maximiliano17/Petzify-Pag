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
              <button> 
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-justify" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
              </svg>
              </button>
            </section>
            <section className={styles.logo}>
              <button>  <img src={logo} alt="foto"/></button>
              <p>Petzify</p>
            </section>
            <section className={styles.listas}>
                <button> <a href="#home">Home</a> </button>
                <button> <a href="#SobreNosotros">Sobre Nosotros</a> </button>
                <button> <a href="#Comentarios">Comentarios</a> </button>
                <button> <a href="#Nuestra">Nuestra App</a> </button>
                <button> <a>Ubicame</a> </button>
                <button> <a>PetShop</a> </button>
            </section>
            <button className={styles.buscador}> 
            <p>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
              </p> </button>
            <section className={styles.perfil}>
                <input type="text" placeholder="Buscar..."/>
                <button> 
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                </svg>
                </button>
            </section>
        </header>
</>
    )
  }
  
  export default Header
  