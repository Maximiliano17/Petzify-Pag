//Styles 
import styles from "../Modules/Comentarios.module.css"

function Comentarios() { 
   
    return (
     <>
      {/* Comentarios */}
      <div id="Comentarios" className={styles.sobre}>
        <h1>Comentarios</h1> 
      </div>
       <div className={styles.container}>
        <p className={styles.select}>-</p>
         <section className={styles.tarjeta}> 
            <p className={styles.perfil_info}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-person-circle" viewBox="0 0 16 16">
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                </svg>
                <span>UserName</span>
            </p>
            <section className={styles.comentario}>

            </section>
         </section>
         <section className={styles.tarjeta}>
            <p className={styles.perfil_info}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-person-circle" viewBox="0 0 16 16">
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                </svg>
                <span>UserName</span>
            </p>
            <section className={styles.comentario}>

            </section>
         </section>
         <section className={styles.tarjeta}>
            <p className={styles.perfil_info}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-person-circle" viewBox="0 0 16 16">
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                </svg>
                <span>UserName</span>
            </p>
            <section className={styles.comentario}>

            </section>
         </section>
         <section className={styles.tarjeta}>
            <p className={styles.perfil_info}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-person-circle" viewBox="0 0 16 16">
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                </svg>
                <span>UserName</span>
            </p>
            <section className={styles.comentario}>

            </section>
         </section>
         <p className={styles.select}>-</p>
       </div>
     </>
     
    )
  }
  
  export default Comentarios
  