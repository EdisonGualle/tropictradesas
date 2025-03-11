const MisionVisionValores = () => {
    const items = [
        {
            title: "Misión",
            text: "Exportar fruta de excelente calidad, apegados a los más altos estándares que exigen los mercados europeos, asiáticos y el resto del mundo. Y así dejar en el más alto nivel a nuestro país.",
            icon: "🎯",
            color: "from-blue-500 to-indigo-600",
        },
        {
            title: "Visión",
            text: "Posicionarnos como una exportadora de aceptación en los mercados de consumo mundial, por los altos estándares de calidad de la fruta exportada y el compromiso de retribución con la comunidad.",
            icon: "🌍",
            color: "from-green-500 to-teal-600",
        },
        {
            title: "Valores",
            text: "Honestidad, Responsabilidad, Solidaridad, Respeto, Unión.",
            icon: "🤝",
            color: "from-yellow-500 to-orange-600",
        },
    ];

    return (
        <section className="bg-[#f8f4eb] py-20 px-6 sm:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold text-[#1b1464]">
                    Misión, Visión y Valores
                </h2>
                <div className="w-32 h-1  mt-4 mb-8 mx-auto"></div> {/* Línea amarilla */}

                {/* Contenedor de las tarjetas */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="p-8 rounded-2xl bg-white shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                        >
                            {/* Icono con degradado */}
                            <div
                                className={`flex justify-center items-center w-20 h-20 mx-auto bg-gradient-to-r ${item.color} text-white text-5xl rounded-full shadow-md transition-all duration-300 hover:scale-110`}
                            >
                                {item.icon}
                            </div>
                            {/* Título en gris oscuro */}
                            <h3 className="mt-6 text-2xl font-semibold text-gray-800">{item.title}</h3>
                            {/* Texto en gris medio */}
                            <p className="mt-4 text-gray-600">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MisionVisionValores;
