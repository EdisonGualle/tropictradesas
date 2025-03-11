import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { RiWhatsappLine, RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "/public/logo.png";

const Header = () => {
    const [activeSection, setActiveSection] = useState("inicio");
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();
    const isHomePage = location.pathname === "/";

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const scrollToSection = params.get("scroll");

        if (scrollToSection) {
            setTimeout(() => {
                document.getElementById(scrollToSection)?.scrollIntoView({ behavior: "smooth" });
            }, 500);
            navigate("/", { replace: true });
        }
    }, [location, navigate]);

    useEffect(() => {
        if (!isHomePage) {
            setActiveSection("");
            return;
        }

        const handleScroll = () => {
            const sections = ["inicio", "nosotros", "servicios", "proyectos", "contacto"];
            let currentSection = "inicio";

            sections.forEach((section) => {
                const sectionElement = document.getElementById(section);
                if (sectionElement) {
                    const rect = sectionElement.getBoundingClientRect();
                    if (rect.top <= window.innerHeight * 0.3 && rect.bottom >= window.innerHeight * 0.3) {
                        currentSection = section;
                    }
                }
            });

            setActiveSection(currentSection);
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isHomePage]);

    const handleNavClick = (id) => {
        if (!isHomePage) {
            navigate(`/?scroll=${id}`);
        } else {
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out 
            ${isScrolled ? "bg-[#1b1464]/91 backdrop-blur-md shadow-md" : "bg-[#1b1464]"}`}>

            <nav className="flex items-center justify-between px-6 sm:px-10 lg:ps-36 lg:pe-28 py-3">
                {/* Logo y Nombre */}
                <button onClick={() => navigate("/")} className="flex items-center space-x-3 cursor-pointer">
                    <img src={logo} alt="TropicTrade Logo" className="h-10 w-auto" />
                    <span className={`font-bold text-amber-300 transition-all duration-300 
                    ${isScrolled ? "text-2xl" : "text-3xl"}`}>
                        TropicTrade
                    </span>
                </button>

                {/* Menú en escritorio (LG) */}
                <div className="hidden lg:flex items-center space-x-10">
                    {[
                        { id: "inicio", label: "Inicio" },
                        { id: "nosotros", label: "Nosotros" },
                        { id: "servicios", label: "Servicios" },
                        { id: "proyectos", label: "Proyectos" },
                        { id: "contacto", label: "Contacto" },
                    ].map((item) => (
                        <button
                            key={item.id}
                            onClick={() => handleNavClick(item.id)}
                            className={`uppercase font-medium cursor-pointer transition-colors 
                                ${activeSection === item.id ? "text-amber-300" : "text-white hover:text-amber-300"}`}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>

                {/* Botón de WhatsApp (solo en LG) */}
                <button
                    onClick={() => window.open(`https://wa.me/593993808146?text=¡Hola! Me gustaría obtener más información.`, "_blank")}
                    className="hidden lg:flex justify-center gap-1 items-center bg-green-500 text-white font-medium px-6 py-2 rounded-full hover:bg-green-600 transition"
                >
                    <RiWhatsappLine />
                    0993808146
                </button>

                {/* Botón menú hamburguesa en móviles (sm y md) */}
                <button
                    className="lg:hidden text-white text-2xl"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <RiCloseLine /> : <RiMenu3Line />}
                </button>
            </nav>

            {/* Menú desplegable en móviles (sm y md) */}
            {isMenuOpen && (
                <div className="lg:hidden fixed top-16 right-0 w-full bg-[#1b1464]/91 backdrop-blur-md transition-all duration-300">
                    <div className="flex flex-col items-center space-y-4 py-5">
                        {[
                            { id: "inicio", label: "Inicio" },
                            { id: "nosotros", label: "Nosotros" },
                            { id: "servicios", label: "Servicios" },
                            { id: "proyectos", label: "Proyectos" },
                            { id: "contacto", label: "Contacto" },
                        ].map((item) => (
                            <button
                                key={item.id}
                                onClick={() => {
                                    handleNavClick(item.id);
                                    setIsMenuOpen(false);
                                }}
                                className="uppercase font-medium cursor-pointer text-white hover:text-amber-300"
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
