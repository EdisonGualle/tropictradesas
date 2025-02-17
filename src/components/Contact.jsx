import { useForm } from "react-hook-form";
import { RiMailLine, RiUser3Line, RiPhoneLine, RiMessage3Line } from "react-icons/ri";

const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm();

    return (
        <section id="contacto" className="max-w-5xl mx-auto px-6 py-20">
            <h3 className="text-center text-gray-700 text-[22px] leading-6">¿Tienes alguna pregunta?</h3>
            <h2 className="text-center text-[26px] font-bold text-[#466233] my-3">
                ENVÍANOS UN MENSAJE A TRAVÉS DE ESTE FORMULARIO DE CONTACTO
            </h2>

            {/* Formulario sin funcionalidad de envío */}
            <form onSubmit={handleSubmit(() => { })} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Nombre */}
                    <div>
                        <label className="block text-gray-700">Nombre</label>
                        <div className="relative">
                            <RiUser3Line className="absolute left-3 top-3 text-gray-400" />
                            <input
                                type="text"
                                {...register("name", { required: "El nombre es obligatorio" })}
                                className="pl-10 border w-full p-2 rounded"
                                placeholder="Nombre"
                            />
                        </div>
                        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                    </div>

                    {/* Correo Electrónico */}
                    <div>
                        <label className="block text-gray-700">Correo Electrónico</label>
                        <div className="relative">
                            <RiMailLine className="absolute left-3 top-3 text-gray-400" />
                            <input
                                type="email"
                                {...register("email", {
                                    required: "El correo es obligatorio",
                                    pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Correo no válido" },
                                })}
                                className="pl-10 border w-full p-2 rounded"
                                placeholder="Correo electrónico"
                            />
                        </div>
                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Teléfono */}
                    <div>
                        <label className="block text-gray-700">Teléfono</label>
                        <div className="relative">
                            <RiPhoneLine className="absolute left-3 top-3 text-gray-400" />
                            <input
                                type="text"
                                {...register("phone", {
                                    required: "El teléfono es obligatorio",
                                    pattern: { value: /^[0-9]{7,15}$/, message: "Número no válido" },
                                })}
                                className="pl-10 border w-full p-2 rounded"
                                placeholder="Teléfono"
                            />
                        </div>
                        {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
                    </div>

                    {/* Asunto */}
                    <div>
                        <label className="block text-gray-700">Asunto</label>
                        <input
                            type="text"
                            {...register("subject", { required: "El asunto es obligatorio" })}
                            className="border w-full p-2 rounded"
                            placeholder="Asunto"
                        />
                        {errors.subject && <p className="text-red-500 text-sm">{errors.subject.message}</p>}
                    </div>
                </div>

                {/* Mensaje */}
                <div>
                    <label className="block text-gray-700">Mensaje</label>
                    <div className="relative">
                        <RiMessage3Line className="absolute left-3 top-3 text-gray-400" />
                        <textarea
                            {...register("message", { required: "El mensaje no puede estar vacío" })}
                            className="pl-10 border w-full p-2 rounded h-32 resize-none"
                            placeholder="Escribe tu mensaje..."
                        ></textarea>
                    </div>
                    {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
                </div>

                {/* Botón de Enviar (sin funcionalidad) */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-amber-300 text-black font-medium py-3 rounded-full shadow-md hover:bg-amber-400 transition"
                >
                    {isSubmitting ? "Enviando..." : "Enviar"}
                </button>
            </form>
        </section>
    );
};

export default Contact;
