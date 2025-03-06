import { Link } from "react-scroll";
import { RiArrowRightSLine } from "react-icons/ri";

const About = () => {
    return (
        <section id="nosotros" className="bg-white px-6 md:px-12 lg:px-20 min-h-screen pt-28">

            <div className="flex flex-col justify-between md:flex-row items-center pb-20">

                <div className="md:w-1/2 me-16">
                    <h2 className="text-[42px] font-bold text-[#1b1464]">
                        Quienes Somos
                    </h2>
                    <div className="w-32 h-2 bg-amber-300 mt-2 mb-5"></div>
                    <p className="text-base leading-7">
                        TropicTrade, <span className="font-bold italic">Exportadora de Banano</span>, es una empresa emergente formada por un equipo de expertos en la producción, calidad, comercialización y exportación de banano convencional Ecuban, baby banana y frutas exóticas, productos que solo se cultivan en la Costa del Pacífico Ecuatoriano debido a sus características únicas.
                    </p>
                    <p className="mt-6 text-base leading-7">
                        La amplia experiencia del equipo interno de la compañía es su mejor carta de presentación, garantizando productos que cumplen con los más altos estándares de calidad exigidos por clientes en todo el mundo.
                    </p>
                    <Link to="contacto" smooth={true} duration={500} offset={-80}>
                        <button className="mt-7 bg-amber-300 text-black font-medium py-3 px-6 rounded-full flex items-center gap-2 shadow-md hover:bg-amber-400 transition">
                            Contáctanos
                            <RiArrowRightSLine />
                        </button>
                    </Link>
                </div>

                {/* Imagen con efecto hover de rotación 3D */}
                <div className="md:w-1/2 h-full flex justify-center items-center">
                    <img
                        src="src/assets/images/caja-banano.png"
                        alt="Proceso de exportación de banano"
                        className="rounded-3xl shadow-2xl hover:scale-110 transition-all duration-500 ease-in-out max-w-[90%] md:max-w-[80%] h-auto object-cover hover:shadow-[0_20px_50px_rgba(27,20,100,0.75)]"
                    />
                </div>

            </div>
        </section>
    );
};

export default About;
