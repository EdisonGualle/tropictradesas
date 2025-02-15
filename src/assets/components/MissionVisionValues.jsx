const MissionVisionValues = () => {
    return (
        <section className="bg-white py-16 px-6 md:px-12 lg:px-24">
            <div className="max-w-6xl mx-auto">
                {/* Contenedor de 3 columnas */}
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Misión */}
                    <div className="text-center">
                        {/* Icono */}
                        <div className="w-16 h-16 bg-[#466233] rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                            </svg>
                        </div>
                        {/* Contenido */}
                        <h2 className="text-2xl font-bold text-[#466233] mb-4">Misión</h2>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            Exportar fruta de excelente calidad, apegados a los más altos estándares que exigen los mercados europeos, asiáticos y el resto del mundo. Y así dejar en el más alto nivel a nuestro país.
                        </p>
                    </div>

                    {/* Visión */}
                    <div className="text-center">
                        {/* Icono */}
                        <div className="w-16 h-16 bg-[#466233] rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                            </svg>
                        </div>
                        {/* Contenido */}
                        <h2 className="text-2xl font-bold text-[#466233] mb-4">Visión</h2>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            Llegar a posicionarse como una exportadora de primer nivel, que tenga excelente aceptación en los mercados de consumo a nivel mundial, y uno de nuestros principales objetivos en EXPORBANALVA es retribuir a la comunidad.
                        </p>
                    </div>

                    {/* Valores */}
                    <div className="text-center">
                        {/* Icono */}
                        <div className="w-16 h-16 bg-[#466233] rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                        </div>
                        {/* Contenido */}
                        <h2 className="text-2xl font-bold text-[#466233] mb-4">Valores</h2>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            Honestidad, Responsabilidad, Solidaridad, Respeto, Unión.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MissionVisionValues;