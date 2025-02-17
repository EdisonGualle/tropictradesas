const countries = [
  {
    name: 'PORTUGAL',
    flag: 'https://exporbanalva.com/wp-content/uploads/2022/04/Img-Flag-Portugal.webp',
    description: 'Portugal es un país del sur de Europa en la península ibérica, que limita con España. Su ubicación en el océano Atlántico influyó en muchos aspectos de su cultura.'
  },
  {
    name: 'JORDANIA',
    flag: 'https://exporbanalva.com/wp-content/uploads/2022/04/Img-Flag-Jordania.webp',
    description: 'Jordania es un país árabe en la orilla este del río Jordán, que se caracteriza por sus antiguos monumentos, reservas naturales y balnearios en la costa.'
  },
  {
    name: 'RUSIA',
    flag: 'https://exporbanalva.com/wp-content/uploads/2022/04/Img-Flag-Rusia.webp',
    description: 'Rusia es la nación más grande del mundo y limita con países de Europa y Asia, al igual que con los océanos Pacífico y Ártico.'
  },
  {
    name: 'ALEMANIA',
    flag: 'https://exporbanalva.com/wp-content/uploads/2022/04/Img-Flag-Alemania.webp',
    description: 'Alemania es un país de Europa occidental con un paisaje de bosques, ríos, cadenas montañosas y playas en el mar del Norte. Tiene más de 2 milenios de historia.'
  },
  {
    name: 'ESTADOS UNIDOS',
    flag: 'https://exporbanalva.com/wp-content/uploads/2022/04/Img-Flag-USA.webp',
    description: 'Estados Unidos es un país del norte de America, que limita con Canadá al norte y con México al sur. Su ubicación se encuentra al este con el océano Atlántico y al oeste el océano Pacífico.'
  }
];

const defaultFlag = '/icons/defecto.png';

const ExportCountries = () => {
  return (
    <div 
    id="proyectos"
      className="relative py-20 bg-gray-50"
      style={{
        backgroundImage: `url('/icons/mapa-mundo.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Contenedor principal con menos padding horizontal y más ancho */}
      <div className="relative z-10 max-w-full mx-auto px-2 sm:px-4 lg:px-[130px]">
        <h2 className="text-[42px] font-semibold text-center text-[#3F5B2B] mb-16 leading-[48px]">
          PAÍSES DE EXPORTACIÓN
        </h2>

        {/* Ajuste de columnas con más separación entre tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-x-12 gap-y-16 justify-center">
          {countries.map((country, index) => (
            <div key={index} className="w-[252px] h-[531px] flex flex-col items-center group">
              {/* Imagen de la bandera con borde negro fino */}
              <div className="w-[232px] h-[232px] rounded-full border-2 border-black overflow-hidden mb-2 relative transition-transform duration-300 group-hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent" />
                <img
                  src={country.flag || defaultFlag}
                  alt={`Bandera de ${country.name}`}
                  className="w-[232px] h-[232px] object-cover"
                />
              </div>

              {/* Línea decorativa (subida más cerca de la imagen) */}
              <div className="w-20 h-0.5 bg-yellow-500 mb-4 mt-4 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>

              {/* Contenedor del texto (subido un poco más) */}
              <div className="w-[252px] h-[220px] flex flex-col justify-start text-center">
                <h3 className="text-[26px] leading-[30px] font-bold text-[#3F5B2B] mb-1">
                  {country.name}
                </h3>
                <p className="text-gray-600 text-[16px] leading-[28px] px-2">
                  {country.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExportCountries;