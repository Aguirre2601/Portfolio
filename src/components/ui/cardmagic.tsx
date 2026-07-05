
import JobButton from '@/components/ui/Buttons/JobButton';
import ButtonMinimalist from "@/components/ui/Buttons/ButtonMinimalist";



const MagicCard = () => {
  return (
<div className="relative z-4 grid grid-cols-1 md:grid-cols-4 text-center items-center justify-center">
                        <div className="md:col-span-4 bg-transparent pt-0 mb-20">
                            <h1 className="text-4xl md:text-6xl text-center" >
                                <span className="text-transparent bg-clip-text bg-linear-to-br from-gray-100 via-gray-400 to-gray-100 font-ArraySemiBold font-bold">
                                ¿Quieres conocer más sobre mi experiencia?
                                </span>
                            </h1>
                        </div>

                        <div className="relative z- 8 md:col-span-2 flex flex-col items-center justify-center border rounded-xl border-gray-700 bg-black/50 backdrop-blur-sm p-6 md:p-12 m-5 md:m-10"
                        >
                            <h2 className="text-4xl font-bold mb-4 tracking-tight font-satoshi" >
                                Contactame
                            </h2>
                            <p className="text-lg md:text-2xl text-transparent bg-clip-text bg-linear-to-br from-gray-100 via-gray-400 to-gray-100 font-satoshi text-center"
                                
                            >
                                Conoce más sobre mi experiencia y habilidades. Estoy disponible para discutir oportunidades de colaboración,
                                proyectos o cualquier consulta que tengas. ¡No dudes en enviarme un mensaje!
                            </p>
                            <p className="text-lg md:text-2xl text-transparent bg-clip-text bg-linear-to-br from-gray-100 via-gray-400 to-gray-100 font-satoshi text-center"
                                
                            >
                                O comunicate por mis redes sociales. Estoy abierto a nuevas oportunidades y siempre dispuesta a aprender más.
                            </p>
                            <a href="#Contacto"><ButtonMinimalist /></a>
                            
                        </div>

                        <div className=" relative  z-8 md:col-span-2 flex flex-col items-center justify-center text-center border border-gray-700 rounded-xl bg-black/50 backdrop-blur-sm p-6 md:p-12 m-5 md:m-10"
                        
                        >
                            <h2 className="text-4xl font-bold mb-4 tracking-tight font-satoshi" >
                                Email
                            </h2>
                            <label className="text-white text-sm font-medium">Escribe tu nombre:</label>
                            <input 
                            type="text" 
                            placeholder="Your full name here." 
                            className="p-3 rounded-lg bg-black/40 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-blue-500 transition-colors relative z-12"
                            />

                            <label className="text-white text-sm font-medium">Escribe email:</label>
                            <input 
                            type="email" 
                            placeholder="Your email here." 
                            className="p-3 rounded-lg bg-black/40 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-blue-500 transition-colors relative z-12"
                            />

                            <label className="text-white text-sm font-medium">Escribe tu comentario:</label>
                            <textarea  
                                placeholder="Your message here." 
                                rows={4} // Define la altura inicial en líneas de texto
                                className="p-3 rounded-lg bg-black/40 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-blue-500 transition-colors resize-y relative z-12"
                            />
                            <a href=""><ButtonMinimalist /></a>
                        </div>
                    </div>

  )
};
  export default MagicCard;