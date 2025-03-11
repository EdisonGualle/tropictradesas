import { useEffect, useState } from "react";

import { RiMailLine, RiMapPin2Line } from "react-icons/ri";
import Header from "@components/Header";
import Footer from "@components/Footer";

const PrivacyPolicy = () => {
    const [openSections, setOpenSections] = useState({
        info: false,
        usage: false,
        rights: false,
        security: false,
        contact: false,
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const toggleSection = (section) => {
        setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
    };

    const sections = [
        {
            title: "1. Información que recopilamos",
            key: "info",
            content: "Recopilamos información personal como nombre, correo electrónico y teléfono cuando los usuarios nos contactan. Esta información es utilizada únicamente para responder consultas y mejorar nuestros servicios."
        },
        {
            title: "2. Uso de la información",
            key: "usage",
            content: "Utilizamos la información recopilada para responder consultas, brindar soporte y mejorar nuestros servicios. No compartimos datos con terceros sin consentimiento previo."
        },
        {
            title: "3. Derechos de los usuarios",
            key: "rights",
            content: "Los usuarios tienen derecho a acceder, rectificar o eliminar su información personal en cualquier momento. Para ejercer estos derechos, contáctanos a través de los medios indicados."
        },
        {
            title: "4. Seguridad de la información",
            key: "security",
            content: "Implementamos medidas de seguridad adecuadas para proteger tu información contra accesos no autorizados, alteraciones y divulgaciones indebidas."
        },
        {
            title: "5. Contacto",
            key: "contact",
            content: (
                <div className="text-gray-600 leading-7 mt-3 space-y-2">
                    <p className="flex items-center gap-2">
                        <RiMailLine className="text-[#1b1464]" />
                        <strong>Email:</strong> info@tropictradesas.com
                    </p>
                    <p className="flex items-center gap-2">
                        <RiMapPin2Line className="text-[#1b1464]" />
                        <strong>Ubicación:</strong> Guayaquil, Ecuador
                    </p>
                </div>
            )
        }
    ];

    return (
        <>
        <Header />
            <div className="w-full  bg-gray-white flex flex-col items-center my-12 md:px-6 sm:px-12 lg:px-20">
                {/* Contenedor de la política */}
                <div className="w-full px-6 lg:px-12 py-16">
                    <h1 className="text-5xl font-bold text-[#1b1464] text-center mb-8">
                        Política de Privacidad
                    </h1>

                    <p className="text-gray-700 text-lg text-center">
                        📅 Última actualización: <strong>11 de marzo de 2025</strong>
                    </p>

                    <p className="text-gray-600 text-center leading-7 mt-4">
                        En <strong>TropicTrade</strong>, nos comprometemos a proteger tu privacidad y garantizar que tu información personal sea tratada de manera segura y confidencial.
                    </p>

                    {/* Secciones colapsables */}
                    <div className="mt-12 space-y-6 w-full">
                        {sections.map(({ title, key, content }) => (
                            <div key={key} className="bg-white w-full p-6 rounded-lg shadow-md">
                                <button
                                    onClick={() => toggleSection(key)}
                                    className="w-full text-left md:text-2xl  sm:text-xl font-semibold text-[#1b1464] flex justify-between items-center"
                                >
                                    {title}
                                    <span className={`transition-transform ${openSections[key] ? "rotate-180" : ""}`}>🔽</span>
                                </button>
                                {openSections[key] && (
                                    <div className="text-gray-600 leading-7 mt-3">{content}</div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>

    );
};

export default PrivacyPolicy;
