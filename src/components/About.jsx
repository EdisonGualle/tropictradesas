import { Link } from "react-scroll";
import { RiArrowRightSLine } from "react-icons/ri";

const About = () => {
    return (
        <section id="nosotros" className="bg-gray-100 px-6 md:px-12 lg:px-20 min-h-screen pt-28">

            <div className="flex flex-col justify-between md:flex-row items-center pb-20">

                <div className="md:w-1/2 me-16">
                    <h2 className="text-[42px] font-semibold text-[#466233]">
                        QUIÉNES SOMOS
                    </h2>
                    <div className="w-32 h-2 bg-amber-300 mt-2 mb-5"></div>
                    <p className=" text-base leading-7">
                        TropicTrade, <span className="font-bold italic">Exportadora de Banano</span> es una empresa joven que nace bajo la experiencia de un grupo de expertos en el área de producción, calidad, comercialización y exportación de banano convencional Ecuban, baby banana, frutas exóticas, que por sus características solamente pueden encontrarse en la Costa del Pacífico Ecuatoriano.
                    </p>
                    <p className="mt-6 0 text-base leading-7">
                        La larga experiencia a nivel interno con la que cuenta el equipo que conforma la compañía es su carta de presentación para ofrecer sus productos, los cuales cumplen con los estándares de calidad más altos, solicitados por nuestros clientes a nivel mundial.
                    </p>
                    <Link to="contacto" smooth={true} duration={500} offset={-80}>
                        <button className="mt-7 bg-amber-300 text-black font-medium py-3 px-6 rounded-full flex items-center gap-2 shadow-md hover:bg-amber-400 transition">
                            Contáctanos
                            <RiArrowRightSLine />
                        </button>
                    </Link>
                </div>

                {/* Imagen de la derecha */}
                <div className="md:w-1/2 h-full flex">
                    <img
                        src="https://exporbanalva.com/wp-content/uploads/2022/04/Img-Nosotros-2.webp"
                        alt="Proceso de exportación de banano"
                        className="rounded-2xl w-full h-full object-cover"
                    />
                </div>

            </div>
        </section>
    );
};

export default About;
