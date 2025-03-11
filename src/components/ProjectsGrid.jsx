import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import PropTypes from "prop-types";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
import uno from "/src/assets/images/1.jpeg";
import dos from "/src/assets/images/2.jpeg";
import tres from "/src/assets/images/3.jpeg";
import cuatro from "/src/assets/images/4.jpeg";
import cinco from "/src/assets/images/5.jpeg";
import seis from "/src/assets/images/6.jpeg";
import siete from "/src/assets/images/7.jpeg";
import ocho from "/src/assets/images/8.jpeg";
import nueve from "/src/assets/images/9.jpeg";
import diez from "/src/assets/images/10.jpeg";

// Rutas de imágenes
const imagePaths = [
  uno,
  dos,
  tres,
  cuatro,
  cinco,
  seis,
  siete,
  ocho,
  nueve,
  diez,
];

const projectsData = imagePaths.map((path, index) => ({
  image: path,
  title: `Proyecto ${index + 1}`,
}));

const ProjectsGrid = ({ projects = projectsData }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  // Manejo del teclado para navegación
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (selectedImageIndex !== null) {
        if (event.key === "ArrowRight") handleNextImage();
        if (event.key === "ArrowLeft") handlePrevImage();
        if (event.key === "Escape") setSelectedImageIndex(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  },);

  const handleNextImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrevImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  return (
    <section className="py-20 px-6 sm:px-12 lg:px-20 bg-[#f5f0e1] text-[#1b1464]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold text-center mb-16">
          Proyectos
        </h2>

        {/* Grid de proyectos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 w-full">
          {projects.slice(0, 15).map((project, index) => (
            <div key={index} className="relative group">
              <div className="bg-white p-2 shadow-md group-hover:shadow-lg transition-shadow duration-300 rounded-lg overflow-hidden">
                <div className="w-full h-[200px] sm:h-[240px] md:h-[260px] lg:h-[280px] xl:h-[300px] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105 transform cursor-pointer"
                    onClick={() => setSelectedImageIndex(index)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal de imagen */}
      <Dialog open={selectedImageIndex !== null} onClose={() => setSelectedImageIndex(null)} className="fixed inset-0 flex items-center justify-center z-50">
        <div className="fixed inset-0 bg-black/30 backdrop-blur-[2px]" onClick={() => setSelectedImageIndex(null)}></div>

        {selectedImageIndex !== null && (
          <div className="relative z-50 p-4 flex items-center">
            {/* Botón de cerrar */}
            <button
              className="absolute top-6 right-6 text-white bg-black/60 hover:bg-black/80 transition p-2 rounded-full"
              onClick={() => setSelectedImageIndex(null)}
            >
              <FaTimes className="w-5 h-5" />
            </button>

            {/* Botón para imagen anterior */}
            <button
              className="absolute left-6 text-white bg-black/60 hover:bg-black/80 transition p-3 rounded-full"
              onClick={handlePrevImage}
            >
              <FaChevronLeft className="w-5 h-5" />
            </button>

            {/* Imagen en pantalla completa */}
            <img
              src={projects[selectedImageIndex].image}
              alt="Imagen ampliada"
              className="max-w-full max-h-[90vh] rounded-lg shadow-lg"
            />

            {/* Botón para imagen siguiente */}
            <button
              className="absolute right-6 text-white bg-black/60 hover:bg-black/80 transition p-3 rounded-full"
              onClick={handleNextImage}
            >
              <FaChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </Dialog>
    </section>
  );
};

ProjectsGrid.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

export default ProjectsGrid;
