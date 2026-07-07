import { useState } from 'react';
import ButtonMinimalist from "@/components/ui/Buttons/ButtonMinimalist";

export default function ContactForm() {
    // Estados para manejar el proceso de envío y los mensajes
    const [estado, setEstado] = useState("");
    const [enviando, setEnviando] = useState(false);

    const manejarEnvio = async (event) => {
        event.preventDefault(); // Evita que la página se recargue o redirija a Formspree
        setEnviando(true);
        setEstado("");

        const formulario = event.target;
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
                formulario.reset(); // Limpia los campos del formulario tras el éxito
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
        <div className="w-full max-w-xl mx-auto">
            <form onSubmit={manejarEnvio} className="flex flex-col gap-4">
                <input
                    name="name"
                    type="text"
                    placeholder={enviando ? "Sending..." : "Your full name here."}
                    className="p-3 text-lg rounded-lg bg-black/40 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-purple-600 transition-colors relative z-12 pointer-events-auto w-full"
                    required
                    disabled={enviando}
                />

                <input
                    name="email"
                    type="email"
                    placeholder={enviando ? "Sending..." : "Your email here."}
                    className="p-3 text-lg rounded-lg bg-black/40 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-purple-600 transition-colors relative z-12 pointer-events-auto w-full"
                    required
                    disabled={enviando}
                />

                <textarea
                    name="message"
                    placeholder={enviando ? "Sending..." : "Your message here."}
                    rows={5}
                    className="p-3 text-lg rounded-lg bg-black/40 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-purple-600 transition-colors relative z-12 pointer-events-auto w-full resize-none"
                    required
                    disabled={enviando}
                />

                <button 
                    type="submit" 
                    disabled={enviando} 
                    className="px-6 py-3 text-lg rounded-lg border border-purple-600 text-white bg-purple-600/10 hover:bg-purple-600 transition-all font-medium relative z-12 pointer-events-auto w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                    {enviando ? "Sending message..." : "Send Message"}
                </button> 
            </form>

            {/* Alertas de Estado estilizadas con Tailwind */}
            {estado === "success" && (
                <p className="mt-4 text-emerald-400 font-medium text-lg animate-fade-in">
                    ¡Thanks for reaching out! I will get back to you soon.
                </p>
            )}

            {estado === "error" && (
                <p className="mt-4 text-rose-400 font-medium text-lg animate-fade-in">
                    Something went wrong. Please try again later.
                </p>
            )}
        </div>
    );
}
