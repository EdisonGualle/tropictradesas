import { RiPhoneFill, RiWhatsappLine } from "react-icons/ri";

const ContactBudget = () => {
  return (
    <div id="servicios" className="relative w-full h-[500px]">
      {/* Left Content */}
      <div className="absolute left-0 w-1/2 h-full px-[130px] py-16 flex flex-col justify-center bg-[#4C6739] pr-16">
        <h1 className="text-[42px] font-semibold text-white mb-6 leading-[48px]">
          Solicita un presupuesto
        </h1>

        <p className="text-[18px] leading-[28px] text-white/90 mb-12 max-w-fit text-justify ml-auto">
          Contáctanos y nuestro equipo de ventas te asesorarán para encontrar la solución completa que estás buscando para tu negocio.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="tel:+593993808146"
            className="flex items-center justify-center gap-2 bg-[#FFB800] hover:bg-[#ffc42e] text-black px-8 py-3 rounded-full font-medium transition-colors text-lg"
          >
            <RiPhoneFill className="w-5 h-5" />
            +593 993808146
          </a>

          <a
            href="https://wa.me/593993808146"
            className="flex items-center justify-center gap-2 bg-[#00E676] hover:bg-[#0cff85] text-white px-8 py-3 rounded-full font-medium transition-colors text-lg"
          >
            <RiWhatsappLine className="w-5 h-5" />
            +593 993808146
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="absolute right-0 w-1/2 h-full">
        <img
          src="https://images.unsplash.com/photo-1603833665858-e61d17a86224?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1074"
          alt="Bananas verdes"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default ContactBudget;