import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const LocationSection = () => {
  return (
    <section className="py-20 px-6 sm:px-12 lg:px-20 bg-[#f5f0e1] text-[#1b1464]">
      {/* Contenedor principal alineado */}
      <div className="max-w-7xl mx-auto">
        {/* Título de la Sección */}
        <div className="text-center mb-12">
          <p className="text-[#1b1464] text-lg">¿Dónde estamos ubicados?</p>
          <h1 className="text-[#1b1464] text-3xl sm:text-4xl md:text-[42px] font-bold tracking-wide">
            Ubicación
          </h1>
        </div>

        {/* Grid de información responsivo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Tarjeta de Dirección */}
          <div className="bg-[#1b1464] p-6 rounded-xl shadow-lg text-center">
            <div className="flex justify-center mb-3">
              <FaMapMarkerAlt className="text-[#FFD700] text-5xl" />
            </div>
            <h2 className="text-white font-bold text-xl mb-3">DIRECCIÓN</h2>
            <p className="text-gray-300 text-sm">R4CF+J9</p>
            <p className="text-gray-300 text-sm">Guayaquil, Ecuador</p>
          </div>

          {/* Tarjeta de Contacto */}
          <div className="bg-[#1b1464] p-6 rounded-xl shadow-lg text-center">
            <div className="flex justify-center mb-3">
              <FaPhoneAlt className="text-[#FFD700] text-5xl" />
            </div>
            <h2 className="text-white font-bold text-xl mb-3">CONTACTOS</h2>
            <p className="text-gray-300 text-sm">
              Teléfono:{" "}
              <a href="tel:+593993808146" className="text-[#FFD700] hover:underline">
                (+593) 99 380 8146
              </a>
            </p>
          </div>

          {/* Tarjeta de Correos */}
          <div className="bg-[#1b1464] p-6 rounded-xl shadow-lg text-center">
            <div className="flex justify-center mb-3">
              <FaEnvelope className="text-[#FFD700] text-5xl" />
            </div>
            <h2 className="text-white font-bold text-xl mb-3">CORREO</h2>
            {[
              "info@tropictradesas.com",
            ].map((email, index) => (
              <p key={index} className="text-gray-300 text-sm">
                <a href={`mailto:${email}`} className="text-[#FFD700] hover:underline">
                  {email}
                </a>
              </p>
            ))}
          </div>
        </div>

        {/* Mapa responsivo */}
        <div className="mt-10">
          <div className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-xl overflow-hidden shadow-lg bg-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d997.875153934496!2d-79.8783535!3d-2.1794864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMsKwMTAnNDYuMSJTIDc5wrA1MiczMC44Ilc!5e0!3m2!1ses!2sec!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Ubicación TropicTrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
