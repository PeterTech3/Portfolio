import { Route, Navigate, Routes  } from "react-router-dom"
import { Introduccion } from "./pages/ES/Introduccion"
import { Experiencia } from "./pages/ES/Experiencia"
import { Educacion } from "./pages/ES/Educacion"
import { LanguageProvider } from "./context/languageContext"
import { Home } from "./pages/ES/Home"
import { Proyectos } from "./pages/ES/Proyectos"
import { Contacto } from "./pages/ES/Contacto"

const App = () => {
  return(
    <LanguageProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<Introduccion />} />
          <Route path="/education" element={<Educacion />} />
          <Route path="/experience" element={<Experiencia />} />
          <Route path="/proyects" element={<Proyectos />} />
          <Route path="/contact" element={<Contacto />} />

        </Routes>
      
    </LanguageProvider>
    
  )
}

export default App  
