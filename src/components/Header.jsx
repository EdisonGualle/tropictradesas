import { Link } from "react-scroll";
import { RiWhatsappLine, RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { useState, useEffect } from "react";
import logo from "/public/logo.png";

const Header = () => {
    const [activeSection, setActiveSection] = useState("inicio");
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["inicio", "nosotros", "servicios", "proyectos", "contacto"];
            let currentSection = "inicio";

            sections.forEach((section) => {
                const sectionElement = document.getElementById(section);
                if (sectionElement) {
                    const rect = sectionElement.getBoundingClientRect();
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        currentSection = section;
                    }
                }
            });

            setActiveSection(currentSection);
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleWhatsAppClick = () => {
        const phoneNumber = "593993808146";
        const message = encodeURIComponent("¡Hola! Me gustaría obtener más información.");
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(whatsappURL, "_blank");
    };

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out 
            ${isScrolled ? "bg-[#1b1464]/91 backdrop-blur-md shadow-md" : "bg-[#1b1464]"}`}>
            
            <nav className="flex items-center justify-between px-6 md:px-20 py-3">
                {/* Logo y Nombre */}
                <div className="flex items-center space-x-3">
                    <img src={logo} alt="TropicTrade Logo" className="h-10 w-auto" />
                    <span className={`font-bold text-amber-300 transition-all duration-300 
                        ${isScrolled ? "text-2xl" : "text-3xl"}`}>
                        TropicTrade
                    </span>
                </div>

                {/* Menú en escritorio */}
                <div className="hidden md:flex items-center space-x-10">
                    {[
                        { id: "inicio", label: "Inicio" },
                        { id: "nosotros", label: "Nosotros" },
                        { id: "servicios", label: "Servicios" },
                        { id: "proyectos", label: "Proyectos" },
                        { id: "contacto", label: "Contacto" },
                    ].map((item) => (
                        <Link
                            key={item.id}
                            to={item.id}
                            smooth={true}
                            duration={500}
                            spy={true}
                            offset={-64}
                            className={`uppercase font-medium cursor-pointer transition-colors 
                                ${activeSection === item.id ? "text-amber-300" : "text-white hover:text-amber-300"}
                            `}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>

                {/* Botón de WhatsApp (siempre visible) */}
                <button
                    onClick={handleWhatsAppClick}
                    className="hidden md:flex justify-center gap-1 items-center bg-green-500 text-white font-medium px-6 py-2 rounded-full hover:bg-green-600 transition"
                >
                    <RiWhatsappLine />
                    0993808146
                </button>

                {/* Botón menú hamburguesa en móviles */}
                <button 
                    className="md:hidden text-white text-2xl" 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <RiCloseLine /> : <RiMenu3Line />}
                </button>
            </nav>

            {/* Menú desplegable en móviles */}
            <div className={`md:hidden fixed top-16 right-0 w-full bg-[#1b1464] transition-all duration-300 
                ${isMenuOpen ? "h-auto opacity-100 py-5" : "h-0 opacity-0 pointer-events-none"}`}>
                
                <div className="flex flex-col items-center space-y-4">
                    {[
                        { id: "inicio", label: "Inicio" },
                        { id: "nosotros", label: "Nosotros" },
                        { id: "servicios", label: "Servicios" },
                        { id: "proyectos", label: "Proyectos" },
                        { id: "contacto", label: "Contacto" },
                    ].map((item) => (
                        <Link
                            key={item.id}
                            to={item.id}
                            smooth={true}
                            duration={500}
                            spy={true}
                            offset={-64}
                            className={`uppercase font-medium cursor-pointer text-white 
                                ${activeSection === item.id ? "text-amber-300" : "hover:text-amber-300"}
                            `}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item.label}
                        </Link>
                    ))}
                    
                    {/* Botón de WhatsApp en el menú móvil */}
                    <button
                        onClick={handleWhatsAppClick}
                        className="flex items-center gap-2 bg-green-500 text-white px-5 py-2 rounded-full hover:bg-green-600 transition"
                    >
                        <RiWhatsappLine />
                        0993808146
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
