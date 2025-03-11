const countries = [
  {
    name: "PORTUGAL",
    flag: "https://exporbanalva.com/wp-content/uploads/2022/04/Img-Flag-Portugal.webp",
    description:
      "Portugal es un país del sur de Europa en la península ibérica, que limita con España. Su ubicación en el océano Atlántico influyó en muchos aspectos de su cultura.",
  },
  {
    name: "JORDANIA",
    flag: "https://exporbanalva.com/wp-content/uploads/2022/04/Img-Flag-Jordania.webp",
    description:
      "Jordania es un país árabe en la orilla este del río Jordán, que se caracteriza por sus antiguos monumentos, reservas naturales y balnearios en la costa.",
  },
  {
    name: "RUSIA",
    flag: "https://exporbanalva.com/wp-content/uploads/2022/04/Img-Flag-Rusia.webp",
    description:
      "Rusia es la nación más grande del mundo y limita con países de Europa y Asia, al igual que con los océanos Pacífico y Ártico.",
  },
  {
    name: "ALEMANIA",
    flag: "https://exporbanalva.com/wp-content/uploads/2022/04/Img-Flag-Alemania.webp",
    description:
      "Alemania es un país de Europa occidental con un paisaje de bosques, ríos, cadenas montañosas y playas en el mar del Norte. Tiene más de 2 milenios de historia.",
  },
  {
    name: "ESTADOS UNIDOS",
    flag: "https://exporbanalva.com/wp-content/uploads/2022/04/Img-Flag-USA.webp",
    description:
      "Estados Unidos es un país del norte de América, que limita con Canadá al norte y con México al sur. Su ubicación se encuentra al este con el océano Atlántico y al oeste con el océano Pacífico.",
  },
];

const defaultFlag = "/icons/defecto.png";

const ExportCountries = () => {
  return (
    <section
      id="proyectos"
      className="relative py-20 bg-gray-50 px-6 sm:px-12 lg:px-20"
      style={{
        backgroundImage: `url('/icons/mapa-mundo.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Contenedor principal alineado con las demás secciones */}
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold text-center text-[#1b1464] mb-16 leading-tight">
          Países de Exportación
        </h2>

        {/* Ajuste de columnas responsivas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 w-full">
          {countries.map((country, index) => (
            <div key={index} className="w-full max-w-[250px] mx-auto flex flex-col items-center group">
              {/* Imagen de la bandera */}
              <div className="w-[160px] h-[160px] sm:w-[180px] sm:h-[180px] rounded-full border-2 border-black overflow-hidden mb-4 relative transition-transform duration-300 group-hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent" />
                <img
                  src={country.flag || defaultFlag}
                  alt={`Bandera de ${country.name}`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Línea decorativa */}
              <div className="w-16 h-0.5 bg-yellow-500 mb-4 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>

              {/* Contenedor del texto */}
              <div className="w-full text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-[#1b1464] mb-2">
                  {country.name}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base px-4 leading-relaxed">
                  {country.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExportCountries;
