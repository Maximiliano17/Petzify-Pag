//Styles
import styles from "../Modules/SobreNosotros.module.css"
//Importes
import React from 'react'
import ReactPlayer from 'react-player'
//Imagenes
import img from "../assets/img/1.png"

function Sobremi() {  
  return (  
   <>
    <div className={styles.sobre}>
      <h1>Sobre Nosotros</h1>
    </div>  
    <div id="SobreNosotros" className={styles.contenedor}> 
      <div className={styles.video_presentacion} >
        <ReactPlayer 
        className={styles.video}
        url='https://youtu.be/pYtrPA9IS2E' 
        />
        <ReactPlayer 
        className={styles.video2}
        width='60%'
        height='90%'
        url='https://youtu.be/pYtrPA9IS2E' 
        />
        </div>
        <div className={styles.videos} >
          <section className={styles.reels}> 
           <img src={img} />
           <p>
            Ver en Youtube
           </p>
          </section>
          <section className={styles.reels}> 
           <img src={img} />
           <p>
            Ver en Youtube
           </p>
          </section>
        </div>
    </div> 
   </>
  )
}

export default Sobremi; 