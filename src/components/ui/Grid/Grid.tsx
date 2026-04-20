import { useEffect, useState } from 'react';
import GlowText from '../GlowText';
export default function Grid() {
    
        const [isMounted, setIsMounted] = useState(false);
        useEffect(() => {
            setIsMounted(true);
            const timer = setTimeout(() => {
                const AOS = require('aos');
                AOS.init({
                    duration: 1000,  // delay para asegurar que el DOM esté estable
                    once: true,
                    mirror: false,
                    startEvent: 'DOMContentLoaded', // Esta opción ayuda a que AOS no oculte cosas que ya deberían verse
                });
                AOS.refresh();
            }, 100); // 100ms es imperceptible para el usuario pero vital para el código
    
            return () => clearTimeout(timer); // Limpieza de memoria
        }, []);
    return (
        <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2 rounded-xl p-6 bg-linear-65 from-mist-900 to-olive-900" data-aos={isMounted ? "fade-up" : undefined}>
                <h2 className="text-3xl m-2 font-semibold text-transparent bg-clip-text bg-linear-to-br from-gray-100 via-gray-400 to-gray-200 font-outfit">Hola! soy</h2> 
                <h3 className="text-2xl m-2 font-medium text-transparent bg-clip-text bg-linear-to-br from-gray-100 via-gray-400 to-gray-200 font-outfit">Tengo 24 años y vivo en Buenos Aires, Argentina.</h3>
                <p className="text-xl m-2 text-transparent bg-clip-text bg-linear-to-br from-gray-100 via-gray-400 to-gray-200 font-outfit font-normal">Busco entender la lógica detrás de lo que solemos dar por sentado. Mi enfoque combina la investigación constante con una rutina activa: correr, tocar el piano y meditar son mis herramientas para mantener el equilibrio entre mente y cuerpo</p>
            </div>
<GlowText text="Mariela" />


            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 row-span-2" data-aos={isMounted ? "fade-up" : undefined}>
                <span className="text-slate-400">02</span>
                <span className="text-slate-400">02</span>
            </div>
            <div className="row-span-2 bg-linear-to-r from-violet-600 to-indigo-600 rounded-xl p-6" data-aos={isMounted ? "fade-up" : undefined}>
                <h3 className="text-white">Proyecto Destacado 2</h3>
                <p className="text-white/80 text-xs">Ocupo el espacio de dos cuadrantes. 2</p>
            </div>
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700" data-aos={isMounted ? "fade-up" : undefined}>
                <span className="text-slate-400">03</span>
            </div>
            <div className="col-span-2 bg-linear-to-r from-violet-600 to-indigo-600 rounded-xl p-6" data-aos={isMounted ? "fade-up" : undefined}>
                <h3 className="text-white">Proyecto Destacado 3</h3>
                <p className="text-white/80 text-xs">Ocupo el espacio de dos cuadrantes.3</p>
            </div>

        </div>
    );
}