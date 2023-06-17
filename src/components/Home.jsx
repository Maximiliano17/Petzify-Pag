//Styles
import styles from "../Modules/Home.module.css"

function Home() { 
   
    return (
     <>
      {/* Home */}
      <main id="Home" className={styles.main}>
        <div className={styles.content}>
          <p>Petzify</p>
          <p className={styles.slogan}>Por ellos</p>
        </div> 
      </main>
     </>
     
    )
  }
  
  export default Home
  