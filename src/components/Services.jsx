const Services = () => {
    return (
        <section id="servicios" className="bg-gray-100 py-16 px-6 sm:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold text-[#1b1464]">
                    Servicios
                </h2>
                <div className="w-32 h-1  mt-4 mb-8 mx-auto"></div> {/* Línea amarilla */}

                {/* Contenedor de los servicios */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
                    {/* Tarjeta 1 */}
                    <div className="bg-white shadow-md p-6 rounded-xl">
                        <img src="src/assets/images/caja.jpeg" alt="Cajas de Banano" className="w-full h-[250px] sm:h-[280px] md:h-[323px] object-cover rounded-lg" />
                        <h3 className="text-2xl font-bold text-[#1b1464] mt-6">Cajas de Banano</h3>
                        <p className="text-gray-600 mt-4">
                            Buscamos cubrir las necesidades y promover el orgullo de trabajar en nuestros campos. Estos campos pertenecen a cada hombre y mujer que trabaja duro para traer lo más dulce y frutas frescas de la zona.
                        </p>
                    </div>

                    {/* Tarjeta 2 */}
                    <div className="bg-white shadow-md p-6 rounded-xl">
                        <img src="src/assets/images/proceso-previo.jpeg" alt="Proceso previo al Embarque" className="w-full h-[250px] sm:h-[280px] md:h-[323px] object-cover rounded-lg" />
                        <h3 className="text-2xl font-bold text-[#1b1464] mt-6">Proceso previo al Embarque</h3>
                        <p className="text-gray-600 mt-4">
                            Este paso es fundamental en el proceso de nuestro servicio ya que garantiza que el producto llegue en óptimas condiciones desde su partida hasta su llegada. Nuestro compromiso es brindar el mejor servicio con agilidad y calidad.
                        </p>
                    </div>

                    {/* Tarjeta 3 */}
                    <div className="bg-white shadow-md p-6 rounded-xl">
                        <img src="src/assets/images/producto-exportacion.jpeg" alt="Producto de Exportación" className="w-full h-[250px] sm:h-[280px] md:h-[323px] object-cover rounded-lg" />
                        <h3 className="text-2xl font-bold text-[#1b1464] mt-6">Producto de Exportación</h3>
                        <p className="text-gray-600 mt-4">
                            Nos encargamos de transportar productos de la mejor calidad para exportación, dejando en alto el nombre de nuestro país, Ecuador. ¡Gracias por preferirnos!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
