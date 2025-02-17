import { Link } from "react-scroll";
import {
    RiArrowUpSLine,
    RiMapPin2Line,
    RiMailLine,
    RiPhoneLine,
    RiWhatsappLine,
    RiSquareFill
} from "react-icons/ri";
import logo from "../../public/logo.png";

const Footer = () => {
    return (
        <footer className="bg-[#466233] text-white pb-10">
            <div className=" mx-auto px-20 grid grid-cols-1 md:grid-cols-3 gap-10 pt-20">

                {/* Columna 1 - Información General */}
                <div>
                    <p className="text-base leading-7">
                        TropicTrade, <span className="font-bold italic">Exportadora de Banano</span>,
                        es una empresa joven que nace bajo la experiencia de un grupo de expertos en el área de producción,
                        calidad, comercialización y exportación de banano convencional Ecuban, baby banana, frutas exóticas,
                        que por sus características solamente pueden encontrarse en la Costa del Pacifico Ecuatoriano.
                    </p>
                    <img
                        src={logo}
                        alt="Logo de TropicTrade"
                        className="w-36 mt-4"
                    />
                </div>

                {/* Columna 2 - Navegación */}
                <nav aria-label="Navegación del sitio">
                    <h4 className="text-[26px] font-bold leading-[30px] mb-6">PÁGINAS ÚTILES</h4>
                    <ul className="space-y-4 text-amber-300 text-base leading-7">
                        <li className="flex items-center gap-2">
                            <RiSquareFill className="text-[8px] text-amber-300" />
                            <Link to="nosotros" smooth={true} duration={500} offset={-64} className="hover:underline cursor-pointer">
                                QUIÉNES SOMOS
                            </Link>
                        </li>
                        <li className="flex items-center gap-2">
                            <RiSquareFill className="text-[8px] text-amber-300" />
                            <Link to="servicios" smooth={true} duration={500} offset={-64} className="hover:underline cursor-pointer">
                                SERVICIOS
                            </Link>
                        </li>
                        <li className="flex items-center gap-2">
                            <RiSquareFill className="text-[8px] text-amber-300" />
                            <Link to="proyectos" smooth={true} duration={500} offset={-64} className="hover:underline cursor-pointer">
                                PROYECTOS
                            </Link>
                        </li>
                        <li className="flex items-center gap-2">
                            <RiSquareFill className="text-[8px] text-amber-300" />
                            <Link to="contacto" smooth={true} duration={500} offset={-64} className="hover:underline cursor-pointer">
                                CONTACTO
                            </Link>
                        </li>
                        <li className="flex items-center gap-2">
                            <RiSquareFill className="text-[8px] text-amber-300" />
                            <a href="/politica-de-privacidad-y-cookies" className="hover:underline">
                                POLÍTICA DE PRIVACIDAD Y COOKIES
                            </a>
                        </li>
                    </ul>
                </nav>

                {/* Columna 3 - Contacto (Idéntico a la Imagen) */}
                <div>
                    {/* Título con icono alineado */}
                    <h4 className="text-[26px] font-bold leading-[30px] mb-4 flex items-center gap-2">
                        CONTACTO
                    </h4>

                    {/* Ubicación */}
                    <div className="flex items-start text-sm mb-6">
                        <div>
                            <p className="text-[22px] leading-6 flex items-center gap-2">
                                <RiMapPin2Line size={20} className="text-amber-300" />
                                Donde estamos:
                            </p>
                            <p className="text-base leading-7">Av. Francisco de Orellana, Guayaquil - Ecuador</p>
                            <p className="text-base leading-7">Edificio <span className="font-bold">World Trade Center</span>, Piso 1 - Oficina #61</p>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start text-sm mb-6">
                        <div>
                            <p className="text-[22px] leading-6 flex items-center gap-2">
                                <RiMailLine size={20} className="text-amber-300" />
                                Email:
                            </p>
                            <a href="mailto:info@exporbanalva.com" className="text-base leading-7 hover:underline">
                                info@topictradesas.com
                            </a>
                        </div>
                    </div>

                    {/* Teléfono */}
                    <div className="flex items-start text-sm mb-6">
                        <div>
                            <p className="text-[22px] leading-6 flex items-center gap-2">
                                <RiPhoneLine size={20} className="text-amber-300" />
                                Teléfono:
                            </p>
                            <a href="tel:0993808146" className="text-base leading-7 hover:underline">
                                0993808146
                            </a>
                        </div>
                    </div>

                    {/* WhatsApp */}
                    <div className="flex items-start text-sm">
                        <div>
                            <p className="text-[22px] leading-6 flex items-center gap-2">
                                <RiWhatsappLine size={20} className="text-amber-300" />
                                WhatsApp:
                            </p>
                            <a href="https://api.whatsapp.com/send?phone=593993808146" className="text-base leading-7 hover:underline">
                                +593 993808146
                            </a>
                        </div>
                    </div>
                </div>


            </div>

            {/* Línea divisoria */}
            <hr className="border-green-900 my-10  mx-auto" />

            <div className="max-w-6xl mx-auto px-6 text-center">

                {/* Botón para volver arriba */}
                <div className="flex justify-center mb-5">
                    <Link to="inicio" smooth={true} duration={500} offset={-80} aria-label="Volver arriba">
                        <button className="p-2 bg-amber-300 text-black rounded-full hover:bg-amber-400 transition flex items-center">
                            <RiArrowUpSLine size={24} />
                        </button>
                    </Link>
                </div>

                {/* Información de derechos y enlaces */}
                <p className="text-sm">
                    © {new Date().getFullYear()} Todos los derechos reservados{" "}
                    <a href="https://tropictradesas.com" target="_blank" rel="noopener noreferrer" className="font-bold">
                        tropictradesas.com
                    </a>{" "}
                    | Sitio web y posicionamiento hecho por la agencia de tecnología{" "}
                    <a href="https://www.instagram.com/digitalcraft_ec/" target="_blank" rel="noopener noreferrer" className="text-amber-300 font-medium">
                        Digital Craft
                    </a>
                </p>

                {/* Políticas y mapa del sitio */}
                <div className="mt-2">
                    <a href="/politica-privacidad" className="text-amber-300 hover:underline text-sm">
                        Política de privacidad y cookies
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
