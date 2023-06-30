//Styles
import styles from "../Modules/SobreNosotros.module.css"
//Importes
import React from 'react'
import ReactPlayer from 'react-player'
//Imagenes
import img from "../assets/img/1.png"
import img2 from "../assets/img/2.jpeg"
import compu from "../assets/img/compu.png"

function Sobremi() {  
  return (  
   <>
    <div className={styles.sobre}>
      <h1>Sobre Nosotros</h1>
    </div>  
    <div id="SobreNosotros" className={styles.contenedor}> 
      <div className={styles.video_presentacion} >
       <section className={styles.compu}>
       <img src={compu} />
       
       </section>
        </div>
        <div className={styles.videos} >
          <section className={styles.reels}> 
           <img src={img} />
           <a target="_blank" href="https://www.instagram.com/p/CuCSo2oOKss/">
            Ver en Instagram
           </a>
          </section>
          <section className={styles.reels}> 
           <img src={img2} />
           <a target="_blank" href="https://www.instagram.com/p/CsNCtMyu4mq/">
            Ver en Instagram
           </a>
          </section>
        </div>
    </div> 
   </>
  )
}

export default Sobremi; 