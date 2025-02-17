import { Link } from "react-scroll";
import { RiArrowRightSLine } from "react-icons/ri";

const About = () => {
    return (
        <section id="nosotros" className="bg-gray-100 py-16 px-6 md:px-12 lg:px-20 h-screen flex items-center justify-start">
            <div className="max-w-6xl flex flex-col justify-between md:flex-row items-center">

                <div className="md:w-3/5 me-16">
                    <h2 className="text-[42px] font-semibold text-[#466233]">
                        QUIÉNES SOMOS
                    </h2>
                    <div className="w-32 h-2 bg-amber-300 mt-2 mb-5"></div>
                    <p className=" text-base">
                        Exporbanalva, <span className="font-semibold italic">Exportadora de Banano</span> es una empresa joven que nace bajo la experiencia de un grupo de expertos en el área de producción, calidad, comercialización y exportación de banano convencional Ecuban, baby banana, frutas exóticas, que por sus características solamente pueden encontrarse en la Costa del Pacífico Ecuatoriano.
                    </p>
                    <p className="mt-6 0 text-base">
                        La larga experiencia a nivel interno con la que cuenta el equipo que conforma la compañía es su carta de presentación para ofrecer sus productos, los cuales cumplen con los estándares de calidad más altos, solicitados por nuestros clientes a nivel mundial.
                    </p>
                    <Link to="contacto" smooth={true} duration={500} offset={-80}>
                        <button className="mt-6 bg-amber-300 text-black font-medium py-3 px-6 rounded-full flex items-center gap-2 shadow-md hover:bg-amber-400 transition">
                            Contáctanos
                            <RiArrowRightSLine />
                        </button>
                    </Link>
                </div>

                {/* Imagen de la derecha */}
                <div className="md:w-1/2 relative">
                    <img
                        src="/images/banano-proceso.jpg"
                        alt="Proceso de exportación de banano"
                        className="w-full rounded-2xl shadow-lg"
                    />
                    <img
                        src="/images/bananas.png"
                        alt="Bananas"
                        className="absolute -bottom-10 -right-10 w-40 drop-shadow-lg"
                    />
                </div>

            </div>
        </section>
    );
};

export default About;
