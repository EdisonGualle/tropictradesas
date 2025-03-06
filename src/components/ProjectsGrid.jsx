import PropTypes from "prop-types";

// Define un array de rutas de imágenes
const imagePaths = [
  "/src/assets/images/1.jpeg",
  "/src/assets/images/2.jpeg",
  "/src/assets/images/3.jpeg",
  "/src/assets/images/4.jpeg",
  "/src/assets/images/5.jpeg",
  "/src/assets/images/6.jpeg",
  "/src/assets/images/7.jpeg",
  "/src/assets/images/8.jpeg",
  "/src/assets/images/9.jpeg",
  "/src/assets/images/10.jpeg",
];

// Crea un array de objetos con la estructura { image: ruta, title: "Proyecto X" }
const projectsData = imagePaths.map((path, index) => ({
  image: path,
  title: `Proyecto ${index + 1}`,
}));

// Define el componente ProjectsGrid, recibe 'projects' como prop, y si no se le pasa, usa projectsData por defecto
const ProjectsGrid = ({ projects = projectsData }) => {
  return (
    <section id="proyectos" className="py-20 px-4 bg-[#f5f0e1] text-[#1b1464]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[42px] font-bold text-center mb-16">Proyectos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {projects.slice(0, 15).map((project, index) => (
            <div key={index} className="relative group">
              <div className="bg-white p-3 shadow-md group-hover:shadow-lg transition-shadow duration-300 rounded-lg overflow-hidden">
                <div className="aspect-w-1 aspect-h-1">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105 transform"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
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