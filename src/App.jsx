//Componentes
import Eventos from "./components/Eventos"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./components/Home"
import Nuestra from "./components/Nuestraapp"
import SobreNosotros from "./components/SobreNosotros"

function App() {
 
  return ( 
   <>
    {/* Header */}
    <Header />
    {/* Home */}  
     <Home />
    {/* SobreNosotros */}
      <SobreNosotros />
        {/* Nuestra  */}
        <Nuestra></Nuestra>
     {/* Comentarios  */}
     <Eventos />
    {/* Footer */}
      <Footer></Footer> 
   </>
  )
}

export default App
