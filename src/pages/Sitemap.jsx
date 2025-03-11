import { Link } from "react-router-dom";
import Header from "@components/Header";
import Footer from "@components/Footer";

const Sitemap = () => {
  return (
    <>
      <Header />
      <div className="w-full  bg-gray-white flex flex-col items-center my-12 md:px-6 sm:px-12 lg:px-20">
        {/* Contenedor del Mapa del Sitio */}
        <div className="w-full px-6 lg:px-12 py-16">
          <h1 className="text-5xl font-bold text-[#1b1464] text-center mb-8">
            Mapa del Sitio
          </h1>

          <p className="text-gray-700 text-lg text-center">
            📅 Última actualización: <strong>11 de marzo de 2025</strong>
          </p>

          <p className="text-gray-600 text-center leading-7 mt-4">
            Explora todas las páginas disponibles en nuestro sitio web.
          </p>

          {/* Lista de Páginas */}
          <div className="mt-12 space-y-2 w-full">
            {[
              { to: "/", label: "Inicio" },
              { to: "/mapa-del-sitio", label: "Mapa del Sitio" },
              { to: "/politica-de-privacidad", label: "Política de Privacidad" },
            ].map(({ to, label }) => (
              <div key={to} className="bg-white w-full py-2 ">
                <Link
                  to={to}
                  className="w-full text-xl md:text-2xl font-semibold text-[#1b1464] block text-center hover:underline"
                >
                  {label}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Sitemap;
