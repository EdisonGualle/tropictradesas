import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Element } from 'react-scroll';
import { HelmetProvider } from "react-helmet-async";
import HelmetSEO from "./HelmetSEO";

import Sitemap from "./pages/Sitemap";

import Header from '@components/Header'
import Hero from '@components/Hero'
import About from '@components/About'
import MissionVisionValues from '@components/MissionVisionValues'
import Services from '@components/Services'
import ContactBudget from '@components/ContactBudget'
import ProjectsGrid from '@components/ProjectsGrid'
import OurBrands from '@components/OurBrands'
import Footer from '@components/Footer'
import Contact from '@components/Contact'
import ExportCountries from '@components/ExportCountries'
import LocationSection from './components/LocationSection'

import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {

  return (
    <HelmetProvider>
      <HelmetSEO />
      <Router>
        <Routes>
          {/* Ruta principal */}
          <Route
            path="/"
            element={
              <>
                <Header />
                <Element name="inicio" id="inicio">
                  <Hero />
                </Element>
                <Element name="nosotros" id="nosotros">
                  <About />
                  <MissionVisionValues />
                </Element>
                <Element name="servicios" id="servicios">
                  <Services />
                  <ContactBudget />
                </Element>
                <Element name="proyectos" id="proyectos">
                  <ExportCountries />
                  <ProjectsGrid />
                  <OurBrands />
                </Element>
                <Element name="contacto" id="contacto">
                  <LocationSection />
                  <Contact />
                  <Footer />
                </Element>
              </>
            }
          />

          {/* Ruta del Sitemap */}
          <Route path="/mapa-del-sitio" element={<Sitemap />} />

          {/* Ruta de la Política de Privacidad */}
          <Route path="/politica-de-privacidad" element={<PrivacyPolicy />} />
        </Routes>
      </Router>
    </HelmetProvider>

  )
}

export default App
