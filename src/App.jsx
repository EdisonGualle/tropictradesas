import { Element } from 'react-scroll';

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

function App() {

  return (
    <div>
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
    </div>
  )
}

export default App
