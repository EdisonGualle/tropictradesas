const MissionVisionValues = () => {
    return (
        <section id="nosotros" className="bg-white py-16 px-5">
            <div className="max-w-7xl mx-auto"> {/* Aumenté el ancho máximo a max-w-7xl */}
                {/* Contenedor de 3 columnas con mejor proporción */}
                <div className="grid md:grid-cols-3 gap-x-6 gap-y-12 items-center"> {/* Reduje el espacio entre columnas */}
                    {/* Misión */}
                    <div className="text-center flex flex-col h-full">
                        <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 relative group">
                            <img
                                src="https://exporbanalva.com/wp-content/uploads/2022/04/Icon-Mision.png"
                                alt="Misión"
                                className="w-full h-full transition-transform duration-300 group-hover:-translate-y-1 mb-8"
                            />
                            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                        </div>
                        <h2 className="text-2xl font-bold text-[#466233] mb-4">Misión</h2>
                        <p className="text-gray-700 text-lg leading-relaxed mx-auto"> {/* Eliminé max-w-[85%] */}
                            Exportar fruta de excelente calidad, apegados a los más altos estándares que exigen los mercados europeos, asiáticos y el resto del mundo. Y así dejar en el más alto nivel a nuestro país.
                        </p>
                    </div>

                    {/* Visión */}
                    <div className="text-center flex flex-col h-full">
                        <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 relative group">
                            <img
                                src="https://exporbanalva.com/wp-content/uploads/2022/04/Icon-Vision.png"
                                alt="Visión"
                                className="w-full h-full transition-transform duration-300 group-hover:-translate-y-1 mb-8"
                            />
                            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                        </div>
                        <h2 className="text-2xl font-bold text-[#466233] mb-4">Visión</h2>
                        <p className="text-gray-700 text-lg leading-relaxed mx-auto"> {/* Eliminé max-w-[100%] */}
                            Llegar a posicionarse como una exportadora de primer nivel, que tenga excelente aceptación en los mercados de consumo a nivel mundial, y uno de nuestros principales objetivos en EXPORBANALVA es retribuir a la comunidad.
                        </p>
                    </div>

                    {/* Valores */}
                    <div className="text-center flex flex-col h-full">
                        <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 relative group">
                            <img
                                src="https://exporbanalva.com/wp-content/uploads/2022/04/Icon-Valores.png"
                                alt="Valores"
                                className="w-full h-full transition-transform duration-300 group-hover:-translate-y-1 mb-8"
                            />
                            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                        </div>
                        <h2 className="text-2xl font-bold text-[#466233] mb-4">Valores</h2>
                        <p className="text-gray-700 text-lg leading-relaxed mx-auto"> {/* Eliminé max-w-[85%] */}
                            Honestidad, Responsabilidad, Solidaridad, Respeto, Unión.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MissionVisionValues;
