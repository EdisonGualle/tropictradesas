import PropTypes from "prop-types";

ProjectsGrid.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

// Define un array de rutas de imágenes (todas apuntan a la misma imagen por defecto)
const imagePaths = [
  "/src/assets/images/defecto.png",
  "/src/assets/images/defecto.png",
  "/src/assets/images/defecto.png",
  "/src/assets/images/defecto.png",
  "/src/assets/images/defecto.png",
  "/src/assets/images/defecto.png",
  "/src/assets/images/defecto.png",
  "/src/assets/images/defecto.png",
  "/src/assets/images/defecto.png",
  "/src/assets/images/defecto.png",
];

// Crea un array de objetos con la estructura { image: ruta, title: "Proyecto X" }
const projectsData = imagePaths.map((path, index) => ({
  image: path,
  title: `Proyecto ${index + 1}`,
}));

// Define el componente ProjectsGrid, recibe 'projects' como prop, y si no se le pasa, usa projectsData por defecto
const ProjectsGrid = ({ projects = projectsData }) => {
  return (
    // Sección principal con padding y fondo blanco
    <section id="proyectos" className="py-20 px-4 bg-white">

      {/* Contenedor central con un ancho máximo */}
      <div className="max-w-7xl mx-auto">

        {/* Título de la sección */}
        <h2 className="text-[42px] font-semibold text-center text-[#3F5B2B] mb-16">
          PROYECTOS
        </h2>

        {/* Contenedor de la cuadrícula de proyectos */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
        >
          {/* Mapea los proyectos y genera un bloque para cada uno (máximo 15) */}
          {projects.slice(0, 15).map((project, index) => (
            <div key={index} className="relative group">

              {/* Marco blanco exterior con sombra */}
              <div className="bg-white p-3 shadow-md group-hover:shadow-lg transition-shadow duration-300">

                {/* Contenedor de la imagen con tamaño fijo y ocultando desbordes */}
                <div className="w-[234px] h-[234px] overflow-hidden">

                  {/* Imagen del proyecto */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-[234px] h-[234px] object-cover transition-transform duration-300 group-hover:scale-95"
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

// Exporta el componente para poder usarlo en otros archivos
export default ProjectsGrid;
