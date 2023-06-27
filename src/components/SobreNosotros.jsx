//Styles
import styles from "../Modules/SobreNosotros.module.css"
//Imagenes
import img from "../assets/img/1.png"
import React from 'react'
import ReactPlayer from 'react-player'

function Sobremi() {  
  return (  
   <>
    <div className={styles.sobre}>
      <h1>Sobre Nosotros</h1>
    </div>  
    <div id="SobreNosotros" className={styles.contenedor}> 
      <div className={styles.video}>
        <ReactPlayer url='https://youtu.be/pYtrPA9IS2E' />
      </div>
    </div> 
   </>
  )
}

export default Sobremi; 