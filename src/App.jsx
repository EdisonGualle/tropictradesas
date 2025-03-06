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
      <Hero />
      <About />
      <MissionVisionValues />
      <Services />
      <ContactBudget />
      <ExportCountries />
      <ProjectsGrid />
      <OurBrands />
      <LocationSection />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
