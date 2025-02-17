const brands = [
    {
      name: 'Majofruit Banana',
      logo: 'https://exporbanalva.com/wp-content/uploads/2022/04/Img-Logo-Majorfruit.webp'
    },
    {
      name: 'Banana Capital',
      logo: 'https://exporbanalva.com/wp-content/uploads/2022/04/Img-Capital-Logo.webp'
    },
    {
      name: 'Ecuban',
      logo: 'https://exporbanalva.com/wp-content/uploads/2022/04/Img-Ecuban-Logo.webp'
    }
  ];
  
  const OurBrands = () => {
    return (
      <section id="contacto" className="py-10 px-4 bg-gray-50"> {/* Reducido padding vertical a py-10 */}
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[42px] leading-[42px] font-bold text-center text-[#3F5B2B] mb-16">
            Nuestras marcas
          </h2>
  
          <div className="flex flex-wrap justify-center gap-16">
            {brands.map((brand, index) => (
              <div key={index} className="group relative">
                <div className="w-32 h-32 rounded-full overflow-hidden bg-white shadow-lg transition-transform duration-300 group-hover:scale-105"> {/* Reducido tamaño de imagen */}
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default OurBrands;
  