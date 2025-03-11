import { useNavigate, useLocation } from "react-router-dom";
import {
    RiArrowUpSLine,
    RiMapPin2Line,
    RiMailLine,
    RiPhoneLine,
    RiWhatsappLine,
    RiSquareFill
} from "react-icons/ri";
import logo from "/public/logo-completo.png";

const Footer = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavigation = (sectionId) => {
        if (location.pathname !== "/") {
            navigate(`/?scroll=${sectionId}`, { replace: true });
        } else {
            document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <footer className="bg-[#1b1464] text-white py-16 px-6 sm:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

                {/* Columna 1 - Información General */}
                <div className="text-center md:text-left">
                    <p className="text-base leading-7 text-gray-300">
                        TropicTrade, <span className="font-bold italic">Exportadora de Banano</span>,
                        es una empresa joven con experiencia en producción, calidad, comercialización y exportación de banano convencional y frutas exóticas, propias de la Costa del Pacífico Ecuatoriano.
                    </p>
                    <div className="flex justify-center md:justify-start">
                        <img
                            src={logo}
                            alt="Logo de TropicTrade"
                            className="w-36 mt-6 border-4 border-yellow-300 p-2 rounded-full bg-white bg-opacity-40 transition-transform transform hover:scale-105 hover:rotate-3"
                        />
                    </div>
                </div>

                {/* Columna 2 - Navegación */}
                <nav className="text-center md:text-left">
                    <h4 className="text-xl font-bold mb-6 text-amber-300">PÁGINAS ÚTILES</h4>
                    <ul className="space-y-4 text-base">
                        {[
                            { label: "QUIÉNES SOMOS", id: "nosotros" },
                            { label: "SERVICIOS", id: "servicios" },
                            { label: "PROYECTOS", id: "proyectos" },
                            { label: "CONTACTO", id: "contacto" }
                        ].map(({ label, id }, index) => (
                            <li key={index} className="flex justify-center md:justify-start items-center gap-2">
                                <RiSquareFill className="text-[8px] text-amber-300" />
                                <span
                                    onClick={() => handleNavigation(id)}
                                    className="hover:underline cursor-pointer text-gray-300 hover:text-amber-300"
                                >
                                    {label}
                                </span>
                            </li>
                        ))}
                        <li className="flex justify-center md:justify-start items-center gap-2">
                            <RiSquareFill className="text-[8px] text-amber-300" />
                            <a href="/politica-de-privacidad" className="hover:underline text-gray-300 hover:text-amber-300">
                                POLÍTICA DE PRIVACIDAD
                            </a>
                        </li>
                    </ul>
                </nav>

                {/* Columna 3 - Contacto */}
                <div className="text-center md:text-left">
                    <h4 className="text-xl font-bold mb-6 text-amber-300">CONTACTO</h4>

                    {/* Ubicación */}
                    <div className="mb-6">
                        <p className="text-lg flex items-center justify-center md:justify-start gap-2 text-white">
                            <RiMapPin2Line size={20} className="text-amber-300" />
                            Ubicación:
                        </p>
                        <p className="text-gray-300">Av. Francisco de Orellana, Guayaquil - Ecuador</p>
                        <p className="text-gray-300">Edificio <span className="font-bold">World Trade Center</span>, Piso 1 - Oficina #61</p>
                    </div>

                    {/* Emails */}
                    <div className="mb-6">
                        <p className="text-lg flex items-center justify-center md:justify-start gap-2 text-white">
                            <RiMailLine size={20} className="text-amber-300" />
                            Correo:
                        </p>
                        <a href="mailto:info@tropictradesas.com" className="block text-gray-300 hover:text-amber-300 transition">
                            info@tropictradesas.com
                        </a>
                    </div>

                    {/* Teléfono */}
                    <div className="mb-6">
                        <p className="text-lg flex items-center justify-center md:justify-start gap-2 text-white">
                            <RiPhoneLine size={20} className="text-amber-300" />
                            Teléfono:
                        </p>
                        <a href="tel:0993808146" className="text-gray-300 hover:text-amber-300 transition">
                            0993808146
                        </a>
                    </div>

                    {/* WhatsApp */}
                    <div>
                        <p className="text-lg flex items-center justify-center md:justify-start gap-2 text-white">
                            <RiWhatsappLine size={20} className="text-amber-300" />
                            WhatsApp:
                        </p>
                        <a href="https://api.whatsapp.com/send?phone=593993808146" className="text-gray-300 hover:text-amber-300 transition">
                            +593 993808146
                        </a>
                    </div>
                </div>
            </div>

            {/* Línea divisoria */}
            <hr className="border-gray-700 my-10 mx-auto w-4/5" />

            {/* Información de derechos y botón de volver arriba */}
            <div className="max-w-7xl mx-auto px-6 text-center">

                {/* Botón para volver arriba */}
                <div className="flex justify-center mb-5">
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        className="p-3 bg-amber-300 text-black rounded-full hover:bg-amber-400 transition flex items-center"
                        aria-label="Volver arriba"
                    >
                        <RiArrowUpSLine size={24} />
                    </button>
                </div>

                {/* Derechos reservados y enlaces */}
                <p className="text-gray-300">
                    © {new Date().getFullYear()} Todos los derechos reservados{" "}
                    <a href="https://tropictradesas.com" target="_blank" rel="noopener noreferrer" className="font-bold text-white hover:text-amber-300">
                        tropictradesas.com
                    </a>{" "}
                    | Sitio web y posicionamiento hecho por la agencia de tecnología{" "}
                    <a href="https://www.instagram.com/digitalcraft_ec/" target="_blank" rel="noopener noreferrer" className="text-amber-300 font-medium hover:underline">
                        Digital Craft
                    </a>
                </p>

                {/* Políticas */}
                <div className="flex items-center justify-center mt-2 gap-1">
                    <a href="/politica-de-privacidad" className="text-amber-300 hover:underline">
                        Política de privacidad
                    </a> |

                    <a href="/mapa-del-sitio" className="text-amber-300 hover:underline">
                        Mapa del sitio
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
