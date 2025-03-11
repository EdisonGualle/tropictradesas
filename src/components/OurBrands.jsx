const brands = [
  {
    name: "",
    logo: "src/assets/images/caja-banano.png",
  },
  {
    name: "",
    logo: "src/assets/images/caja-banano.png",
  },
  {
    name: "",
    logo: "src/assets/images/caja-banano.png",
  },
];

const OurBrands = () => {
  return (
    <section id="contacto" className="py-16 px-6 sm:px-12 lg:px-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold text-center text-[#1b1464] mb-16">
          Nuestras Marcas
        </h2>

        {/* Contenedor de marcas con menor separación en PC */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 lg:gap-4 xl:gap-3 justify-center">          {brands.map((brand, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="w-[110px] h-[110px] sm:w-[130px] sm:h-[130px] md:w-[140px] md:h-[140px] lg:w-[150px] lg:h-[150px] xl:w-[160px] xl:h-[160px] rounded-full overflow-hidden bg-white shadow-lg transition-transform duration-300 group-hover:scale-105">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-2 text-lg font-semibold text-[#1b1464]">{brand.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurBrands;
