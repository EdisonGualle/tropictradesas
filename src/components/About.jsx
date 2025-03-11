import { Link } from "react-scroll";
import { RiArrowRightSLine } from "react-icons/ri";
import cajabanano from "/caja-banano.png";
const About = () => {
    return (
        <section className="bg-white py-20 px-6 sm:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
                
                {/* Sección de texto alineada correctamente */}
                <div className="w-full md:w-1/2 md:pl-0 lg:pl-0 text-center md:text-left">
                    <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold text-[#1b1464]">
                        ¿Quiénes Somos?
                    </h2>
                    <div className="w-32 h-2 bg-amber-300 mt-2 mb-5 mx-auto md:mx-0"></div>
                    <p className="text-base sm:text-lg leading-7">
                        TropicTrade, <span className="font-bold italic">Exportadora de Banano</span>, es una empresa emergente formada por un equipo de expertos en la producción, calidad, comercialización y exportación de banano convencional, productos que solo se cultivan en la Costa del Pacífico Ecuatoriano debido a sus características únicas.
                    </p>
                    <p className="mt-6 text-base sm:text-lg leading-7">
                        La amplia experiencia del equipo interno de la compañía es su mejor carta de presentación, garantizando productos que cumplen con los más altos estándares de calidad exigidos por clientes en todo el mundo.
                    </p>

                    {/* Botón centrado en móviles y alineado a la izquierda en escritorio */}
                    <div className="flex justify-center md:justify-start">
                        <Link to="contacto" smooth={true} duration={500} offset={-80}>
                            <button className="mt-7 bg-amber-300 text-black font-medium py-3 px-6 rounded-full flex items-center gap-2 shadow-md hover:bg-amber-400 transition">
                                Contáctanos
                                <RiArrowRightSLine />
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Imagen alineada correctamente */}
                <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                    <img
                        src={cajabanano}
                        alt="Proceso de exportación de banano"
                        className="rounded-3xl shadow-2xl hover:scale-105 transition-all duration-500 ease-in-out w-[90%] sm:w-3/4 md:w-[80%] lg:w-[75%] h-auto object-cover hover:shadow-[0_20px_50px_rgba(27,20,100,0.75)]"
                    />
                </div>

            </div>
        </section>
    );
};

export default About;
