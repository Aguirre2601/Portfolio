import { useState } from 'react';
import ButtonMinimalist from "@/components/ui/Buttons/ButtonMinimalist";

export default function ContactForm() {
    // Estados para manejar el proceso de envío y los mensajes
    const [estado, setEstado] = useState("");
    const [enviando, setEnviando] = useState(false);

    // 2. Añade el tipo FormEvent<HTMLFormElement> al parámetro event
    const manejarEnvio = async (event: React.SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault();
        setEnviando(true);
        setEstado("");

        const formulario = event.currentTarget; // En TS es más seguro usar currentTarget
        const datos = new FormData(formulario);

        try {
            const respuesta = await fetch("https://formspree.io/f/xwvdjvwz", {
                method: "POST",
                body: datos,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (respuesta.ok) {
                setEstado("success");
                formulario.reset();
            } else {
                setEstado("error");
            }
        } catch (error) {
            setEstado("error");
        } finally {
            setEnviando(false);
        }
    };
    return (
        <div className="w-full max-w-9/10 mx-auto">
            <form onSubmit={manejarEnvio} className="flex flex-col gap-4 p-4 ">
                <input
                    name="name"
                    type="text"
                    autoComplete='name'
                    placeholder={enviando ? "Sending..." : "Your full name here."}
                    className="p-3 text-lg rounded-lg bg-black/40 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-purple-600 transition-colors relative z-12 pointer-events-auto w-9/10"
                    required
                    disabled={enviando}
                />

                <input
                    name="email"
                    type="email"
                    autoComplete='email'
                    placeholder={enviando ? "Sending..." : "Your email here."}
                    className="p-3 text-lg rounded-lg bg-black/40 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-purple-600 transition-colors relative z-12 pointer-events-auto w-9/10"
                    required
                    disabled={enviando}
                />

                <textarea
                    name="message"
                    placeholder={enviando ? "Sending..." : "Your message here."}
                    rows={5}
                    className="p-3 text-lg rounded-lg bg-black/40 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-purple-600 transition-colors relative z-12 pointer-events-auto w-9/10 resize-none"
                    required
                    disabled={enviando}
                />

                <button
                    type="submit"
                    disabled={enviando}
                    className="text-2xl  text-white transition-all  relative z-12 pointer-events-auto w-9/10 sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed 
                    hover:underline hover:underline-offset-8 hover:decoration-purple-600 hover:decoration-2 hover:cursor-pointer font-satoshi"
                >
                    {enviando ? "Enviando Mensaje..." : "Enviar Mensaje"}
                </button>
            </form>

            {/* Alertas de Estado estilizadas con Tailwind */}
            {estado === "success" && (
                <p className="mt-4 text-emerald-400 font-medium text-lg animate-fade-in">
                    ¡Gracias por comunicarte conmigo! Te respondere a la brevedad.
                </p>
            )}

            {estado === "error" && (
                <p className="mt-4 text-rose-400 font-medium text-lg animate-fade-in">
                    Ups! Algo salio mal. Por favor intenta mas tarde o comunicate por mis redes sociales.
                </p>
            )}
        </div>
    );
}
