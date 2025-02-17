import { Link } from "react-scroll";
import { RiWhatsappLine } from "react-icons/ri";
import { useState, useEffect } from "react";

// import logo from '/public/logo.png';


const Header = () => {
    const [activeSection, setActiveSection] = useState("inicio");
    const [isScrolled, setIsScrolled] = useState(false);

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

            // Detectar si el usuario ha hecho scroll
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
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
        <header
            className={`w-full z-50 transition-all duration-500 ease-in-out fixed top-0 left-0 
            ${isScrolled ? "bg-[#466233]/91 backdrop-blur-sm shadow-md" : "bg-[#466233] bg-opacity-100"}`}>

            <nav className={`flex items-center px-20 py-3 transition-all duration-300 
                ${isScrolled ? "my-0" : "my-3"}`}>
                {/* <img src={logo} alt="TropicTrade Logo" className="h-16" /> */}
                <span className={`font-bold text-amber-300 transition-all duration-300 
                    ${isScrolled ? "text-2xl" : "text-4xl"}`}>
                    TropicTrade
                </span>
                <div className="hidden md:flex items-center space-x-10 ml-auto me-10">
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
                            className={`uppercase font-medium cursor-pointer ${activeSection === item.id ? "text-amber-300" : "text-white hover:text-amber-300"
                                }`}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
                <button
                    onClick={handleWhatsAppClick}
                    className="flex justify-center gap-1 items-center bg-green-400 text-white font-medium px-6 py-2 rounded-full hover:bg-green-600"
                >
                    <RiWhatsappLine />
                    0993808146
                </button>
            </nav>
        </header>
    );
};

export default Header;
