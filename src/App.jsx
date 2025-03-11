import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Element } from "react-scroll";
import { HelmetProvider } from "react-helmet-async";
import HelmetSEO from "./HelmetSEO";
import { lazy, Suspense, useState, useEffect } from "react";
import LoadingScreen from "@components/LoadingScreen";

const Sitemap = lazy(() => import("./pages/Sitemap"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const Header = lazy(() => import("@components/Header"));
const Hero = lazy(() => import("@components/Hero"));
const About = lazy(() => import("@components/About"));
const MissionVisionValues = lazy(() => import("@components/MissionVisionValues"));
const Services = lazy(() => import("@components/Services"));
const ContactBudget = lazy(() => import("@components/ContactBudget"));
const ProjectsGrid = lazy(() => import("@components/ProjectsGrid"));
const OurBrands = lazy(() => import("@components/OurBrands"));
const Footer = lazy(() => import("@components/Footer"));
const Contact = lazy(() => import("@components/Contact"));
const ExportCountries = lazy(() => import("@components/ExportCountries"));
const LocationSection = lazy(() => import("@components/LocationSection"));

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Espera 3 segundos antes de mostrar la app
    const timer = setTimeout(() => setIsLoading(false), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <HelmetProvider>
      <HelmetSEO />
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <Router>
          <Suspense fallback={<LoadingScreen />}>
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

              {/* Redirección de rutas no existentes al inicio */}
              <Route path="*" element={<Navigate to="/" replace />} />

            </Routes>
          </Suspense>
        </Router>
      )}
    </HelmetProvider>
  );
}

export default App;
