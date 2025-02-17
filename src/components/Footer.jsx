import { Link } from "react-scroll";
import { RiArrowUpSLine } from "react-icons/ri";

const Footer = () => {
    return (
        <footer className="bg-[#466233] text-white py-10">
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
