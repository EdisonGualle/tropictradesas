import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { RiMailLine, RiUser3Line, RiPhoneLine, RiMessage3Line } from "react-icons/ri";
import { useState } from "react";

const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm();

    const [notification, setNotification] = useState({ message: "", type: "" });

    // Función para formatear texto (primera letra en mayúscula)
    const capitalizeFirstLetter = (text) => {
        return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    };

    const formatName = (name) => {
        return name
            .trim() 
            .split(/\s+/) 
            .slice(0, 3) 
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) 
            .join(" "); 
    };

    // Validaciones y envío del formulario
    const onSubmit = async (data) => {
        try {
            // Transformaciones
            const formattedName = formatName(data.name);

            const formattedSubject = capitalizeFirstLetter(data.subject.trim().substring(0, 20));
            const formattedMessage = capitalizeFirstLetter(data.message.trim().substring(0, 500));

            // Parámetros formateados
            const templateParams = {
                to_email: "info@tropictradesas.com",
                from_name: formattedName,
                reply_to: data.email,
                phone: data.phone,
                subject: formattedSubject,
                message: formattedMessage,
            };

            await emailjs.send("service_suucajf", "template_di6mz7r", templateParams, "yRLjbdkKP0oUB7s62");

            setNotification({ message: "Mensaje enviado correctamente.", type: "success" });
            reset(); // Limpiar formulario
        } catch (error) {
            console.error("Error enviando el mensaje:", error);
            setNotification({ message: "Error al enviar el mensaje. Intenta de nuevo.", type: "error" });
        }

        // Ocultar notificación después de 3 segundos
        setTimeout(() => setNotification({ message: "", type: "" }), 3000);
    };

    return (
        <section className="max-w-5xl mx-auto px-6 sm:px-12 lg:px-20 py-20">
            <h3 className="text-center text-gray-700 text-lg sm:text-xl">
                ¿Tienes alguna pregunta?
            </h3>
            <h2 className="text-center text-2xl sm:text-3xl md:text-[26px] font-bold text-[#1b1464] my-4">
                ENVÍANOS UN MENSAJE A TRAVÉS DE ESTE FORMULARIO DE CONTACTO
            </h2>

            {/* Notificación de éxito o error */}
            {notification.message && (
                <div
                    className={`p-3 rounded-lg  text-center mb-4 ${notification.type === "success" ? "bg-green-100" : "bg-red-100"
                        }`}
                >
                    {notification.message}
                </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Nombre */}
                    <div>
                        <label className="block text-gray-700">Nombre</label>
                        <div className="relative">
                            <RiUser3Line className="absolute left-3 top-3 text-gray-400" />
                            <input
                                type="text"
                                {...register("name", {
                                    required: "El nombre es obligatorio",
                                    validate: (value) =>
                                        value.split(" ").length <= 4 || "Máximo 4 palabras",
                                })}
                                className="pl-10 border w-full p-3 rounded focus:outline-none focus:ring focus:ring-amber-300"
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
                                className="pl-10 border w-full p-3 rounded focus:outline-none focus:ring focus:ring-amber-300"
                                placeholder="Correo electrónico"
                            />
                        </div>
                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                                className="pl-10 border w-full p-3 rounded focus:outline-none focus:ring focus:ring-amber-300"
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
                            {...register("subject", {
                                required: "El asunto es obligatorio",
                                maxLength: { value: 50, message: "Máximo 50 caracteres" },
                            })}
                            className="border w-full p-3 rounded focus:outline-none focus:ring focus:ring-amber-300"
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
                            {...register("message", {
                                required: "El mensaje no puede estar vacío",
                                maxLength: { value: 500, message: "Máximo 500 caracteres" },
                            })}
                            className="pl-10 border w-full p-3 rounded h-32 resize-none focus:outline-none focus:ring focus:ring-amber-300"
                            placeholder="Escribe tu mensaje..."
                        ></textarea>
                    </div>
                    {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
                </div>

                {/* Botón de Enviar */}
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
