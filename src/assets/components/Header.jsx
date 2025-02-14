import { Link } from "react-scroll";

const Header = () => {
    return (
        <header className="shadow-md bg-[#466233]">
            <nav className="flex items-center   px-20 py-3">
                <span className="text-2xl font-bold text-amber-300">TropicTrade</span>
                <div className="hidden md:flex items-center space-x-10 ml-auto me-10">
                    <Link to="inicio" smooth={true} duration={500} className="text-white uppercase font-medium hover:text-amber-300 cursor-pointer">
                        Inicio
                    </Link>
                    <Link to="nosotros" smooth={true} duration={500} className="text-white uppercase font-medium hover:text-amber-300 cursor-pointer">
                        Nosotros
                    </Link>
                    <Link to="servicios" smooth={true} duration={500} className="text-white uppercase font-medium hover:text-amber-300 cursor-pointer">
                        Servicios
                    </Link>
                    <Link to="proyectos" smooth={true} duration={500} className="text-white uppercase font-medium hover:text-amber-300 cursor-pointer">
                        Proyectos
                    </Link>
                    <Link to="contacto" smooth={true} duration={500} className="text-white uppercase font-medium hover:text-amber-300 cursor-pointer">
                        Contacto
                    </Link>
                </div>
                <button className="bg-green-400 text-white font-medium px-6 py-2 rounded-full hover:bg-green-600">
                    Contáctanos
                </button>
            </nav>
        </header>
    );
};

export default Header;