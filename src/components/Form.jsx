function formulario() {
 
  return ( 
   <>
       <div className={styles.formulario}>
          <form>
            <input placeholder="Nombre" />
            <input placeholder="Correo" />
            <textarea placeholder="Asunto"></textarea>
            <input type="submit" />
          </form>
        </div>
   </>
  )
}

export default formulario
