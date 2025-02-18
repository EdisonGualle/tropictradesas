const Services = () => {
    return (
        <section id="servicios" className="bg-gray-100 py-16 max-w-full mx-auto px-2 sm:px-4 lg:px-20">
            <div className="max-w-7xl mx-auto text-center"> {/* Aumenté el ancho del contenedor principal */}
                <h2 className="text-[42px] font-semibold text-[#466233]">SERVICIOS</h2>
                <div className="w-20 h-1 bg-gray-100 mt-4 mb-8 mx-auto"></div> {/* Línea amarilla */}

                {/* Contenedor de los servicios */}
                <div className="grid md:grid-cols-3 gap-4"> {/* Reduje el espacio entre columnas (gap) */}
                    {/* Tarjeta 1 */}
                    <div className="bg-white shadow-md p-4">
                        <img src="https://exporbanalva.com/wp-content/uploads/2022/04/Img-Cajas-Banano.webp" alt="Cajas de Banano" className="w-[404px] h-[323px] object-cover" />
                        <h3 className="text-2xl font-bold text-[#466233] mt-6">Cajas de Banano</h3>
                        <p className="text-gray-600 mt-4">
                        Buscamos cubrir las necesidades y para promover el orgullo de trabajar en nuestros Campos. Estos campos pertenecen a cada hombre y mujer que trabaja Difícil traer lo más dulce y frutas frescas en la Zona.
                        </p>
                    </div>

                    {/* Tarjeta 2 */}
                    <div className="bg-white shadow-md p-8">
                        <img src="https://exporbanalva.com/wp-content/uploads/2022/04/Img-Proceso-previo-Embarque.webp" alt="Proceso previo al Embarque" className="w-[404px] h-[323px] object-cover" />
                        <h3 className="text-2xl font-bold text-[#466233] mt-6">Proceso previo al Embarque</h3>
                        <p className="text-gray-600 mt-4">
                            Este paso es fundamental en el proceso de nuestro servicio ya que garantiza que el producto llegue en óptimas condiciones desde su partida hasta su llegada, nuestro compromiso es brindar el mejor servicio con agilidad y calidad.
                        </p>
                    </div>

                    {/* Tarjeta 3 */}
                    <div className="bg-white shadow-md p-8">
                        <img src="https://exporbanalva.com/wp-content/uploads/2022/04/Img-Exportacion.jpg" alt="Producto de Exportación" className="w-[404px] h-[323px] object-cover" />
                        <h3 className="text-2xl font-bold text-[#466233] mt-6">Producto de Exportación</h3>
                        <p className="text-gray-600 mt-4">
                            El producto que nos encargamos de transportar es de la mejor calidad para exportación dejando en alto el nombre de nuestro país Ecuador. Gracias por preferirnos.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;